// Token Types Enum
const TokenType = {
    NULL: -1,
    // IDENTIFIERS
    IDENTIFIER: 'IDEN',
    NUMBER: 'NUMB',
    COMMENT: 'COM',
    // OPERATORS
    OP_PLUS: 'OP_ADD',
    OP_MINUS: 'OP_MIN',
    OP_MULTIPLY: 'OP_MULT',
    OP_DIVIDE: 'OP_DIV',
    OP_MODULO: 'OP_MOD',
    OP_ASSIGN: 'OP_ASS',
    OP_PLUS_ASS: 'OP_ADDASS',
    OP_MINUS_ASS: 'OP_MINASS',
    OP_MULTIPLY_ASS: 'OP_MULTASS',
    OP_DIVIDE_ASS: 'OP_DIVASS',
    OP_MOD_ASS: 'OP_MODASS',
    OP_XOR_ASS: 'OP_XORASS',
    OP_AND_ASS: 'OP_ANDASS',
    OP_OR_ASS: 'OP_ORASS',
    OP_LESS: 'OP_LESS',
    OP_GREATER: 'OP_GREAT',
    OP_LESS_EQUAL: 'OP_LESSEQ',
    OP_GREATER_EQUAL: 'OP_GREATEQ',
    OP_EQUAL: 'OP_EQ',
    OP_STRICT_EQUAL: 'OP_STRICTEQ',
    OP_NOT_EQUAL: 'OP_NOTEQ',
    OP_NOT: 'OP_NOT',
    OP_AND: 'OP_AND',
    OP_OR: 'OP_OR',
    OP_INCREMENT: 'OP_INCRE',
    OP_DECREMENT: 'OP_DECRE',
    // KEYWORDS
    KW_ALIAS: 'KW_ALIAS', //typedef
    KW_BIG: 'KW_BIG', //long
    KW_BLEND: 'KW_BLEND', //union
    KW_BOOL: 'KW_BOOL', //bool
    KW_BOUNCE: 'KW_BOUNCE', //exit
    KW_CAP: 'KW_CAP', //signed
    KW_CASE: 'KW_CASE', //case
    KW_CORE: 'KW_CORE', //main
    KW_CYCLE: 'KW_CYCLE', //while
    KW_DECI: 'KW_DECI', //float
    KW_DO: 'KW_DO', //do
    KW_DOUBLE: 'KW_DOUBLE', //double
    KW_DROP: 'KW_DROP', //return
    KW_DUO: 'KW_DUO',
    KW_ELSE: 'KW_ELSE', //else
    KW_EMOJI: 'KW_EMOJI',
    KW_EMPTY: 'KW_EMPTY', //void
    KW_ENUM: 'KW_ENUM', //enum
    KW_FAM: 'KW_FAM', //arrays
    KW_FIXED: 'KW_FIXED', //const
    KW_FR: 'KW_FR', //for 
    KW_GRAB: 'KW_GRAB', //grab
    KW_IF: 'KW_IF', //if
    KW_IMPORT: 'KW_IMPORT',
    KW_LENGTH: 'KW_LENGTH', //length 
    KW_LETT: 'KW_LETT', //char
    KW_MAXI: 'KW_MAXI', 
    KW_MINI: 'KW_MINI',
    KW_MATIC: 'KW_MATIC',
    KW_NEXT: 'KW_NEXT',
    KW_NOCAP: 'KW_NOCAP', //unsigned
    KW_NORM: 'KW_NORM', //default
    KW_NUMBS: 'KW_NUMBS', //int
    KW_OUT: 'KW_OUT', //extern 
    KW_SMALL: 'KW_SMALL', //short
    KW_SHADY: 'KW_SHADY', //volatile
    KW_SPILL: 'KW_SPILL', //printf
    KW_STAY: 'KW_STAY', 
    KW_STOP: 'KW_STOP', //break
    KW_STRUCT: 'KW_STRUCT',
    KW_SWIM: 'KW_SWIM',
    KW_SWITCH: 'KW_SWITCH', //switch
    KW_TAG: 'KW_TAG', //register
    KW_TEXT: 'KW_TEXT', //string
    KW_VIBE: 'KW_VIBE',
    KW_ZAVED: 'KW_ZAVED',
    // FUNCTIONS
    FUNC_AVG: 'FUNC_AVG',
    FUNC_ASCENDING: 'FUNC_ASC',
    FUNC_DESCENDING: 'FUNC_DESC',
    FUNC_MAX: 'FUNC_MAX',
    FUNC_MIN: 'FUNC_MIN',
    FUNC_FINDSTRING: 'FUNC_FINDSTR',
    // DELIMITERS
    DELI_COLON: 'DELI_COL',
    DELI_SEMICOLON: 'DELI_SEMICOL',
    DELI_LPAREN: 'DELI_LPAREN',
    DELI_RPAREN: 'DELI_RPAREN',
    DELI_LBRACE: 'DELI_LBRACE',
    DELI_RBRACE: 'DELI_RBRACE',
    DELI_LBRACKET: 'DELI_LBRACK',
    DELI_RBRACKET: 'DELI_RBRACK',
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
    'CYCLE': TokenType.KW_CYCLE,
    'DECI': TokenType.KW_DECI,
    'DO': TokenType.KW_DO,
    'DOUBLE': TokenType.KW_DOUBLE,
    'DROP': TokenType.KW_DROP,
    'DUO': TokenType.KW_DUO,
    'ELSE': TokenType.KW_ELSE,
    'EMOJI': TokenType.KW_EMOJI,
    'EMPTY': TokenType.KW_EMPTY,
    'ENUM': TokenType.KW_ENUM,
    'FAM': TokenType.KW_FAM,
    'FIXED': TokenType.KW_FIXED,
    'FR': TokenType.KW_FR,
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
    'STOP': TokenType.KW_STOP,
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
    isInvalidNextOperator(c) {
        // These characters should not immediately follow an operator 
        // unless they are part of a valid compound like +=, ++, etc.
        const forbidden = new Set(['*', '/', '%', '^', '=', '&', '|']);
        return forbidden.has(c);
    }

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
        // 1. Consume the integer part
        while (this.isDigit(this.peek())) {
            this.advance();
        }

        // 2. Check for decimal point
        if (this.peek() === '.' && this.isDigit(this.peekNext())) {
            this.advance(); // Consume '.'
            while (this.isDigit(this.peek())) {
                this.advance(); // Consume fractional digits
            }
        }

        // 3. Check for invalid identifiers starting with numbers (e.g., 12age)
        if (this.isAlpha(this.peek()) || this.peek() === '_') {
            while (this.isAlphaNumeric(this.peek())) {
                this.advance();
            }
            const text = this.source.substring(this.start, this.current);
            return this.error(`Invalid identifier: '${text}' cannot start with a number`);
        }

        return this.makeToken(TokenType.NUMBER);
    }

    handleIdentifier() {
        // 1. Consume the actual identifier (letters/numbers/underscore)
        while (this.isAlphaNumeric(this.peek())) {
            this.advance();
        }

        const c = this.peek();

        // === NEW FIX START ===
        // Check if the identifier is immediately followed by a hyphen and a number (e.g., age-21)
        // This catches invalid variable names without breaking "i--" or "a-b"
        if (c === '-' && this.isDigit(this.peekNext())) {
            this.advance(); // consume '-'
            while (this.isAlphaNumeric(this.peek())) { // consume the rest (21)
                this.advance();
            }
            const text = this.source.substring(this.start, this.current);
            return this.error(`Invalid identifier: '${text}' cannot contain '-'`);
        }
        // === NEW FIX END ===

        // 2. CHECK SEPARATORS
        const validSeparators = new Set([
            ' ', '\t', '\r', '\n', '\0', 
            ';', ',', ':', '.',
            '(', ')', '{', '}', '[', ']', 
            '"', "'",
            '+', '-', '*', '/', '%', '=', '!', '<', '>', '&', '|', '^' 
        ]);

        if (!validSeparators.has(c)) {
            // This catches actual illegal symbols like @, #, $, ?, etc.
            while (!validSeparators.has(this.peek())) {
                this.advance();
            }
            const text = this.source.substring(this.start, this.current);
            return this.error(`Invalid identifier: '${text}' cannot contain special characters`);
        }

        const text = this.source.substring(this.start, this.current);
        const upperText = text.toUpperCase();

        if (upperText in KEYWORDS) {
            return this.makeToken(KEYWORDS[upperText]);
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
            
            // ERROR CHECK: +* or +/ or +% etc.
            if (this.isInvalidNextOperator(this.peek())) {
                return this.error(`Invalid operator sequence: '+${this.peek()}'`);
            }

            // Check for invalid identifier start (e.g. +age)
            if (this.isAlpha(this.peek()) || this.peek() === '_') {
                return this.handleInvalidIdentifierStart(c);
            }
            return this.makeToken(TokenType.OP_PLUS);
        }

        if (c === '-') {
            if (this.match('-')) return this.makeToken(TokenType.OP_DECREMENT);
            if (this.match('=')) return this.makeToken(TokenType.OP_MINUS_ASS);
            
            // ERROR CHECK: -* or -/ or -% etc.
            if (this.isInvalidNextOperator(this.peek())) {
                return this.error(`Invalid operator sequence: '-${this.peek()}'`);
            }

            if (this.isAlpha(this.peek()) || this.peek() === '_') {
                return this.handleInvalidIdentifierStart(c);
            }
            return this.makeToken(TokenType.OP_MINUS);
        }

        if (c === '*') {
            if (this.match('=')) {
                // ERROR CHECK: Catch *== 
                if (this.peek() === '=') {
                    this.advance(); // consume the invalid =
                    return this.error("Invalid operator: '*==' is not supported");
                }
                return this.makeToken(TokenType.OP_MULTIPLY_ASS);
            }

            // ERROR CHECK: Catch +* (handled in +), but also ** or */
            if (this.isInvalidNextOperator(this.peek())) {
                return this.error(`Invalid operator sequence: '*${this.peek()}'`);
            }

            if (this.isAlpha(this.peek()) || this.peek() === '_') {
                return this.handleInvalidIdentifierStart(c);
            }
            return this.makeToken(TokenType.OP_MULTIPLY);
        }

        if (c === '/') {
            if (this.match('/')) {
                // Comment logic
                while (this.peek() !== '\n' && !this.isAtEnd()) {
                    this.advance();
                }
                return this.makeToken(TokenType.COMMENT);
            }

            if (this.match('=')) {
                 // ERROR CHECK: Catch /==
                 if (this.peek() === '=') {
                    this.advance();
                    return this.error("Invalid operator: '/==' is not supported");
                }
                return this.makeToken(TokenType.OP_DIVIDE_ASS);
            }

            // ERROR CHECK: Catch /+ or /*
            if (this.isInvalidNextOperator(this.peek())) {
                return this.error(`Invalid operator sequence: '/${this.peek()}'`);
            }

            if (this.isAlpha(this.peek()) || this.peek() === '_') {
                return this.handleInvalidIdentifierStart(c);
            }
            return this.makeToken(TokenType.OP_DIVIDE);
        }

        if (c === '%') {
            if (this.match('=')) return this.makeToken(TokenType.OP_MOD_ASS);
            
            // ERROR CHECK
            if (this.isInvalidNextOperator(this.peek())) {
                return this.error(`Invalid operator sequence: '%${this.peek()}'`);
            }

            if (this.isAlpha(this.peek()) || this.peek() === '_') { 
                return this.handleInvalidIdentifierStart(c);
            }
            return this.makeToken(TokenType.OP_MODULO);
        }

        if (c === '=') {
            if (this.match('=')) {
                // ERROR CHECK: Catch ===
                // We removed the support for OP_STRICT_EQUAL and replaced it with this error
                if (this.peek() === '=') {
                    this.advance(); // consume the third =
                    return this.error("Invalid operator: '===' is not supported");
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
        if (this.isAlpha(this.peek()) || this.isDigit(this.peek()) || this.peek() === '_') {
             while (this.isAlphaNumeric(this.peek())) {
                 this.advance();
             }
             const text = this.source.substring(this.start, this.current);
             // Outputs the specific error format you requested
             return this.error(`Invalid identifier: '${text}' cannot start with a special character`);
        }

        // Default error for a standalone invalid character
        return this.error(`Invalid character: '${c}'`);
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

    handleInvalidIdentifierStart(startChar) {
        let text = startChar;
        // Consume the rest of the attached letters/numbers
        while (this.isAlphaNumeric(this.peek()) || this.peek() === '_') {
            text += this.advance();
        }
        return this.error(`Invalid identifier: '${text}' cannot start with a special character`);
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

function validateTokens(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        // Check if we have enough tokens ahead to form: LETT name = value
        if (i + 3 < tokens.length) {
            const tokenType = tokens[i].type;
            const nextType = tokens[i+1].type;
            const assignType = tokens[i+2].type;
            const valueToken = tokens[i+3];

            // RULE: If we see 'LETT', followed by an IDEN, followed by '=',
            // the NEXT token MUST be a String/Char literal (DELI_QUOTE).
            if (tokenType === TokenType.KW_LETT && 
                nextType === TokenType.IDENTIFIER && 
                assignType === TokenType.OP_ASSIGN) {
                
                // If the value is NOT in quotes (e.g., it's an Identifier like 'A' or a Number)
                if (valueToken.type !== TokenType.DELI_QUOTE) {
                    // Force change this token to an ERROR
                    valueToken.type = TokenType.ERROR;
                    valueToken.lexeme = `Type Error: Value for 'LETT' must be a character in single quotes (e.g. 'A'). Found: ${valueToken.lexeme}`;
                }
            }
        }
    }
    return tokens;
}

function validateSpillChains(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        // We only care about the SPILL keyword
        if (tokens[i].type === TokenType.KW_SPILL) {
            
            let currentOffset = 1;
            let chainActive = true;

            // Loop to consume as many ("String") groups as possible
            while (chainActive) {
                // Check if we ran out of tokens unexpectedly
                if (i + currentOffset >= tokens.length) {
                    tokens[i].type = TokenType.ERROR;
                    tokens[i].lexeme = "Error: Unexpected end of file. Missing ';'";
                    break;
                }

                const nextToken = tokens[i + currentOffset];

                // CASE 1: The Chain is ending (We see a Semicolon)
                if (nextToken.type === TokenType.DELI_SEMICOLON) {
                    chainActive = false; // Stop checking, this is valid
                    // Note: We don't increment i here, the main loop will continue
                    break; 
                }

                // CASE 2: We expect a '(' to start a print group
                if (nextToken.type !== TokenType.DELI_LPAREN) {
                    nextToken.type = TokenType.ERROR;
                    nextToken.lexeme = `Syntax Error: Expected '(' or ';' after SPILL, found '${nextToken.lexeme}'`;
                    chainActive = false;
                    break;
                }

                // Check specifically for the pattern: ( STRING )
                
                // 1. Check for String (DELI_QUOTE is what your lexer calls string literals)
                const stringToken = tokens[i + currentOffset + 1];
                if (!stringToken || stringToken.type !== TokenType.DELI_QUOTE) {
                    // Use the invalid token to mark the error
                    const errorToken = stringToken || nextToken; 
                    errorToken.type = TokenType.ERROR;
                    errorToken.lexeme = `Syntax Error: Expected string literal inside '()', found '${errorToken ? errorToken.lexeme : 'EOF'}'`;
                    chainActive = false;
                    break;
                }

                // 2. Check for closing ')'
                const closeParen = tokens[i + currentOffset + 2];
                if (!closeParen || closeParen.type !== TokenType.DELI_RPAREN) {
                     // If the token is missing or not a ), mark error
                     const errorToken = closeParen || stringToken;
                     errorToken.type = TokenType.ERROR;
                     errorToken.lexeme = `Syntax Error: Missing closing ')' after string`;
                     chainActive = false;
                     break;
                }

                // If we get here, we successfully found ("String"). 
                // Move the offset by 3 tokens: (, "String", )
                currentOffset += 3;
            }
        }
    }
    return tokens;
}


// NEW: SPILL VALIDATOR (Supports commas: SPILL("Text", var, 123);)
// UNIFIED SPILL VALIDATOR 
// Supports BOTH:
// 1. Commas: SPILL("Player: ", name);
// 2. Chainz: SPILL("Player: ")("name");
function validateSpill(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token.type === TokenType.KW_SPILL) {
            let current = i + 1;
            let groupFound = false;

            // OUTER LOOP: Handles the Chainz groups (...) (...)
            while (true) {
                // Safety: Check for End of File
                if (current >= tokens.length) {
                    const err = tokens[current - 1] || token;
                    err.type = TokenType.ERROR;
                    err.lexeme = "Syntax Error: Unexpected End of File. Missing ';' at the end of SPILL statement.";
                    break;
                }

                const t = tokens[current];

                // 1. CHECK FOR END OF STATEMENT (Semicolon)
                // If we hit a semicolon, we are done.
                if (t.type === TokenType.DELI_SEMICOLON) {
                    if (!groupFound) {
                        // Optional: Error if SPILL; is called with no arguments
                        // t.type = TokenType.ERROR; t.lexeme = "Empty SPILL statement.";
                    }
                    // Valid end found. Update main loop 'i' to skip these tokens.
                    i = current;
                    break; 
                }

                // 2. EXPECT START OF GROUP '('
                if (t.type !== TokenType.DELI_LPAREN) {
                    t.type = TokenType.ERROR;
                    t.lexeme = `Syntax Error: Expected '(' to start print group or ';' to end. Found '${t.lexeme}'`;
                    break; 
                }
                
                // We are now inside a group: ( arg1, arg2 )
                current++; // Consume '('
                groupFound = true;

                let expectingValue = true; // We expect a Value first

                // INNER LOOP: Handles Arguments inside the parentheses: "A", b, 1
                while (true) {
                     if (current >= tokens.length) break; // Safety
                     const inner = tokens[current];

                     // A. Check for Closing ')'
                     if (inner.type === TokenType.DELI_RPAREN) {
                         if (expectingValue) {
                             // Case: SPILL( ) or SPILL("A", ) -> Trailing comma or empty group
                             // We allow empty groups () for now, or you can flag error here.
                         }
                         current++; // Consume ')'
                         break; // Exit Inner Loop (Argument Loop)
                     }

                     // B. Check for Arguments or Commas
                     if (expectingValue) {
                         const validTypes = [
                             TokenType.DELI_QUOTE, 
                             TokenType.NUMBER, 
                             TokenType.IDENTIFIER, 
                             TokenType.KW_NOCAP, TokenType.KW_CAP
                         ];

                         if (validTypes.includes(inner.type)) {
                             expectingValue = false; // Found value, now expect Comma or ')'
                         } else {
                             inner.type = TokenType.ERROR;
                             inner.lexeme = `Syntax Error: Invalid argument '${inner.lexeme}'. Expected string, number, or variable.`;
                             // Break outer loop to stop cascading
                             current = tokens.length; 
                             break; 
                         }
                     } else {
                         // We Expect a Comma
                         if (inner.type === TokenType.DELI_COMMA) {
                             expectingValue = true; // Found comma, now expect Value
                         } else {
                             inner.type = TokenType.ERROR;
                             inner.lexeme = `Syntax Error: Expected ',' or ')'. Found '${inner.lexeme}'`;
                             current = tokens.length; 
                             break;
                         }
                     }
                     current++;
                }
                // End of Inner Loop. We have finished one group like ("A", b).
                // The Outer Loop runs again to see if there is ANOTHER group (Chainz) or a Semicolon.
            }
        }
    }
    return tokens;
}

function validateZaved(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        // We only care if we see the ZAVED keyword
        if (tokens[i].type === TokenType.KW_ZAVED) {
            
            // 1. Check for Identifier (Name of the block)
            // Pattern required: ZAVED name
            if (i + 1 >= tokens.length || tokens[i + 1].type !== TokenType.IDENTIFIER) {
                const errorToken = tokens[i + 1] || tokens[i];
                errorToken.type = TokenType.ERROR;
                errorToken.lexeme = `Syntax Error: 'ZAVED' must be followed by an identifier name. Found: '${errorToken.lexeme}'`;
                // Skip the rest of this check to avoid cascading errors
                continue; 
            }

            // 2. Check for Opening Brace '{'
            // Pattern required: ZAVED name {
            if (i + 2 >= tokens.length || tokens[i + 2].type !== TokenType.DELI_LBRACE) {
                const errorToken = tokens[i + 2] || tokens[i + 1];
                errorToken.type = TokenType.ERROR;
                errorToken.lexeme = `Syntax Error: Expected '{' after ZAVED identifier. Found: '${errorToken.lexeme}'`;
                continue;
            }

            // 3. Check for Closing Brace '}'
            // We need to scan forward to find the matching closing brace
            let braceBalance = 1; // We start with 1 because we found the first '{'
            let foundClose = false;
            let j = i + 3; // Start looking after the first '{'

            while (j < tokens.length) {
                if (tokens[j].type === TokenType.DELI_LBRACE) {
                    braceBalance++; // Nested block found
                } else if (tokens[j].type === TokenType.DELI_RBRACE) {
                    braceBalance--; // Closing brace found
                }

                if (braceBalance === 0) {
                    foundClose = true;
                    // We found the end of the ZAVED block.
                    // Update main loop 'i' to continue scanning AFTER this block
                    // This prevents re-scanning tokens inside the block
                    // i = j; 
                    break; 
                }
                j++;
            }

            if (!foundClose) {
                // If we reached the end of the file without balance hitting 0
                tokens[i + 2].type = TokenType.ERROR;
                tokens[i + 2].lexeme = `Syntax Error: Missing closing '}' for ZAVED block '${tokens[i+1].lexeme}'`;
            }
        }
    }
    return tokens;
}

// 1. STRICT TYPO CHECKER (Catches "NUMBSs age")
function validateTypos(tokens) {
    for (let i = 0; i < tokens.length - 1; i++) {
        const current = tokens[i];
        const next = tokens[i+1];

        // IF we see [Identifier] [Identifier] (e.g. "NUMBSs age")
        // AND the first identifier looks like a plural or typo of a keyword
        if (current.type === TokenType.IDENTIFIER && next.type === TokenType.IDENTIFIER) {
            current.type = TokenType.ERROR;
            current.lexeme = `Syntax Error: Unknown keyword or type '${current.lexeme}'.`;
        }
    }
    return tokens;
}

// 2. C-STYLE DECLARATION ENFORCER (Catches missing ; and commas)
// 2. C-STYLE DECLARATION & ASSIGNMENT ENFORCER (FIXED)
function validateCStyleDeclarations(tokens) {
    // Safety check to prevent crashes if TokenType is missing
    if (typeof TokenType === 'undefined') return tokens;

    const dataTypes = [
        TokenType.KW_NUMBS, TokenType.KW_DECI, TokenType.KW_BOOL, 
        TokenType.KW_LETT, TokenType.KW_TEXT
    ];

    // 1. Operators allowed immediately after the variable name
    // STRICTLY matches your requested list:
    // +, -, *, /, %, ++, --, ==, =, *= , +=, -=, /=, %=, &=, |=, ^=, >=, <=
    const validAssignmentOps = new Set([
        TokenType.OP_ASSIGN,          // =
        TokenType.OP_PLUS_ASS,        // +=
        TokenType.OP_MINUS_ASS,       // -=
        TokenType.OP_MULTIPLY_ASS,    // *=
        TokenType.OP_DIVIDE_ASS,      // /=
        TokenType.OP_MOD_ASS,         // %=
        TokenType.OP_AND_ASS,         // &=
        TokenType.OP_OR_ASS,          // |=
        TokenType.OP_XOR_ASS,         // ^=
        TokenType.OP_EQUAL,           // ==
        TokenType.OP_GREATER_EQUAL,   // >=
        TokenType.OP_LESS_EQUAL,      // <=
        TokenType.OP_PLUS,            // +
        TokenType.OP_MINUS,           // -
        TokenType.OP_MULTIPLY,        // *
        TokenType.OP_DIVIDE,          // /
        TokenType.OP_MODULO           // %
    ]);

    // 2. Unary operators allowed immediately after variable
    const validUnaryOps = new Set([
        TokenType.OP_INCREMENT,       // ++
        TokenType.OP_DECREMENT        // --
    ]);

    // 3. Operators allowed BETWEEN values (e.g., gwa / age)
    const validExpressionOps = new Set([
        TokenType.OP_PLUS, TokenType.OP_MINUS, TokenType.OP_MULTIPLY, 
        TokenType.OP_DIVIDE, TokenType.OP_MODULO,
        TokenType.OP_GREATER, TokenType.OP_LESS, 
        TokenType.OP_GREATER_EQUAL, TokenType.OP_LESS_EQUAL,
        TokenType.OP_EQUAL, TokenType.OP_NOT_EQUAL,
        TokenType.OP_AND, TokenType.OP_OR
    ]);

    try {
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];

            // START OF DECLARATION FOUND (e.g., "NUMBS")
            if (dataTypes.includes(token.type)) {
                let currentIdx = i + 1;
                let state = 'EXPECT_NAME'; 

                while (currentIdx < tokens.length) {
                    const t = tokens[currentIdx];

                    // CRITICAL: Check for End of File
                    if (t.type === TokenType.EOF) {
                        const lastToken = tokens[currentIdx - 1];
                        if (lastToken) {
                            lastToken.type = TokenType.ERROR;
                            lastToken.lexeme = "Syntax Error: Missing semicolon ';' at the end of statement.";
                        }
                        break;
                    }

                    // --- STATE 1: EXPECT VARIABLE NAME ---
                    if (state === 'EXPECT_NAME') {
                        if (t.type === TokenType.IDENTIFIER) {
                            state = 'EXPECT_OPERATOR';
                        } else {
                            t.type = TokenType.ERROR;
                            t.lexeme = `Syntax Error: Expected variable name, found '${t.lexeme}'.`;
                            i = currentIdx; break; 
                        }
                    }

                    // --- STATE 2: EXPECT ASSIGNMENT OR UNARY OPERATOR ---
                    else if (state === 'EXPECT_OPERATOR') {
                        if (t.type === TokenType.DELI_SEMICOLON) {
                            // "NUMBS x;" is valid
                            i = currentIdx; break;
                        } 
                        else if (t.type === TokenType.DELI_COMMA) {
                            // "NUMBS x, y;" is valid
                            state = 'EXPECT_NAME';
                        }
                        else if (validUnaryOps.has(t.type)) {
                            // "NUMBS x++;" -> Valid, expect ; or , next
                            state = 'EXPECT_COMMA_OR_SEMI';
                        }
                        else if (validAssignmentOps.has(t.type)) {
                            // "NUMBS age == 12" or "DECI gwa *= 1.0"
                            // If we find a valid op, we expect a value next.
                            state = 'EXPECT_VALUE';
                        } 
                        else {
                            // This catches invalid operators like >== or *== (if they weren't caught by lexer)
                            // or operators NOT in your list.
                            t.type = TokenType.ERROR;
                            t.lexeme = `Syntax Error: Invalid operator '${t.lexeme}'.`;
                            i = currentIdx; break;
                        }
                    }

                    // --- STATE 3: EXPECT VALUE (Right Hand Side) ---
                    else if (state === 'EXPECT_VALUE') {
                        const validValues = [
                            TokenType.NUMBER, TokenType.DELI_QUOTE, 
                            TokenType.IDENTIFIER, TokenType.KW_NOCAP, TokenType.KW_CAP
                        ];
                        
                        if (validValues.includes(t.type)) {
                            state = 'EXPECT_EXPRESSION_OP_OR_SEMI';
                        } else {
                            // ERROR: We found an operator when we expected a value.
                            // This catches "DECI gwa *== 1.0" because after *= it sees =
                            // This catches "NUMBS age >== 12" because after > it sees ==
                            t.type = TokenType.ERROR;
                            t.lexeme = `Syntax Error: Invalid value '${t.lexeme}'.`;
                            i = currentIdx; break;
                        }
                    }

                    // --- STATE 4: EXPECT EXPRESSION OPERATOR OR END (Handling gwa/age) ---
                    else if (state === 'EXPECT_EXPRESSION_OP_OR_SEMI') {
                        if (t.type === TokenType.DELI_SEMICOLON) {
                            // End of statement found
                            i = currentIdx; break;
                        }
                        else if (t.type === TokenType.DELI_COMMA) {
                            // "NUMBS a=1, b=2"
                            state = 'EXPECT_NAME';
                        }
                        else if (validExpressionOps.has(t.type)) {
                            // Found math/logic op (e.g. the '/' in 'gwa / age')
                            // Loop back to expect another value
                            state = 'EXPECT_VALUE';
                        }
                        else {
                            t.type = TokenType.ERROR;
                            t.lexeme = `Syntax Error: Unexpected token '${t.lexeme}'. Expected ';', ',', or valid math operator.`;
                            i = currentIdx; break;
                        }
                    }

                    // --- STATE 5: EXPECT COMMA OR SEMI (After Unary like i++) ---
                    else if (state === 'EXPECT_COMMA_OR_SEMI') {
                        if (t.type === TokenType.DELI_SEMICOLON) {
                            i = currentIdx; break;
                        } else if (t.type === TokenType.DELI_COMMA) {
                            state = 'EXPECT_NAME';
                        } else {
                            t.type = TokenType.ERROR;
                            t.lexeme = `Syntax Error: Expected ';' or ',' after unary operation. Found '${t.lexeme}'.`;
                            i = currentIdx; break;
                        }
                    }

                    currentIdx++;
                }
            }
        }
    } catch (err) {
        console.error("Validation Error:", err);
    }
    return tokens;
}

// Function to catch common loop keyword typos (e.g. FOR instead of FR)
function validateLoopMistypes(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        // We look for IDENTIFIERS because misspelled keywords aren't tokenized as Keywords
        if (tokens[i].type === TokenType.IDENTIFIER) {
            const lexeme = tokens[i].lexeme;
            
            // Check for 'FOR' (should be FR)
            if (lexeme === 'FOR') {
                tokens[i].type = TokenType.ERROR;
                tokens[i].lexeme = `Syntax Error: Unknown keyword 'FOR'.`;
            }
            // Check for 'WHILE' (should be CYCLE)
            else if (lexeme === 'WHILE') {
                tokens[i].type = TokenType.ERROR;
                tokens[i].lexeme = `Syntax Error: Unknown keyword 'WHILE'.`;
            }
        }
    }
    return tokens;
}

// Function to enforce C-style loop syntax (parentheses and braces)
function validateLoopSyntax(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        // 1. CHECK FOR FR (For) AND CYCLE (While)
        // Rules: Must have (...) AND { ... }
        if (token.type === TokenType.KW_FR || token.type === TokenType.KW_CYCLE) {

            // === FIX: DETECT DO...CYCLE LOOP ===
            let isDoCycle = false;
            if (token.type === TokenType.KW_CYCLE) {
                // Check previous token (ignoring comments)
                let prevIdx = i - 1;
                while (prevIdx >= 0 && tokens[prevIdx].type === TokenType.COMMENT) {
                    prevIdx--;
                }
                
                // If the previous token is '}', this is a DO...CYCLE loop
                if (prevIdx >= 0 && tokens[prevIdx].type === TokenType.DELI_RBRACE) {
                    isDoCycle = true;
                }
            }
            // ===================================
            
            // A. Check for immediate Opening Parenthesis '('
            if (i + 1 >= tokens.length || tokens[i + 1].type !== TokenType.DELI_LPAREN) {
                const errorToken = tokens[i + 1] || token;
                errorToken.type = TokenType.ERROR;
                errorToken.lexeme = `Syntax Error: Expected '(' after '${token.lexeme}' statement.`;
                continue; 
            }

            // B. Find the matching Closing Parenthesis ')'
            let parenBalance = 0;
            let closingParenIndex = -1;

            // Start scanning from the opening '('
            for (let j = i + 1; j < tokens.length; j++) {
                if (tokens[j].type === TokenType.DELI_LPAREN) parenBalance++;
                if (tokens[j].type === TokenType.DELI_RPAREN) parenBalance--;

                if (parenBalance === 0) {
                    closingParenIndex = j;
                    break; // Found the end of the condition (i < 5)
                }
            }

            if (closingParenIndex === -1) {
                token.type = TokenType.ERROR;
                token.lexeme = `Syntax Error: Missing ')' in '${token.lexeme}' loop condition.`;
                continue; // Cannot check for braces if condition is broken
            }

            // === FIX: HANDLING FOR DO...CYCLE vs NORMAL LOOPS ===
            
            if (isDoCycle) {
                // RULE FOR DO...CYCLE: Expect Semicolon ';' after ')'
                const semiIndex = closingParenIndex + 1;
                if (semiIndex >= tokens.length || tokens[semiIndex].type !== TokenType.DELI_SEMICOLON) {
                    const errorToken = tokens[semiIndex] || tokens[closingParenIndex];
                    errorToken.type = TokenType.ERROR;
                    errorToken.lexeme = `Syntax Error: Expected ';' after DO...CYCLE condition.`;
                }
                // Stop here for DO...CYCLE (Do not look for curly braces)
                continue;
            }
            // ====================================================

            // C. Check for Opening Brace '{' immediately after ')'
            const braceIndex = closingParenIndex + 1;
            
            // Check if token exists and is a brace
            if (braceIndex >= tokens.length || tokens[braceIndex].type !== TokenType.DELI_LBRACE) {
                const errorToken = tokens[braceIndex] || tokens[closingParenIndex];
                errorToken.type = TokenType.ERROR;
                errorToken.lexeme = `Syntax Error: Expected '{' after loop condition.`;
                continue;
            }

            // D. Check for Matching Closing Brace '}'
            let braceBalance = 0;
            let foundClosingBrace = false;

            for (let k = braceIndex; k < tokens.length; k++) {
                if (tokens[k].type === TokenType.DELI_LBRACE) braceBalance++;
                if (tokens[k].type === TokenType.DELI_RBRACE) braceBalance--;

                if (braceBalance === 0) {
                    foundClosingBrace = true;
                    break; 
                }
            }

            if (!foundClosingBrace) {
                // Mark the opening brace as the source of the error
                tokens[braceIndex].type = TokenType.ERROR;
                tokens[braceIndex].lexeme = `Syntax Error: Missing '}' to close '${token.lexeme}' block.`;
            }
        }

        // 2. CHECK FOR DO (remains the same)
        if (token.type === TokenType.KW_DO) {
            if (i + 1 >= tokens.length || tokens[i + 1].type !== TokenType.DELI_LBRACE) {
                const errorToken = tokens[i + 1] || token;
                errorToken.type = TokenType.ERROR;
                errorToken.lexeme = `Syntax Error: Expected '{' after 'DO' statement.`;
                continue;
            }

            let braceBalance = 0;
            let foundClosing = false;

            for (let j = i + 1; j < tokens.length; j++) {
                if (tokens[j].type === TokenType.DELI_LBRACE) braceBalance++;
                if (tokens[j].type === TokenType.DELI_RBRACE) braceBalance--;

                if (braceBalance === 0) {
                    foundClosing = true;
                    break; 
                }
            }

            if (!foundClosing) {
                token.type = TokenType.ERROR;
                token.lexeme = `Syntax Error: Missing '}' to close 'DO' block.`;
            }
        }
    }
    return tokens;
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
    let tokens = []; 
    
    // 1. Generate Tokens
    while (true) {
        const token = lexer.scanToken();
        tokens.push(token);
        if (token.type === TokenType.EOF) break;
    }

    // 2. RUN VALIDATIONS (New Order)
    tokens = validateTokens(tokens);             // Validates LETT 'A'
    tokens = validateSpill(tokens);           // Validates SPILL
    tokens = validateZaved(tokens);              // Validates ZAVED blocks
    
    tokens = validateLoopMistypes(tokens);       // Checks for "FOR" or "WHILE" mistypes
    tokens = validateLoopSyntax(tokens);         // Checks for missing '(' or '{'

    // === NEW C-STYLE CHECKS ===
    tokens = validateTypos(tokens);              // Checks "NUMBSs age"
    tokens = validateCStyleDeclarations(tokens); // Checks "NUMBS a=1, b=2;"
    // ==========================

    // 3. Count Errors
    let errorCount = 0;
    tokens.forEach(token => {
        if (token.type === TokenType.ERROR) errorCount++;
    });

    displayResults(tokens, errorCount);
    
    if (errorCount > 0) {
        const firstError = tokens.find(t => t.type === TokenType.ERROR);
        // Clean up error message for the modal
        const msg = firstError.lexeme.includes('Error:') 
            ? firstError.lexeme 
            : `Syntax Error: Invalid token detected.`;
            
        showModal('error', 'SYNTAX ERROR', msg);
    } else {
        showModal('success', 'SUCCESSFUL ANALYSIS!', 'Code is valid and follows strict syntax rules.');
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
    
// ... inside class SyntaxHighlighter ...

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
        
        // Apply syntax highlighting with temporary markers
        
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
        result = result.replace(/(&lt;|&gt;|&amp;)|([(){}\[\]:;,])/g, function(match, entity, delimiter) {
            if (entity) {
                return entity; 
            }
            return '###DELIMITER_START###' + delimiter + '###DELIMITER_END###';
        });
        
        // === FIX STARTS HERE ===
        // Replace markers with actual HTML spans using [\s\S]*? to allow matching across newlines
        
        result = result.replace(/###COMMENT_START###([\s\S]*?)###COMMENT_END###/g, `<span style="color: ${colors.comment}; font-style: italic;">$1</span>`);
        
        // This is the specific fix for your issue:
        result = result.replace(/###STRING_START###([\s\S]*?)###STRING_END###/g, `<span style="color: ${colors.string};">$1</span>`);
        
        result = result.replace(/###NUMBER_START###([\s\S]*?)###NUMBER_END###/g, `<span style="color: ${colors.number};">$1</span>`);
        result = result.replace(/###KEYWORD_START###([\s\S]*?)###KEYWORD_END###/g, `<span style="color: ${colors.keyword}; font-weight: bold;">$1</span>`);
        result = result.replace(/###OPERATOR_START###([\s\S]*?)###OPERATOR_END###/g, `<span style="color: ${colors.operator};">$1</span>`);
        result = result.replace(/###DELIMITER_START###([\s\S]*?)###DELIMITER_END###/g, `<span style="color: ${colors.delimiter};">$1</span>`);
        // === FIX ENDS HERE ===
        
        return result;
    }
}

// Initialize syntax highlighter
if (document.getElementById('codeEditor')) {
    window.syntaxHighlighter = new SyntaxHighlighter('codeEditor');
}