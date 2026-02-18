/**
 * Scientific Calculator - Vanilla JavaScript ES6
 * Features: Arithmetic, Scientific Operations, Keyboard Support, Theme Switching
 */

class ScientificCalculator {
  constructor() {
    // DOM Elements
    this.displayMain = document.getElementById('displayMain');
    this.displayHistory = document.getElementById('displayHistory');
    this.themeToggle = document.getElementById('themeToggle');

    // Calculator State
    this.display = '0';
    this.previousValue = null;
    this.operation = null;
    this.waitingForNewValue = false;
    this.memory = 0;

    // Initialize
    this.init();
  }

  init() {
    // Attach event listeners to all buttons
    this.attachButtonListeners();

    // Theme toggle
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Keyboard support
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));

    // Load saved theme
    this.loadTheme();

    // Update display
    this.updateDisplay();
  }

  attachButtonListeners() {
    // Number buttons
    document.querySelectorAll('[data-number]').forEach((btn) => {
      btn.addEventListener('click', () => this.handleNumber(btn.dataset.number));
    });

    // Operator buttons
    document.querySelectorAll('[data-operator]').forEach((btn) => {
      btn.addEventListener('click', () => this.handleOperator(btn.dataset.operator));
    });

    // Action buttons
    document.querySelectorAll('[data-action]').forEach((btn) => {
      btn.addEventListener('click', () => this.handleAction(btn.dataset.action));
    });
  }

  handleNumber(num) {
    if (this.waitingForNewValue) {
      this.display = num;
      this.waitingForNewValue = false;
    } else {
      this.display = this.display === '0' ? num : this.display + num;
    }
    this.updateDisplay();
  }

  handleOperator(op) {
    const currentValue = parseFloat(this.display);

    if (this.previousValue === null) {
      this.previousValue = currentValue;
    } else if (this.operation) {
      const result = this.calculate(this.previousValue, currentValue, this.operation);
      this.display = String(result);
      this.previousValue = result;
    }

    this.operation = op;
    this.waitingForNewValue = true;
    this.updateDisplay();
  }

  handleAction(action) {
    switch (action) {
      case 'equals':
        this.handleEquals();
        break;
      case 'clear':
        this.handleClear();
        break;
      case 'backspace':
        this.handleBackspace();
        break;
      case 'sqrt':
        this.handleScientific('sqrt');
        break;
      case 'square':
        this.handleScientific('square');
        break;
      case 'cube':
        this.handleScientific('cube');
        break;
      case 'power':
        this.handleOperator('^');
        break;
      case 'sin':
        this.handleScientific('sin');
        break;
      case 'cos':
        this.handleScientific('cos');
        break;
      case 'tan':
        this.handleScientific('tan');
        break;
      case 'reciprocal':
        this.handleScientific('reciprocal');
        break;
      case 'log':
        this.handleScientific('log');
        break;
      case 'ln':
        this.handleScientific('ln');
        break;
      case 'factorial':
        this.handleScientific('factorial');
        break;
      case 'negate':
        this.handleScientific('negate');
        break;
      case 'pi':
        this.handleScientific('pi');
        break;
      case 'e':
        this.handleScientific('e');
        break;
      case 'modulo':
        this.handleOperator('%');
        break;
      case 'mc':
        this.memory = 0;
        break;
      case 'mr':
        this.display = String(this.memory);
        this.waitingForNewValue = true;
        break;
      case 'm+':
        this.memory += parseFloat(this.display);
        this.waitingForNewValue = true;
        break;
      case 'm-':
        this.memory -= parseFloat(this.display);
        this.waitingForNewValue = true;
        break;
    }
    this.updateDisplay();
  }

  handleEquals() {
    if (this.operation && this.previousValue !== null) {
      const currentValue = parseFloat(this.display);
      const result = this.calculate(this.previousValue, currentValue, this.operation);
      this.display = String(result);
      this.previousValue = null;
      this.operation = null;
      this.waitingForNewValue = true;
    }
    this.updateDisplay();
  }

  calculate(prev, current, op) {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return current !== 0 ? prev / current : 0;
      case '%':
        return prev % current;
      case '^':
        return Math.pow(prev, current);
      default:
        return current;
    }
  }

  handleScientific(func) {
    const currentValue = parseFloat(this.display);
    let result = 0;

    switch (func) {
      case 'sqrt':
        result = Math.sqrt(currentValue);
        break;
      case 'square':
        result = currentValue * currentValue;
        break;
      case 'cube':
        result = currentValue * currentValue * currentValue;
        break;
      case 'sin':
        result = Math.sin((currentValue * Math.PI) / 180);
        break;
      case 'cos':
        result = Math.cos((currentValue * Math.PI) / 180);
        break;
      case 'tan':
        result = Math.tan((currentValue * Math.PI) / 180);
        break;
      case 'log':
        result = Math.log10(currentValue);
        break;
      case 'ln':
        result = Math.log(currentValue);
        break;
      case 'factorial':
        result = this.factorial(Math.floor(currentValue));
        break;
      case 'reciprocal':
        result = 1 / currentValue;
        break;
      case 'pi':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      case 'negate':
        result = -currentValue;
        break;
      default:
        result = currentValue;
    }

    this.display = String(result);
    this.waitingForNewValue = true;
    this.updateDisplay();
  }

  factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  handleClear() {
    this.display = '0';
    this.previousValue = null;
    this.operation = null;
    this.waitingForNewValue = false;
    this.updateDisplay();
  }

  handleBackspace() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
    this.updateDisplay();
  }

  handleKeyPress(e) {
    if (e.key >= '0' && e.key <= '9') {
      this.handleNumber(e.key);
    } else if (e.key === '.') {
      if (!this.display.includes('.')) {
        this.handleNumber('.');
      }
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
      e.preventDefault();
      this.handleOperator(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      this.handleEquals();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      this.handleBackspace();
    } else if (e.key === 'Escape') {
      this.handleClear();
    }
  }

  updateDisplay() {
    this.displayMain.textContent = this.display;

    // Update history display
    if (this.operation && this.previousValue !== null) {
      this.displayHistory.textContent = `${this.previousValue} ${this.operation}`;
    } else if (this.memory !== 0) {
      this.displayHistory.textContent = `M: ${this.memory}`;
    } else {
      this.displayHistory.textContent = '';
    }
  }

  toggleTheme() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    this.updateThemeIcon();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    this.themeToggle.querySelector('.theme-icon').textContent = isDarkTheme ? '☀️' : '🌙';
  }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ScientificCalculator();
});
