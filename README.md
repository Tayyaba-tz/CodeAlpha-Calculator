# Scientific Calculator

A powerful, responsive scientific calculator built with vanilla HTML5, CSS3, and JavaScript ES6. Features both standard and scientific modes with multiple color themes and a beautiful horizontal layout for desktop screens.

##  Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Responsive Design](#responsive-design)
- [Calculator Modes](#calculator-modes)
- [Color Themes](#color-themes)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Browser Support](#browser-support)
- [Technical Details](#technical-details)
- [License](#license)

##  Features

### Core Functionality
- **Standard Calculator Mode**: Basic arithmetic operations (addition, subtraction, multiplication, division)
- **Scientific Calculator Mode**: Advanced mathematical functions including trigonometry, logarithms, and power operations
- **Memory Operations**: MC (Memory Clear), MR (Memory Recall), M+ (Memory Add), M− (Memory Subtract)
- **Real-time Display**: Shows both the current operation and the result
- **Decimal Support**: Full support for decimal point calculations
- **Percentage Calculations**: Quick percentage operations

### Scientific Operations
- **Trigonometric Functions**: sin, cos, tan (in degrees)
- **Logarithmic Functions**: log (base 10), ln (natural logarithm)
- **Power Operations**: x², x³, xʸ (custom power)
- **Square Root**: √x
- **Reciprocal**: 1/x
- **Factorial**: n!
- **Mathematical Constants**: π (pi), e (Euler's number)
- **Sign Toggle**: ± (positive/negative)

### User Interface
- **Compact Design**: Small, centered calculator that doesn't cover the entire screen
- **Mode Toggle**: Easy switching between Standard and Scientific modes
- **5 Color Themes**: White, Pink, Green, Orange, and Black
- **Responsive Layout**: Adapts perfectly to all screen sizes
- **Horizontal Layout**: On large screens (1200px+), display appears on the left with buttons on the right
- **Theme Persistence**: Your selected theme is saved and restored on next visit

### Accessibility
- **Keyboard Support**: Full keyboard integration for all operations
- **Backspace Function**: Delete last digit with the ← button or Backspace key
- **Clear Function**: Reset calculator with the C button or Escape key
- **Touch-Friendly**: Large buttons optimized for touch input on mobile devices

##  Getting Started

### Installation

1. **Download the Calculator**
   - Extract the `scientific-calculator.zip` file to your desired location

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No installation, no dependencies, no build process required!

### Quick Start

```bash
# Option 1: Direct file opening
# Just double-click index.html in your file explorer

# Option 2: Using a local server (optional)
cd scientific-calculator
python3 -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

##  Usage

### Basic Calculations

1. **Addition**: Click `5` → `+` → `3` → `=` (Result: 8)
2. **Subtraction**: Click `10` → `−` → `4` → `=` (Result: 6)
3. **Multiplication**: Click `6` → `×` → `9` → `=` (Result: 54)
4. **Division**: Click `100` → `÷` → `4` → `=` (Result: 25)
5. **Decimal**: Click `2` → `.` → `5` → `+` → `1` → `.` → `5` → `=` (Result: 4)

### Scientific Functions

1. **Square Root**: Click `16` → Click `√` button (Result: 4)
2. **Square**: Click `5` → Click `x²` button (Result: 25)
3. **Power**: Click `2` → Click `xʸ` → `3` → `=` (Result: 8)
4. **Factorial**: Click `5` → Click `n!` button (Result: 120)
5. **Sine**: Click `30` → Click `sin` button (Result: 0.5)
6. **Cosine**: Click `90` → Click `cos` button (Result: 0)
7. **Tangent**: Click `45` → Click `tan` button (Result: 1)
8. **Logarithm**: Click `100` → Click `log` button (Result: 2)
9. **Natural Log**: Click `2.718` → Click `ln` button (Result: 1)

### Memory Operations

1. **Store Value**: Enter a number → Click `M+` to add to memory
2. **Recall Value**: Click `MR` to display the stored value
3. **Clear Memory**: Click `MC` to clear the memory
4. **Subtract from Memory**: Click `M−` to subtract from memory

### Switching Modes

- Click the **Standard** button to use basic calculator functions
- Click the **Scientific** button to access advanced mathematical operations

### Changing Themes

Click any of the colored circles in the top-right corner:
- ⚪ **White**: Clean, minimal design
- 🩷 **Pink**: Vibrant and modern
- 💚 **Green**: Fresh and calm
- 🧡 **Orange**: Warm and energetic
- ⚫ **Black**: Dark and elegant

##  File Structure

```
scientific-calculator/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with themes and responsive design
├── calculator.js       # JavaScript logic and functionality
└── README.md          # This file
```

### File Descriptions

**index.html** (168 lines)
- Semantic HTML5 structure
- Header with mode toggle and theme selector
- Display section for showing calculations
- Button grid for standard mode (5 rows × 4 columns)
- Button grid for scientific mode (9 rows × 4 columns)

**styles.css** (650+ lines)
- CSS custom properties (variables) for theming
- Mobile-first responsive design with three breakpoints
- 5 complete color themes
- Smooth animations and transitions
- Horizontal layout for large screens (1200px+)

**calculator.js** (400+ lines)
- ScientificCalculator class for core functionality
- Event listeners for button clicks and keyboard input
- Mathematical operations with proper order of operations
- Memory management system
- Theme persistence using localStorage
- Floating-point precision fixes for trigonometric functions

##  Responsive Design

The calculator adapts beautifully to all screen sizes:

### Mobile Devices (< 640px)
- Compact vertical layout
- Touch-optimized button sizes
- Full calculator fits on screen without scrolling
- Readable display with large font

### Tablets (641px - 1199px)
- Balanced vertical layout
- Slightly larger buttons
- Increased spacing for better usability
- Display and buttons centered

### Desktop (1200px - 1919px)
- **Horizontal side-by-side layout**
- Display panel on the left (280px wide)
- Button grid on the right
- Everything visible without scrolling
- Optimal for keyboard input

### Large Desktop (1920px+)
- Same horizontal layout as desktop
- Extra spacing for comfort
- Maximum readability

##  Calculator Modes

### Standard Mode
Perfect for everyday calculations:
- Basic arithmetic: +, −, ×, ÷
- Percentage: %
- Decimal support
- 4 rows of buttons (16 buttons total)
- Ideal for quick calculations

### Scientific Mode
Advanced mathematical operations:
- All standard mode functions
- Trigonometric: sin, cos, tan
- Logarithmic: log, ln
- Power operations: x², x³, xʸ
- Special functions: √, 1/x, n!, ±
- Constants: π, e
- Memory operations: MC, MR, M+, M−
- 9 rows of buttons (36 buttons total)
- Perfect for engineering and scientific work

##  Color Themes

Each theme includes carefully selected colors for:
- **Background**: Main calculator background
- **Display**: Calculator display screen color
- **Text**: Text color for readability
- **Buttons**: Standard button color
- **Operators**: Color for operation buttons (+, −, ×, ÷)
- **Equals**: Color for the equals button

### Theme Details

| Theme | Background | Display | Operators | Use Case |
|-------|-----------|---------|-----------|----------|
| White | #ffffff | #f0f0f0 | #0066cc | Professional, minimal |
| Pink | #ffe6f0 | #ffc0d9 | #ff1493 | Modern, vibrant |
| Green | #e6f7e6 | #c0f0c0 | #00a300 | Fresh, calming |
| Orange | #ffe6cc | #ffd4a3 | #ff8c00 | Warm, energetic |
| Black | #1a1a1a | #2d2d2d | #00d4ff | Dark, elegant |

##  Keyboard Shortcuts

The calculator supports full keyboard input:

| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Percentage |
| `=` or `Enter` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |
| `c` or `C` | Clear all |

##  Browser Support

The calculator works on all modern browsers:

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Opera**: 76+
- **Mobile Browsers**: iOS Safari 14+, Chrome Android 90+

### Requirements
- JavaScript ES6 support
- CSS3 support (Flexbox, CSS Variables)
- No external dependencies or libraries

##  Technical Details

### Architecture

**Object-Oriented Design**
- `ScientificCalculator` class encapsulates all functionality
- Separation of concerns: HTML structure, CSS styling, JavaScript logic
- Event-driven architecture for user interactions

**State Management**
- Current display value
- Current operation
- Previous operand
- Memory storage
- Theme preference

**Mathematical Precision**
- Handles floating-point arithmetic correctly
- Fixes trigonometric precision issues (e.g., cos(90°) = 0, not 6.7×10⁻¹⁷)
- Rounds very small numbers (< 1×10⁻¹⁰) to 0
- Limits decimal precision to 12 significant figures

### Key Methods

```javascript
// Core calculation
calculate(operand1, operator, operand2)

// Trigonometric functions (in degrees)
sin(degrees), cos(degrees), tan(degrees)

// Logarithmic functions
log(x), ln(x)

// Power operations
square(x), cube(x), power(base, exponent)

// Special functions
factorial(n), sqrt(x), reciprocal(x)

// Memory management
memoryAdd(value), memorySubtract(value), memoryRecall()
```

### Storage

Theme preferences are stored in browser's localStorage:
- Key: `calculatorTheme`
- Value: Theme name (white, pink, green, orange, black)
- Persists across browser sessions

##  Use Cases

- **Students**: Perfect for math, physics, and engineering calculations
- **Professionals**: Quick calculations for work and projects
- **Everyday Use**: Fast arithmetic without opening a full application
- **Learning**: Great example of vanilla JavaScript, HTML5, and CSS3
- **Accessibility**: Works offline, no internet required

##  Code Quality

- **Clean Code**: Well-organized, readable, and maintainable
- **Comments**: Inline documentation for complex logic
- **No Dependencies**: Pure vanilla JavaScript, HTML, and CSS
- **Optimized**: Minimal file sizes (6KB total when compressed)
- **Accessible**: Semantic HTML, keyboard navigation support

##  Performance

- **Load Time**: Instant (no build process, no dependencies)
- **File Size**: 6KB (compressed ZIP)
- **Memory**: Minimal memory footprint
- **Responsiveness**: Smooth animations and instant calculations
- **Battery**: Efficient for mobile devices

##  Known Limitations

- Trigonometric functions work in degrees (not radians)
- Maximum calculation precision: 12 significant figures
- Very large numbers may display in scientific notation
- No calculation history (cleared when calculator is reset)

##  Tips & Tricks

1. **Quick Theme Switch**: Click theme buttons to instantly change the look
2. **Keyboard Power User**: Use keyboard shortcuts for faster calculations
3. **Memory for Complex Calculations**: Use M+ and MR to break down complex operations
4. **Decimal Precision**: The calculator automatically handles decimal precision
5. **Responsive Layout**: Resize your browser to see the layout adapt

##  Future Enhancements

Potential features for future versions:
- Calculation history panel
- Radian/Degree toggle for trigonometric functions
- Hexadecimal and binary number support
- Graphing capabilities
- Custom themes editor
- Keyboard layout customization
- Dark mode auto-detection

##  License

This project is open source and available for personal and commercial use. Feel free to modify and distribute as needed.

##  Development

### How to Modify

1. **Change Colors**: Edit the CSS color variables in `styles.css`
2. **Add Functions**: Add new methods to the `ScientificCalculator` class in `calculator.js`
3. **Modify Layout**: Update the HTML structure in `index.html` and corresponding CSS
4. **Add Themes**: Add new color theme CSS in `styles.css` and update the theme selector in `index.html`

### Testing

To test the calculator:
1. Open `index.html` in your browser
2. Test all operations in both Standard and Scientific modes
3. Test all 5 color themes
4. Test responsive design by resizing the browser window
5. Test keyboard input
6. Test memory operations

##  Support

If you encounter any issues:
1. Clear your browser cache and reload
2. Try a different browser
3. Check that JavaScript is enabled
4. Ensure you're using a modern browser version

##  Conclusion

This scientific calculator demonstrates professional web development practices with vanilla JavaScript, responsive design, and user-friendly interface. It's perfect for anyone needing a reliable calculator tool without the overhead of heavy applications.

Enjoy your calculations! 

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Created with**: HTML5, CSS3, JavaScript ES6
