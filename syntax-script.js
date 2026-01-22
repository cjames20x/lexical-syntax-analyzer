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
    
    // Define what words create variables
    const DECLARATION_KEYWORDS = ['NUMBS', 'DECI', 'DUO', 'LETT', 'TEXT', 'BOOL', 'SMALL', 'BIG'];
    const MODIFIERS = ['CAP', 'NOCAP', 'FIXED', 'SHADY'];

    lines.forEach((line, index) => {
        const lineNum = index + 1;
        
        // === 1. STRIP COMMENTS ===
        let trimmedLine = line.split('//')[0];
        trimmedLine = trimmedLine.split('#')[0].trim();

        if (!trimmedLine) return;

        // A. Define the strict list of allowed operators
        const ALLOWED_OPS = [
            // Arithmetic
            '+', '-', '*', '/', '%', 
            '++', '--', 
            // Assignment
            '=', '*=', '+=', '-=', '/=', '%=', 
            '&=', '|=', '^=', '>>=', '<<=',
            // Comparison (ADDED THESE)
            '==', '!=', '>=', '<=', '>', '<', '!' 
        ];

        // B. Temporarily remove content inside quotes to prevent false alarms 
        const cleanLine = trimmedLine.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''");

        // C. Find all sequences of operator characters
        //    Matches combinations of: + - * / % = & | ^ > < !
        const foundOps = cleanLine.match(/[+\-*/%=&|^><!]+/g);

        if (foundOps) {
            foundOps.forEach(op => {
                // If the operator found is NOT in the allowed list, report error
                if (!ALLOWED_OPS.includes(op)) {
                    errors.push({
                        line: lineNum,
                        description: `Lexical Error: Invalid operator '${op}' detected.`
                    });
                }
            });  
        }

        // === 2. SEMICOLON CHECK ===
        // Ignore lines ending with '{', '}', or empty lines
        if (!trimmedLine.endsWith(';') && !trimmedLine.endsWith('{') && !trimmedLine.endsWith('}')) {
            errors.push({
                line: lineNum,
                description: 'Missing semicolon at end of statement'
            });
        }

        // === 3. LETT CHECK (Char) ===
        if (trimmedLine.startsWith('LETT') || trimmedLine.startsWith('Lett')) {
            const parts = trimmedLine.split(/\s+/);
            if (parts[0] !== 'LETT') errors.push({ line: lineNum, description: 'Invalid keyword - use LETT (uppercase)' });
            
            if (trimmedLine.includes('=')) {
                const splitLine = trimmedLine.split('=');
                let value = splitLine[1].trim();
                if (value.endsWith(';')) value = value.slice(0, -1).trim();

                if (!value.startsWith("'") || !value.endsWith("'")) {
                    errors.push({ line: lineNum, description: "Type Error: 'LETT' requires a value in single quotes (e.g., 'A')" });
                }
            }
        }

        // === 4. TEXT CHECK (String) ===
        if (trimmedLine.startsWith('TEXT')) {
            if (trimmedLine.includes('=')) {
                const splitLine = trimmedLine.split('=');
                let value = splitLine[1].trim();
                if (value.endsWith(';')) value = value.slice(0, -1).trim();

                if (!value.startsWith('"') || !value.endsWith('"')) {
                    errors.push({ line: lineNum, description: "Type Error: 'TEXT' requires a value enclosed in double quotes (e.g., \"Hello\")" });
                }
            }
        }

        // === 5. SPILL (PRINT) CHECK ===
        if (trimmedLine.startsWith('SPILL')) {
            // Extract content between parentheses: SPILL("text", var) -> "text", var
            const match = trimmedLine.match(/SPILL\s*\((.*)\)/);
            if (match) {
                let content = match[1].trim();
                
                // Count the number of double quotes in the content
                const quoteCount = (content.match(/"/g) || []).length;
                
                if (quoteCount % 2 !== 0) {
                    errors.push({ 
                        line: lineNum, 
                        description: "Syntax Error: Missing closing quote in SPILL statement" 
                    });
                }
            }
        }

        // === 6. IDENTIFIER VALIDATION ===
        const tokens = trimmedLine.split(/[\s=;]+/);
        let identifier = null;

        // Check: FIXED NUMBS pi (Modifier + Type)
        if (tokens.length >= 3 && MODIFIERS.includes(tokens[0]) && DECLARATION_KEYWORDS.includes(tokens[1])) {
            identifier = tokens[2];
        }
        // Check: NUMBS age (Type only)
        else if (tokens.length >= 2 && DECLARATION_KEYWORDS.includes(tokens[0])) {
            identifier = tokens[1];
        }

        if (identifier) {
            if (/^\d/.test(identifier)) {
                errors.push({ line: lineNum, description: `Invalid identifier '${identifier}': Cannot start with a number` });
            }
            else if (/[^a-zA-Z0-9_]/.test(identifier)) {
                errors.push({ line: lineNum, description: `Invalid identifier '${identifier}': Cannot contain special characters` });
            }
        }

        // === 7. ASSIGNMENT SYNTAX CHECK ===
        const firstWord = tokens[0];
        const isDeclaration = DECLARATION_KEYWORDS.includes(firstWord) || MODIFIERS.includes(firstWord);

        if (isDeclaration && trimmedLine.includes('=') && !trimmedLine.includes('==')) {
            const beforeEquals = trimmedLine.split('=')[0].trim();
            const parts = beforeEquals ? beforeEquals.split(/\s+/) : [];
            
            const isModifier = parts.length === 3 && MODIFIERS.includes(parts[0]);
            
            if (!beforeEquals || (parts.length > 2 && !isModifier)) {
                errors.push({ line: lineNum, description: 'Invalid assignment syntax' });
            }
        }
    });

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