# Z-Language Analyzer 🚀

A modern web-based lexical and syntax analyzer for the Z-Language programming language. Built with vanilla JavaScript, HTML, and CSS with VS Code-inspired syntax highlighting.

![Z-Language Analyzer](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [How to Use](#how-to-use)
- [Z-Language Keywords](#z-language-keywords)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Lexical Analyzer
- 🔍 Token identification and classification
- 🎨 VS Code-style syntax highlighting
- 📊 Detailed token table with line numbers
- ⚠️ Error detection for invalid tokens
- 📋 Copy/Paste functionality
- 📁 Export results to CSV

### Syntax Analyzer
- ✅ Syntax validation
- 🐛 Error detection with descriptions
- 📍 Line-by-line error highlighting
- 🔴 Visual error indicators in code editor
- 📋 Copy/Paste functionality
- 🧹 Clear all functionality

### General Features
- 🎨 Modern, responsive UI with cyberpunk aesthetics
- 🌙 Dark theme optimized for long coding sessions
- 💻 Real-time syntax highlighting as you type
- 📱 Mobile-friendly responsive design
- ⚡ Fast and lightweight
- 🔄 Smooth animations and transitions

## 📸 Screenshots

*(Add your screenshots here)*

## 🚀 Getting Started

### Prerequisites

No installation or dependencies required! This is a pure HTML/CSS/JavaScript application that runs directly in your browser.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/z-language-analyzer.git
   cd z-language-analyzer
   ```

2. **That's it!** No build process, no npm install, no configuration needed.

### Running the Application

There are several ways to run the application:

#### Option 1: Direct File Opening (Easiest)
1. Navigate to the project folder
2. Double-click `index.html` for the **Syntax Analyzer**
3. Double-click `lexical.html` for the **Lexical Analyzer**

#### Option 2: Using Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Option 3: Using Node.js HTTP Server
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000
```
Then open `http://localhost:8000` in your browser.

#### Option 4: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` or `lexical.html`
3. Select "Open with Live Server"

#### Option 5: Using PHP Built-in Server
```bash
php -S localhost:8000
```
Then open `http://localhost:8000` in your browser.

## 📁 File Structure

```
z-language-analyzer/
│
├── syntax.html            # Syntax Analyzer main page
├── lexical.html           # Lexical Analyzer main page
├── syntax-style.css       # Styles for Syntax Analyzer
├── lexical-style.css      # Styles for Lexical Analyzer
├── syntax-script.js       # Syntax Analyzer logic
├── lexical-script.js      # Lexical Analyzer logic
├── logo.png               # Z-Language logo
└── README.md              # This file
```

## 📖 How to Use

### Lexical Analyzer

1. **Open the Lexical Analyzer**
   - Open `lexical.html` in your browser
   - Or navigate to it from the Syntax Analyzer using the navbar

2. **Write or Paste Code**
   - Type your Z-Language code in the left editor panel
   - Or click the "Paste" button to paste from clipboard

3. **Analyze**
   - Click the blue "Analyze" button
   - View the generated tokens in the right panel

4. **Review Results**
   - Check the token table for:
     - Line numbers
     - Token types
     - Lexemes
   - Errors are highlighted in red

### Syntax Analyzer

1. **Open the Syntax Analyzer**
   - Open `syntax.html` in your browser
   - Or navigate to it from the Lexical Analyzer using the navbar

2. **Write or Paste Code**
   - Type your Z-Language code in the left editor panel
   - Or click the "Paste" button to paste from clipboard

3. **Analyze**
   - Click the blue "Analyze" button
   - View syntax errors in the right panel

4. **Review Results**
   - Check the error table for:
     - Line numbers
     - Error descriptions
   - Error lines are highlighted with a red border in the editor

5. **Fix Errors**
   - Correct the errors in your code
   - Re-analyze until no errors are found

## 🔤 Z-Language Keywords

### Keywords
```
ALIAS, BIG, BLEND, BOOL, BOUNCE, CAP, CASE, CORE, DECI, DOUBLE,
DROP, DUO, ELSE, EMOJI, EMPTY, ENUM, FAM, FIXED, FOR, GRAB,
IF, IMPORT, LENGTH, LETT, MAXI, MINI, MATIC, NEXT, NOCAP,
NORM, NUMBS, OUT, SMALL, SHADY, SPILL, STAY, STRUCT, SWIM,
SWITCH, TAG, TEXT, VIBE, WHILE, ZAVED
```

### Functions
```
AVG, ASC, DESC, MAX, MIN, FINDSTR
```

### Operators
```
+, -, *, /, %, =, ==, ===, !=, <, >, <=, >=
&&, ||, !, ++, --, +=, -=, *=, /=, %=, &=, |=, ^=
```

### Delimiters
```
( ) { } [ ] : ; , " '
```

### Example Code

```z
# Variable declaration
LETT x = 10;
LETT name = "John";

# Conditional statement
IF x > 5 {
    OUT "Greater than 5";
} ELSE {
    OUT "Less than or equal to 5";
}

# Loop
FOR i = 0; i < 10; i++ {
    OUT i;
}

# Function
LETT result = MAX(5, 10, 15);
```

## 🛠️ Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Application logic
- **Google Fonts** - JetBrains Mono font

### Key Features Implemented

- Custom Lexer/Tokenizer
- Syntax Parser
- Real-time syntax highlighting
- Error detection and reporting
- Responsive design
- Modern UI/UX patterns

## 🌐 Browser Support

| Browser | Version | Supported |
|---------|---------|-----------|
| Chrome  | 90+     | ✅        |
| Firefox | 88+     | ✅        |
| Safari  | 14+     | ✅        |
| Edge    | 90+     | ✅        |
| Opera   | 76+     | ✅        |

**Note:** Internet Explorer is not supported.

## 🎨 Color Scheme

The syntax highlighting uses VS Code Dark+ theme colors:

- **Keywords**: `#C586C0` (Purple)
- **Strings**: `#CE9178` (Orange)
- **Numbers**: `#B5CEA8` (Light Green)
- **Comments**: `#6A9955` (Green)
- **Operators**: `#D4D4D4` (White)
- **Delimiters**: `#FFD700` (Gold)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage
- 🌍 Internationalization

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Made with ❤️ by the Z-Language Team

© 2025 All Rights Reserved
