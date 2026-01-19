// Token Types Enum
const TokenType = {
    NULL: -1,
    // IDENTIFIERS
    IDENTIFIER: 'IDENTIFIER',
    NUMBER: 'NUMBER',
    COMMENT: 'COMMENT',
    // OPERATORS
    OP_PLUS: 'OP_PLUS',
    OP_MINUS: 'OP_MINUS',
    OP_MULTIPLY: 'OP_MULTIPLY',
    OP_DIVIDE: 'OP_DIVIDE',
    OP_MODULO: 'OP_MODULO',
    OP_ASSIGN: 'OP_ASSIGN',
    OP_PLUS_ASS: 'OP_PLUS_ASS',
    OP_MINUS_ASS: 'OP_MINUS_ASS',
    OP_MULTIPLY_ASS: 'OP_MULTIPLY_ASS',
    OP_DIVIDE_ASS: 'OP_DIVIDE_ASS',
    OP_MOD_ASS: 'OP_MOD_ASS',
    OP_XOR_ASS: 'OP_XOR_ASS',
    OP_AND_ASS: 'OP_AND_ASS',
    OP_OR_ASS: 'OP_OR_ASS',
    OP_LESS: 'OP_LESS',
    OP_GREATER: 'OP_GREATER',
    OP_LESS_EQUAL: 'OP_LESS_EQUAL',
    OP_GREATER_EQUAL: 'OP_GREATER_EQUAL',
    OP_EQUAL: 'OP_EQUAL',
    OP_STRICT_EQUAL: 'OP_STRICT_EQUAL',
    OP_NOT_EQUAL: 'OP_NOT_EQUAL',
    OP_NOT: 'OP_NOT',
    OP_AND: 'OP_AND',
    OP_OR: 'OP_OR',
    OP_INCREMENT: 'OP_INCREMENT',
    OP_DECREMENT: 'OP_DECREMENT',
    // KEYWORDS
    KW_ALIAS: 'KW_ALIAS',
    KW_BIG: 'KW_BIG',
    KW_BLEND: 'KW_BLEND',
    KW_BOOL: 'KW_BOOL',
    KW_BOUNCE: 'KW_BOUNCE',
    KW_CAP: 'KW_CAP',
    KW_CASE: 'KW_CASE',
    KW_CORE: 'KW_CORE',
    KW_DECI: 'KW_DECI',
    KW_DOUBLE: 'KW_DOUBLE',
    KW_DROP: 'KW_DROP',
    KW_DUO: 'KW_DUO',
    KW_ELSE: 'KW_ELSE',
    KW_EMOJI: 'KW_EMOJI',
    KW_EMPTY: 'KW_EMPTY',
    KW_ENUM: 'KW_ENUM',
    KW_FAM: 'KW_FAM',
    KW_FIXED: 'KW_FIXED',
    KW_FOR: 'KW_FOR',
    KW_GRAB: 'KW_GRAB',
    KW_IF: 'KW_IF',
    KW_IMPORT: 'KW_IMPORT',
    KW_LENGTH: 'KW_LENGTH',
    KW_LETT: 'KW_LETT',
    KW_MAXI: 'KW_MAXI',
    KW_MINI: 'KW_MINI',
    KW_MATIC: 'KW_MATIC',
    KW_NEXT: 'KW_NEXT',
    KW_NOCAP: 'KW_NOCAP',
    KW_NORM: 'KW_NORM',
    KW_NUMBS: 'KW_NUMBS',
    KW_OUT: 'KW_OUT',
    KW_SMALL: 'KW_SMALL',
    KW_SHADY: 'KW_SHADY',
    KW_SPILL: 'KW_SPILL',
    KW_STAY: 'KW_STAY',
    KW_STRUCT: 'KW_STRUCT',
    KW_SWIM: 'KW_SWIM',
    KW_SWITCH: 'KW_SWITCH',
    KW_TAG: 'KW_TAG',
    KW_TEXT: 'KW_TEXT',
    KW_VIBE: 'KW_VIBE',
    KW_WHILE: 'KW_WHILE',
    KW_ZAVED: 'KW_ZAVED',
    // FUNCTIONS
    FUNC_AVG: 'FUNC_AVG',
    FUNC_ASCENDING: 'FUNC_ASCENDING',
    FUNC_DESCENDING: 'FUNC_DESCENDING',
    FUNC_MAX: 'FUNC_MAX',
    FUNC_MIN: 'FUNC_MIN',
    FUNC_FINDSTRING: 'FUNC_FINDSTRING',
    // DELIMITERS
    DELI_COLON: 'DELI_COLON',
    DELI_SEMICOLON: 'DELI_SEMICOLON',
    DELI_LPAREN: 'DELI_LPAREN',
    DELI_RPAREN: 'DELI_RPAREN',
    DELI_LBRACE: 'DELI_LBRACE',
    DELI_RBRACE: 'DELI_RBRACE',
    DELI_LBRACKET: 'DELI_LBRACKET',
    DELI_RBRACKET: 'DELI_RBRACKET',
    DELI_COMMA: 'DELI_COMMA',
    DELI_QUOTE: 'DELI_QUOTE',
    ERROR: 'ERROR',
    EOF: 'EOF'
};

// Keywords mapping
const KEYWORDS = {
    'ALIAS': TokenType.KW_ALIAS,
    'BIG': TokenType.KW_BIG,
    'BLEND': TokenType.KW_BLEND,
    'BOOL': TokenType.KW_BOOL,
    'BOUNCE': TokenType.KW_BOUNCE,
    'CAP': TokenType.KW_CAP,
    'CASE': TokenType.KW_CASE,
    'CORE': TokenType.KW_CORE,
    'DECI': TokenType.KW_DECI,
    'DOUBLE': TokenType.KW_DOUBLE,
    'DROP': TokenType.KW_DROP,
    'DUO': TokenType.KW_DUO,
    'ELSE': TokenType.KW_ELSE,
    'EMOJI': TokenType.KW_EMOJI,
    'EMPTY': TokenType.KW_EMPTY,
    'ENUM': TokenType.KW_ENUM,
    'FAM': TokenType.KW_FAM,
    'FIXED': TokenType.KW_FIXED,
    'FOR': TokenType.KW_FOR,
    'GRAB': TokenType.KW_GRAB,
    'IF': TokenType.KW_IF,
    'IMPORT': TokenType.KW_IMPORT,
    'LENGTH': TokenType.KW_LENGTH,
    'LETT': TokenType.KW_LETT,
    'MAXI': TokenType.KW_MAXI,
    'MINI': TokenType.KW_MINI,
    'MATIC': TokenType.KW_MATIC,
    'NEXT': TokenType.KW_NEXT,
    'NOCAP': TokenType.KW_NOCAP,
    'NORM': TokenType.KW_NORM,
    'NUMBS': TokenType.KW_NUMBS,
    'OUT': TokenType.KW_OUT,
    'SMALL': TokenType.KW_SMALL,
    'SHADY': TokenType.KW_SHADY,
    'SPILL': TokenType.KW_SPILL,
    'STAY': TokenType.KW_STAY,
    'STRUCT': TokenType.KW_STRUCT,
    'SWIM': TokenType.KW_SWIM,
    'SWITCH': TokenType.KW_SWITCH,
    'TAG': TokenType.KW_TAG,
    'TEXT': TokenType.KW_TEXT,
    'VIBE': TokenType.KW_VIBE,
    'WHILE': TokenType.KW_WHILE,
    'ZAVED': TokenType.KW_ZAVED,
    'AVG': TokenType.FUNC_AVG,
    'ASC': TokenType.FUNC_ASCENDING,
    'DESC': TokenType.FUNC_DESCENDING,
    'MAX': TokenType.FUNC_MAX,
    'MIN': TokenType.FUNC_MIN,
    'FINDSTR': TokenType.FUNC_FINDSTRING
};

// Token Class
class Token {
    constructor(type, lexeme, line) {
        this.type = type;
        this.lexeme = lexeme;
        this.line = line;
    }
}

// Lexer Class
class Lexer {
    constructor(source) {
        this.source = source;
        this.start = 0;
        this.current = 0;
        this.line = 1;
    }

    isAtEnd() {
        return this.current >= this.source.length;
    }

    advance() {
        const c = this.source[this.current];
        this.current++;
        return c;
    }

    peek() {
        return this.isAtEnd() ? '\0' : this.source[this.current];
    }

    peekNext() {
        return this.current + 1 >= this.source.length ? '\0' : this.source[this.current + 1];
    }

    match(expected) {
        if (this.isAtEnd() || this.source[this.current] !== expected) {
            return false;
        }
        this.current++;
        return true;
    }

    skipWhitespace() {
        while (true) {
            const c = this.peek();
            if (c === ' ' || c === '\t' || c === '\r') {
                this.advance();
            } else if (c === '\n') {
                this.line++;
                this.advance();
            } else {
                break;
            }
        }
    }

    makeToken(type, lexeme = null) {
        const text = lexeme !== null ? lexeme : this.source.substring(this.start, this.current);
        return new Token(type, text, this.line);
    }

    error(msg) {
        return new Token(TokenType.ERROR, msg, this.line);
    }

    handleNumber() {
        while (this.isDigit(this.peek())) {
            this.advance();
        }
        return this.makeToken(TokenType.NUMBER);
    }

    handleIdentifier() {
        while (this.isAlphaNumeric(this.peek())) {
            this.advance();
        }

        const text = this.source.substring(this.start, this.current);

        if (text in KEYWORDS) {
            return this.makeToken(KEYWORDS[text]);
        }

        // Check if it's an invalid token (all uppercase but not a keyword)
        if (text === text.toUpperCase() && text.match(/[A-Z]/)) {
            return this.error(`Invalid token: '${text}'`);
        }

        return this.makeToken(TokenType.IDENTIFIER);
    }

    handleComment() {
        // ### or # comment
        while (this.peek() === '#') {
            this.advance();
        }
        while (this.peek() !== '\n' && !this.isAtEnd()) {
            this.advance();
        }
        return this.makeToken(TokenType.COMMENT);
    }

    handleString(quoteChar) {
        while (this.peek() !== quoteChar && !this.isAtEnd()) {
            if (this.peek() === '\n') {
                this.line++;
            }
            this.advance();
        }

        if (this.isAtEnd()) {
            return this.error("Unterminated string");
        }

        // Closing quote
        this.advance();
        return this.makeToken(TokenType.DELI_QUOTE);
    }

    scanToken() {
        this.skipWhitespace();
        this.start = this.current;

        if (this.isAtEnd()) {
            return this.makeToken(TokenType.EOF, "");
        }

        const c = this.advance();

        // Comments
        if (c === '#') {
            return this.handleComment();
        }

        // Strings
        if (c === '"') {
            return this.handleString('"');
        }

        if (c === "'") {
            return this.handleString("'");
        }

        // Identifiers
        if (this.isAlpha(c) || c === '_') {
            return this.handleIdentifier();
        }

        // Numbers
        if (this.isDigit(c)) {
            return this.handleNumber();
        }

        // Operators
        if (c === '+') {
            if (this.match('+')) return this.makeToken(TokenType.OP_INCREMENT);
            if (this.match('=')) return this.makeToken(TokenType.OP_PLUS_ASS);
            return this.makeToken(TokenType.OP_PLUS);
        }

        if (c === '-') {
            if (this.match('-')) return this.makeToken(TokenType.OP_DECREMENT);
            if (this.match('=')) return this.makeToken(TokenType.OP_MINUS_ASS);
            return this.makeToken(TokenType.OP_MINUS);
        }

        if (c === '*') {
            if (this.match('=')) return this.makeToken(TokenType.OP_MULTIPLY_ASS);
            return this.makeToken(TokenType.OP_MULTIPLY);
        }

        if (c === '/') {
            if (this.match('=')) return this.makeToken(TokenType.OP_DIVIDE_ASS);
            return this.makeToken(TokenType.OP_DIVIDE);
        }

        if (c === '%') {
            if (this.match('=')) return this.makeToken(TokenType.OP_MOD_ASS);
            return this.makeToken(TokenType.OP_MODULO);
        }

        if (c === '=') {
            if (this.match('=')) {
                if (this.match('=')) {
                    return this.makeToken(TokenType.OP_STRICT_EQUAL);
                }
                return this.makeToken(TokenType.OP_EQUAL);
            }
            return this.makeToken(TokenType.OP_ASSIGN);
        }

        if (c === '!') {
            if (this.match('=')) return this.makeToken(TokenType.OP_NOT_EQUAL);
            return this.makeToken(TokenType.OP_NOT);
        }

        if (c === '<') {
            if (this.match('=')) return this.makeToken(TokenType.OP_LESS_EQUAL);
            return this.makeToken(TokenType.OP_LESS);
        }

        if (c === '>') {
            if (this.match('=')) return this.makeToken(TokenType.OP_GREATER_EQUAL);
            return this.makeToken(TokenType.OP_GREATER);
        }

        if (c === '&') {
            if (this.match('&')) return this.makeToken(TokenType.OP_AND);
            if (this.match('=')) return this.makeToken(TokenType.OP_AND_ASS);
            return this.error("Invalid token: '&'");
        }

        if (c === '|') {
            if (this.match('|')) return this.makeToken(TokenType.OP_OR);
            if (this.match('=')) return this.makeToken(TokenType.OP_OR_ASS);
            return this.error("Invalid token: '|'");
        }

        if (c === '^') {
            if (this.match('=')) return this.makeToken(TokenType.OP_XOR_ASS);
            return this.error("Invalid token: '^'");
        }

        // Delimiters
        const delimiters = {
            ':': TokenType.DELI_COLON,
            ';': TokenType.DELI_SEMICOLON,
            '(': TokenType.DELI_LPAREN,
            ')': TokenType.DELI_RPAREN,
            '{': TokenType.DELI_LBRACE,
            '}': TokenType.DELI_RBRACE,
            '[': TokenType.DELI_LBRACKET,
            ']': TokenType.DELI_RBRACKET,
            ',': TokenType.DELI_COMMA
        };

        if (c in delimiters) {
            return this.makeToken(delimiters[c]);
        }

        // Skip unexpected characters and continue
        return this.scanToken();
    }

    isDigit(c) {
        return c >= '0' && c <= '9';
    }

    isAlpha(c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }

    isAlphaNumeric(c) {
        return this.isAlpha(c) || this.isDigit(c) || c === '_';
    }
}

// UI Functions
function updateLineNumbers() {
    const editor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = editor.value.split('\n').length || 1;
    lineNumbers.textContent = Array.from({length: lines}, (_, i) => i + 1).join('\n');
}

// Add event listener for input to apply syntax colors dynamically
document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('codeEditor');
    
    // Apply VS Code-like text colors on input
    editor.addEventListener('input', function() {
        updateLineNumbers();
        // We'll use CSS styling instead of JS highlighting for better performance
    });
});

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

    const lexer = new Lexer(code);
    const tokens = [];
    let errorCount = 0;

    while (true) {
        const token = lexer.scanToken();
        tokens.push(token);
        if (token.type === TokenType.ERROR) {
            errorCount++;
        }
        if (token.type === TokenType.EOF) {
            break;
        }
    }

    displayResults(tokens, errorCount);
    
    if (errorCount > 0) {
        showModal('error', 'LEXICAL ERROR DETECTED!', `Invalid token or symbol found in the source code.`);
    } else {
        showModal('success', 'SUCCESSFUL ANALYSIS!', 'Lexical analysis completed successfully. All tokens are identified correctly.');
    }
}

function displayResults(tokens, errorCount) {
    const resultsDiv = document.getElementById('analyzerResults');
    const summaryDiv = document.getElementById('analysisSummary');
    
    // Update summary
    summaryDiv.innerHTML = `
        <div class="analysis-completed-box">
            <div class="analysis-completed-header">Analyzed Lexemes!</div>
            <div class="analysis-stats">
                <div class="stat-item">
                    <span class="stat-label">Total Tokens:</span>
                    <span class="stat-value">${tokens.length}</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <span class="stat-label error-label">Error Detected:</span>
                    <span class="stat-value error-value">${errorCount}</span>
                </div>
            </div>
        </div>
    `;
    
    // Display tokens table
    let tableHTML = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>Line</th>
                    <th>Token Type</th>
                    <th>Lexeme</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    tokens.forEach(token => {
        const isError = token.type === TokenType.ERROR;
        const rowClass = isError ? 'error-row' : '';
        const textClass = isError ? 'error-text' : '';
        
        tableHTML += `
            <tr class="${rowClass}">
                <td class="line-number-cell">Line ${token.line}</td>
                <td class="${textClass}">${token.type}</td>
                <td class="${textClass}">${escapeHtml(token.lexeme)}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    resultsDiv.innerHTML = tableHTML;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

// Scroll reveal animation
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

// Initialize
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
        
        const keywords = Object.keys(KEYWORDS).join('|');
        let result = code;
        
        // First escape HTML to prevent injection
        result = result.replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/>/g, '&gt;');
        
        // Apply syntax highlighting with temporary markers to avoid double-escaping
        // Comments
        result = result.replace(/(#[^\n]*)/g, '###COMMENT_START###$1###COMMENT_END###');
        
        // Strings
        result = result.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '###STRING_START###$1###STRING_END###');
        
        // Numbers
        result = result.replace(/\b(\d+(?:\.\d+)?)\b/g, '###NUMBER_START###$1###NUMBER_END###');
        
        // Keywords
        const keywordPattern = new RegExp(`\\b(${keywords})\\b`, 'g');
        result = result.replace(keywordPattern, '###KEYWORD_START###$1###KEYWORD_END###');
        
        // Operators
        const operators = ['\\+\\+', '--', '===', '==', '!=', '&lt;=', '&gt;=', '\\+=', '-=', '\\*=', '/=', '%=', '&amp;=', '\\|=', '\\^=', '&amp;&amp;', '\\|\\|', '\\+', '-', '\\*', '/', '%', '=', '&lt;', '&gt;', '!'];
        const operatorPattern = new RegExp(`(${operators.join('|')})`, 'g');
        result = result.replace(operatorPattern, '###OPERATOR_START###$1###OPERATOR_END###');
        
        // Delimiters
        result = result.replace(/([(){}\[\]:;,])/g, '###DELIMITER_START###$1###DELIMITER_END###');
        
        // Replace markers with actual HTML spans
        result = result.replace(/###COMMENT_START###(.*?)###COMMENT_END###/g, `<span style="color: ${colors.comment}; font-style: italic;">$1</span>`);
        result = result.replace(/###STRING_START###(.*?)###STRING_END###/g, `<span style="color: ${colors.string};">$1</span>`);
        result = result.replace(/###NUMBER_START###(.*?)###NUMBER_END###/g, `<span style="color: ${colors.number};">$1</span>`);
        result = result.replace(/###KEYWORD_START###(.*?)###KEYWORD_END###/g, `<span style="color: ${colors.keyword}; font-weight: bold;">$1</span>`);
        result = result.replace(/###OPERATOR_START###(.*?)###OPERATOR_END###/g, `<span style="color: ${colors.operator};">$1</span>`);
        result = result.replace(/###DELIMITER_START###(.*?)###DELIMITER_END###/g, `<span style="color: ${colors.delimiter};">$1</span>`);
        
        return result;
    }
}

// Initialize syntax highlighter
if (document.getElementById('codeEditor')) {
    window.syntaxHighlighter = new SyntaxHighlighter('codeEditor');
}