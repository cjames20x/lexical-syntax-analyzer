const KEYWORDS = [ 
    'ALIAS', 'BIG', 'BLEND', 'BOOL', 'BOUNCE', 'CAP', 'CASE', 'CORE', 'CYCLE', 'DECI', 'DO', 'DOUBLE', 'DUO',
    'DROP', 'ELSE', 'EMOJI', 'EMPTY', 'ENUM', 'FAM', 'FIXED', 'FOR', 'GRAB',
    'IF', 'IMPORT', 'LENGTH', 'LETT', 'MAXI', 'MINI', 'MATIC', 'NEXT', 'NOCAP',
    'NORM', 'NUMBS', 'OUT', 'SHADY', 'SMALL', 'SPILL', 'STAY', 'STRUCT', 'SWIM', 'SWITCH',
    'TAG', 'TEXT', 'VIBE', 'WHILE', 'ZAVED'
];

const FUNCTIONS = ['avg', 'ascending', 'descending', 'max', 'min', 'findString'];

function updateLineNumbers() {
    const editor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = editor.value.split('\n').length || 1;
    lineNumbers.textContent = Array.from({length: lines}, (_, i) => i + 1).join('\n');
}

function syncScroll() {
    const editor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('lineNumbers');
    lineNumbers.scrollTop = editor.scrollTop;
}

function copyCode() {
    const editor = document.getElementById('codeEditor');
    editor.select();
    document.execCommand('copy');
}

function pasteCode() {
    const editor = document.getElementById('codeEditor');
    navigator.clipboard.readText().then(text => {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const currentValue = editor.value;
        editor.value = currentValue.substring(0, start) + text + currentValue.substring(end);
        editor.selectionStart = editor.selectionEnd = start + text.length;
        updateLineNumbers();
        // Trigger syntax highlighting
        if (window.syntaxHighlighter) {
            window.syntaxHighlighter.highlight();
        }
    }).catch(err => {
        console.error('Failed to read clipboard:', err);
    });
}

function clearAll() {
    document.getElementById('codeEditor').value = '';
    document.getElementById('lineNumbers').textContent = '1';
    clearErrorHighlights();
    document.getElementById('analysisSummary').innerHTML = '<span class="summary-text">Ready to analyze</span>';
    
    const resultsDiv = document.getElementById('analyzerResults');
    resultsDiv.innerHTML = `
        <div class="placeholder-text">
            System is ready to analyze!<br>
            Please enter a code to analyze.
        </div>
    `;
}

function analyzeCode() {
    const code = document.getElementById('codeEditor').value.trim();
    
    if (!code) {
        showModal('error', 'INPUT REQUIRED', 'Please enter a code to analyze.');
        const resultsDiv = document.getElementById('analyzerResults');
        resultsDiv.innerHTML = `
            <div class="placeholder-text">
                System is ready to analyze!<br>
                Please enter a code to analyze.
            </div>
        `;
        return;
    }

    const errors = performSyntaxAnalysis(code);
    displayResults(errors);
    
    if (errors.length > 0) {
        showModal('error', 'SYNTAX ERROR DETECTED!', 'There is an error in the code.');
    } else {
        showModal('success', 'SYNTAX SUCCESSFULLY ANALYZED!', 'No syntax errors found in the code.');
    }
}

function performSyntaxAnalysis(code) {
    const lines = code.split('\n');
    const errors = [];
    
    // === 0. GLOBAL STATE ===
    const declaredVars = new Set();
    let braceBalance = 0; 
    let inMultiLineComment = false; 
    
    // KEYWORDS
    const DECLARATION_KEYWORDS = ['NUMBS', 'DECI', 'DUO', 'LETT', 'TEXT', 'BOOL', 'SMALL', 'BIG'];
    const MODIFIERS = ['CAP', 'NOCAP', 'FIXED', 'SHADY'];
    const CONTROL_FLOW = ['IF', 'ELSE', 'FR', 'CYCLE', 'SWITCH', 'DO', 'BIND', 'ENUM'];
    const ALLOWED_OPS = ['+', '-', '*', '/', '%', '++', '--', '=', '*=', '+=', '-=', '/=', '%=', '&=', '|=', '^=', '>>=', '<<=', '==', '!=', '>=', '<=', '>', '<', '!'];

    lines.forEach((line, index) => {
        const lineNum = index + 1;
        let currentLine = line;

        // === 0a. MULTI-LINE COMMENT STRIPPING ===
        if (inMultiLineComment) {
            const closeIndex = currentLine.indexOf('*/');
            if (closeIndex !== -1) {
                inMultiLineComment = false;
                currentLine = currentLine.substring(closeIndex + 2);
            } else { return; }
        }
        currentLine = currentLine.replace(/\/\*.*?\*\//g, '');
        if (currentLine.includes('*/')) {
             errors.push({ line: lineNum, description: "Syntax Error: Unexpected closing comment '*/'" });
        }
        const openIndex = currentLine.indexOf('/*');
        if (openIndex !== -1) {
            inMultiLineComment = true;
            currentLine = currentLine.substring(0, openIndex);
        }

        // Standard cleanup
        let trimmedLine = currentLine.split('//')[0].split('#')[0].trim();
        if (!trimmedLine) return;

        const tokenParts = trimmedLine.split(/\s+/);
        const firstToken = tokenParts[0];

        // === 0b. BRACE BALANCE ===
        const openCount = (trimmedLine.match(/{/g) || []).length;
        const closeCount = (trimmedLine.match(/}/g) || []).length;
        braceBalance += (openCount - closeCount);
        if (braceBalance < 0) {
            errors.push({ line: lineNum, description: "Syntax Error: Unexpected closing brace '}'" });
            braceBalance = 0;
        }

        // === 0c. TRACK DECLARATIONS (Memory) ===
        let newVar = null;
        if (DECLARATION_KEYWORDS.includes(firstToken)) {
            newVar = tokenParts[1];
        } else if (MODIFIERS.includes(firstToken) && DECLARATION_KEYWORDS.includes(tokenParts[1])) {
            newVar = tokenParts[2];
        }
        if (newVar) {
            newVar = newVar.split(/[=;,]/)[0].trim();
            if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(newVar)) {
                declaredVars.add(newVar);
            }
        }

        // === 0d. KEYWORD & TYPO CHECK ===
        if (!trimmedLine.endsWith('{') && !trimmedLine.endsWith('}')) {
            let isValidStart = false;
            
            if (DECLARATION_KEYWORDS.includes(firstToken)) isValidStart = true;
            else if (MODIFIERS.includes(firstToken)) isValidStart = true;
            else if (CONTROL_FLOW.includes(firstToken)) isValidStart = true;
            
            // Allow SPILL, DO-CYCLE, and Operations
            else if (firstToken === 'SPILL' || firstToken.startsWith('SPILL(') || firstToken === 'ZAVED') isValidStart = true;
            else if ((firstToken === '}' && tokenParts[1] && tokenParts[1].startsWith('CYCLE')) || firstToken.startsWith('}CYCLE')) isValidStart = true;
            else {
                let potentialVar = firstToken.split(/[=;(+]/)[0];
                if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(potentialVar)) {
                    if (declaredVars.has(potentialVar)) {
                        isValidStart = true;
                    } 
                    else if (trimmedLine.match(/[+\-*/%=&|^><!]/)) {
                         isValidStart = true;
                    }
                }
            }
            
            if (!isValidStart) {
                CONTROL_FLOW.forEach(kw => { if (firstToken.startsWith(kw + '(')) isValidStart = true; });
            }

            if (!isValidStart && firstToken.length > 0) {
                if (tokenParts.includes('=') || firstToken.includes('=')) {
                    if (tokenParts.length >= 2 && tokenParts[1] !== '=' && !firstToken.includes('=')) {
                         errors.push({ line: lineNum, description: `Syntax Error: Unrecognized keyword or data type '${firstToken}'` });
                    } else {
                         errors.push({ line: lineNum, description: `NameError: Variable '${firstToken.split('=')[0]}' is not defined` });
                    }
                } else if (trimmedLine.endsWith(';')) {
                    errors.push({ line: lineNum, description: `Syntax Error: Unrecognized statement starting with '${firstToken}'` });
                }
            }
        }

        // === 1. LEXICAL CHECK ===
        const cleanLine = trimmedLine.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''");
        const foundOps = cleanLine.match(/[+\-*/%=&|^><!]+/g);
        if (foundOps) {
            foundOps.forEach(op => {
                if (!ALLOWED_OPS.includes(op) && !trimmedLine.includes('ZAVED') && !trimmedLine.includes('{')) {
                    errors.push({ line: lineNum, description: `Lexical Error: Invalid operator '${op}' detected.` });
                }
            });  
        }

        // === 2. SEMICOLON CHECK ===
        if (!trimmedLine.endsWith(';') && !trimmedLine.endsWith('{') && !trimmedLine.endsWith('}')) {
            errors.push({ line: lineNum, description: 'Missing semicolon at end of statement' });
        }

        // === 2.5 (ENHANCED) TYPE VALIDATION ===
        let isDecl = false;
        let baseType = "";
        let declStartStr = "";

        if (DECLARATION_KEYWORDS.includes(firstToken)) {
            isDecl = true;
            baseType = firstToken;
            declStartStr = firstToken;
        } else if (MODIFIERS.includes(firstToken) && DECLARATION_KEYWORDS.includes(tokenParts[1])) {
            isDecl = true;
            baseType = tokenParts[1];
            declStartStr = firstToken + " " + tokenParts[1];
        }

        if (isDecl) {
            let contentOnly = trimmedLine.substring(declStartStr.length);
            if (contentOnly.endsWith(';')) contentOnly = contentOnly.slice(0, -1);
            
            const parts = contentOnly.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            parts.forEach(part => {
                let segment = part.trim();
                if (!segment) return; 

                if (!segment.includes('=')) {
                    if (/\s+/.test(segment)) {
                         errors.push({ line: lineNum, description: `Syntax Error: Missing assignment operator '=' in '${segment}'` });
                    }
                } else {
                    let sides = segment.split('=');
                    let varName = sides[0].trim();
                    let val = sides[1].trim();

                    if (/\s+/.test(varName)) {
                        errors.push({ line: lineNum, description: `Syntax Error: Invalid identifier '${varName}' (spaces not allowed)` });
                    }

                    if (val === "") {
                        errors.push({ line: lineNum, description: `Syntax Error: Missing value for variable '${varName}'` });
                    } else {
                        const isVariableRef = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(val) && !val.startsWith('"') && !val.startsWith("'") && !/^\d/.test(val);
                        
                        if (isVariableRef) {
                            if (!declaredVars.has(val)) {
                                errors.push({ line: lineNum, description: `NameError: Variable '${val}' is not defined` });
                            }
                        } else {
                            if (baseType === 'NUMBS' || baseType === 'SMALL' || baseType === 'BIG') {
                                if (!/^-?\d+$/.test(val)) {
                                    errors.push({ line: lineNum, description: `Type Error: '${varName}' expects an Integer (assigned value: ${val})` });
                                }
                            }
                            else if (baseType === 'DECI') {
                                if (!/^-?\d+(\.\d+)?$/.test(val)) {
                                    errors.push({ line: lineNum, description: `Type Error: '${varName}' expects a Decimal (assigned value: ${val})` });
                                }
                            }
                            else if (baseType === 'TEXT') {
                                if (!val.startsWith('"') || !val.endsWith('"')) {
                                    errors.push({ line: lineNum, description: `Type Error: '${varName}' expects a String starting with "` });
                                }
                            }
                            else if (baseType === 'LETT') {
                                if (!val.startsWith("'") || !val.endsWith("'")) {
                                    errors.push({ line: lineNum, description: `Type Error: '${varName}' expects a Character starting with '` });
                                } else if (val.length !== 3) { 
                                    errors.push({ line: lineNum, description: `Type Error: '${varName}' expects exactly 1 character` });
                                }
                            }
                            else if (baseType === 'BOOL') {
                                const validBools = ['TRUE', 'FALSE', 'YES', 'NO', '1', '0'];
                                if (!validBools.includes(val.toUpperCase())) {
                                    errors.push({ line: lineNum, description: `Type Error: '${varName}' expects a Boolean value` });
                                }
                            }
                        }
                    }
                }
            });
        }

        // === 5. SPILL (EZPRINT + CHAINZ) ===
        if (trimmedLine.startsWith('SPILL')) {
            // --- FIX START: Structural Integrity Check ---
            // 1. Check for unbalanced quotes first
            const quoteCount = (trimmedLine.match(/"/g) || []).length;
            if (quoteCount % 2 !== 0) {
                 errors.push({ line: lineNum, description: "Syntax Error: Missing double quotation in SPILL" });
            } 
            else {
                // 2. If quotes are balanced, strip them out to strictly check parentheses structure
                // This prevents parentheses inside strings (e.g., "Hello)") from confusing the count.
                const cleanLineForParens = trimmedLine.replace(/"[^"]*"/g, '');
                const openParens = (cleanLineForParens.match(/\(/g) || []).length;
                const closeParens = (cleanLineForParens.match(/\)/g) || []).length;
                
                if (openParens !== closeParens) {
                    errors.push({ line: lineNum, description: "Syntax Error: Missing parenthesis in SPILL" });
                }
            }
            // --- FIX END ---

            const chainMatches = trimmedLine.match(/\((.*?)\)/g);
            if (!chainMatches) {
                 errors.push({ line: lineNum, description: "Syntax Error: SPILL requires arguments in parentheses" });
            } else {
                chainMatches.forEach(group => {
                    let content = group.slice(1, -1).trim();
                    // Double-check quotes inside the group (redundant but safe)
                    const quoteCount = (content.match(/"/g) || []).length;
                    if (quoteCount % 2 !== 0) {
                        errors.push({ line: lineNum, description: "Syntax Error: Missing double quotation in SPILL" });
                        return;
                    }
                    let structureCheck = content.replace(/"[^"]*"/g, "###STR###");
                    if (/(###STR###|[a-zA-Z0-9_]+)\s+(###STR###|[a-zA-Z0-9_]+)/.test(structureCheck)) {
                         errors.push({ line: lineNum, description: "Syntax Error: Missing comma between arguments" });
                    }
                    let safeContent = content.replace(/"[^"]*"/g, match => match.replace(/,/g, '###COMMA###'));
                    let args = safeContent.split(',');
                    args.forEach(arg => {
                        arg = arg.trim();
                        if (arg && !arg.startsWith('"') && !/^\d+$/.test(arg)) {
                            if (!declaredVars.has(arg)) {
                                errors.push({ line: lineNum, description: `NameError: Variable '${arg}' is not defined` });
                            }
                        }
                    });
                });
            }
        }

        // === 7. BLOCK LOGIC & ZAVED CHECK ===
        if (trimmedLine.endsWith('{')) {
            if (firstToken === 'ZAVED') {
                let hasIdentifier = false;
                if (tokenParts.length > 1) {
                    let potentialId = tokenParts[1];
                    if (potentialId && potentialId !== '{') {
                        let cleanId = potentialId.replace('{', '');
                        if (cleanId.length > 0) hasIdentifier = true;
                    }
                }
                if (!hasIdentifier) {
                    errors.push({ line: lineNum, description: "Syntax Error: Missing identifier for ZAVED block" });
                }
            }
            else {
                let isControlFlow = false;
                if (CONTROL_FLOW.includes(firstToken)) isControlFlow = true;
                else {
                    CONTROL_FLOW.forEach(kw => {
                        if (firstToken.startsWith(kw + '(')) isControlFlow = true;
                    });
                }

                if (!isControlFlow) {
                    errors.push({ line: lineNum, description: "Syntax Error" });
                }
            }
        }
        else if (firstToken === 'ZAVED') {
            errors.push({ line: lineNum, description: "Syntax Error: ZAVED block must end with opening brace '{'" });
        }

        // === 6. IDENTIFIER VALIDATION ===
        let identifier = null;
        if (tokenParts.length >= 3 && MODIFIERS.includes(tokenParts[0]) && DECLARATION_KEYWORDS.includes(tokenParts[1])) {
            identifier = tokenParts[2];
        } else if (tokenParts.length >= 2 && DECLARATION_KEYWORDS.includes(tokenParts[0])) {
            identifier = tokenParts[1];
        }

        if (identifier) {
            identifier = identifier.split(/[=;,]/)[0].trim();
            if (/^\d/.test(identifier)) {
                errors.push({ line: lineNum, description: `Invalid identifier '${identifier}': Cannot start with a number` });
            } 
            else if (/[^a-zA-Z0-9_]/.test(identifier)) {
                errors.push({ line: lineNum, description: `Invalid identifier '${identifier}': Cannot contain special characters` });
            }
        }
    });

    // === FINAL CHECKS ===
    if (braceBalance > 0) {
        errors.push({ line: lines.length, description: "Syntax Error: Missing closing curly brace '}'" });
    }
    if (inMultiLineComment) {
        errors.push({ line: lines.length, description: "Syntax Error: Unclosed multi-line comment. Expected '*/'" });
    }

    return errors;
}
function displayResults(errors) {
    const resultsDiv = document.getElementById('analyzerResults');
    const summaryDiv = document.getElementById('analysisSummary');
    const code = document.getElementById('codeEditor').value.trim();
    const lines = code.split('\n').length;
    
    clearErrorHighlights();
    
    if (errors.length > 0) {
        highlightErrorLines(errors);
    }
    
    summaryDiv.innerHTML = `
        <div class="analysis-completed-box">
            <div class="analysis-completed-header">Analysis Completed!</div>
            <div class="analysis-stats">
                <div class="stat-item">
                    <span class="stat-label">Line:</span>
                    <span class="stat-value">${lines}</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <span class="stat-label error-label">Error Detected:</span>
                    <span class="stat-value error-value">${errors.length}</span>
                </div>
            </div>
        </div>
    `;
    
    if (errors.length === 0) {
        resultsDiv.innerHTML = `
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Line</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" style="text-align: center; padding: 40px; color: #00d964;">
                            No syntax errors detected
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    } else {
        let tableHTML = `
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Line</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        errors.forEach(error => {
            tableHTML += `
                <tr class="error-row">
                    <td class="line-number-cell">Line ${error.line}</td>
                    <td class="error-text">${error.description}</td>
                </tr>
            `;
        });
        
        tableHTML += `
                </tbody>
            </table>
        `;
        
        resultsDiv.innerHTML = tableHTML;
    }
}

function highlightErrorLines(errors) {
    const editorWrapper = document.querySelector('.editor-wrapper');
    
    errors.forEach(error => {
        const highlight = document.createElement('div');
        highlight.className = 'error-line-highlight';
        highlight.style.top = `${(error.line - 1) * 22.4 + 15}px`;
        highlight.setAttribute('data-line', error.line);
        editorWrapper.appendChild(highlight);
    });
}

function clearErrorHighlights() {
    const highlights = document.querySelectorAll('.error-line-highlight');
    highlights.forEach(h => h.remove());
}

function showModal(type, title, message) {
    const modal = document.getElementById('modal');
    const icon = document.getElementById('modalIcon');
    const titleEl = document.getElementById('modalTitle');
    const messageEl = document.getElementById('modalMessage');

    if (type === 'error') {
        icon.className = 'modal-icon error';
        icon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        `;
    } else {
        icon.className = 'modal-icon success';
        icon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.how-to-box, .how-to-card');

    function revealOnScroll() {
        revealElements.forEach((el, index) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                setTimeout(() => {
                    el.classList.add('show');
                }, index * 120);
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

updateLineNumbers();

// ============= SYNTAX HIGHLIGHTING =============
class SyntaxHighlighter {
    constructor(editorId) {
        this.editor = document.getElementById(editorId);
        this.createHighlightLayer();
        this.setupEventListeners();
    }
    
    createHighlightLayer() {
        const wrapper = this.editor.parentElement;
        this.highlightLayer = document.createElement('div');
        this.highlightLayer.className = 'syntax-highlight-layer';
        this.highlightLayer.style.cssText = `
            position: absolute;
            top: 0;
            left: 50px;
            right: 0;
            bottom: 0;
            padding: 15px;
            font-size: 14px;
            line-height: 1.6;
            font-family: 'Consolas', 'Courier New', monospace;
            pointer-events: none;
            white-space: pre;
            overflow: hidden;
            z-index: 0;
        `;
        wrapper.insertBefore(this.highlightLayer, this.editor);
    }
    
    setupEventListeners() {
        this.editor.addEventListener('input', () => {
            this.highlight();
            updateLineNumbers();
        });
        this.editor.addEventListener('scroll', () => this.syncScroll());
        this.highlight();
    }
    
    syncScroll() {
        this.highlightLayer.scrollTop = this.editor.scrollTop;
        this.highlightLayer.scrollLeft = this.editor.scrollLeft;
        const lineNumbers = document.getElementById('lineNumbers');
        lineNumbers.scrollTop = this.editor.scrollTop;
    }
    
    highlight() {
        const code = this.editor.value;
        const highlighted = this.applyHighlighting(code);
        this.highlightLayer.innerHTML = highlighted;
        this.syncScroll();
    }
    
    applyHighlighting(code) {
        const colors = {
            keyword: '#C586C0',
            function: '#DCDCAA',
            string: '#CE9178',
            number: '#B5CEA8',
            comment: '#6A9955',
            operator: '#D4D4D4',
            delimiter: '#FFD700',
            default: '#D4D4D4'
        };
        
        const keywords = KEYWORDS.join('|');
        let result = code;
        
        // First escape HTML to prevent injection
        result = result.replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/>/g, '&gt;');
        
        // Apply syntax highlighting with temporary markers
        result = result.replace(/(#[^\n]*)/g, '###COMMENT_START###$1###COMMENT_END###');
        result = result.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '###STRING_START###$1###STRING_END###');
        result = result.replace(/\b(\d+(?:\.\d+)?)\b/g, '###NUMBER_START###$1###NUMBER_END###');
        
        const keywordPattern = new RegExp(`\\b(${keywords})\\b`, 'g');
        result = result.replace(keywordPattern, '###KEYWORD_START###$1###KEYWORD_END###');
        
        const operators = ['\\+\\+', '--', '===', '==', '!=', '&lt;=', '&gt;=', '\\+=', '-=', '\\*=', '/=', '%=', '&amp;=', '\\|=', '\\^=', '&amp;&amp;', '\\|\\|', '\\+', '-', '\\*', '/', '%', '=', '&lt;', '&gt;', '!'];
        const operatorPattern = new RegExp(`(${operators.join('|')})`, 'g');
        result = result.replace(operatorPattern, '###OPERATOR_START###$1###OPERATOR_END###');
        
        result = result.replace(/(&lt;|&gt;|&amp;)|([(){}\[\]:;,])/g, function(match, entity, delimiter) {
            if (entity) {
                return entity; // It's an entity (like &gt;), do NOT touch the semicolon!
            }
            // It's a real delimiter, go ahead and highlight it
            return '###DELIMITER_START###' + delimiter + '###DELIMITER_END###';
        });
        
        // === FIX APPLIED HERE ===
        // Changed (.*?) to ([\s\S]*?) to allow matching across newlines
        
        result = result.replace(/###COMMENT_START###([\s\S]*?)###COMMENT_END###/g, `<span style="color: ${colors.comment}; font-style: italic;">$1</span>`);
        result = result.replace(/###STRING_START###([\s\S]*?)###STRING_END###/g, `<span style="color: ${colors.string};">$1</span>`);
        result = result.replace(/###NUMBER_START###([\s\S]*?)###NUMBER_END###/g, `<span style="color: ${colors.number};">$1</span>`);
        result = result.replace(/###KEYWORD_START###([\s\S]*?)###KEYWORD_END###/g, `<span style="color: ${colors.keyword}; font-weight: bold;">$1</span>`);
        result = result.replace(/###OPERATOR_START###([\s\S]*?)###OPERATOR_END###/g, `<span style="color: ${colors.operator};">$1</span>`);
        result = result.replace(/###DELIMITER_START###([\s\S]*?)###DELIMITER_END###/g, `<span style="color: ${colors.delimiter};">$1</span>`);
        
        return result;
    }
}

if (document.getElementById('codeEditor')) {
    window.syntaxHighlighter = new SyntaxHighlighter('codeEditor');
}