class Calculator {
  constructor() {
    this.displayMain = document.getElementById('displayMain');
    this.displayHistory = document.getElementById('displayHistory');
    this.currentValue = '0';
    this.previousValue = '';
    this.operation = null;
    this.memory = 0;
    this.currentMode = 'standard';
    this.currentTheme = localStorage.getItem('calculatorTheme') || 'white';
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.applyTheme(this.currentTheme);
    this.updateDisplay();
  }

  setupEventListeners() {
    // Number buttons
    document.querySelectorAll('[data-number]').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleNumber(e.target.dataset.number));
    });

    // Operator buttons
    document.querySelectorAll('[data-operator]').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleOperator(e.target.dataset.operator));
    });

    // Action buttons
    document.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleAction(e.target.dataset.action));
    });

    // Mode toggle
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.switchMode(e.target.dataset.mode));
    });

    // Theme selector
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.applyTheme(e.target.dataset.theme));
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  handleNumber(num) {
    if (num === '.' && this.currentValue.includes('.')) return;
    
    if (this.currentValue === '0' && num !== '.') {
      this.currentValue = num;
    } else if (this.currentValue === '0' && num === '.') {
      this.currentValue = '0.';
    } else {
      this.currentValue += num;
    }
    
    this.updateDisplay();
  }

  handleOperator(op) {
    if (this.operation !== null) {
      this.calculate();
    }
    
    this.previousValue = this.currentValue;
    this.operation = op;
    this.currentValue = '0';
    this.updateDisplay();
  }

  handleAction(action) {
    switch (action) {
      case 'clear':
        this.clear();
        break;
      case 'backspace':
        this.backspace();
        break;
      case 'equals':
        this.calculate();
        break;
      case 'sqrt':
        this.currentValue = Math.sqrt(parseFloat(this.currentValue)).toString();
        break;
      case 'square':
        this.currentValue = (parseFloat(this.currentValue) ** 2).toString();
        break;
      case 'cube':
        this.currentValue = (parseFloat(this.currentValue) ** 3).toString();
        break;
      case 'power':
        this.operation = '^';
        this.previousValue = this.currentValue;
        this.currentValue = '0';
        break;
      case 'reciprocal':
        this.currentValue = (1 / parseFloat(this.currentValue)).toString();
        break;
      case 'sin':
        this.currentValue = this.formatNumber(Math.sin(parseFloat(this.currentValue) * Math.PI / 180)).toString();
        break;
      case 'cos':
        this.currentValue = this.formatNumber(Math.cos(parseFloat(this.currentValue) * Math.PI / 180)).toString();
        break;
      case 'tan':
        this.currentValue = this.formatNumber(Math.tan(parseFloat(this.currentValue) * Math.PI / 180)).toString();
        break;
      case 'log':
        this.currentValue = Math.log10(parseFloat(this.currentValue)).toString();
        break;
      case 'ln':
        this.currentValue = Math.log(parseFloat(this.currentValue)).toString();
        break;
      case 'factorial':
        this.currentValue = this.factorial(parseInt(this.currentValue)).toString();
        break;
      case 'negate':
        this.currentValue = (parseFloat(this.currentValue) * -1).toString();
        break;
      case 'pi':
        this.currentValue = Math.PI.toString();
        break;
      case 'modulo':
        this.operation = '%';
        this.previousValue = this.currentValue;
        this.currentValue = '0';
        break;
      case 'mc':
        this.memory = 0;
        break;
      case 'mr':
        this.currentValue = this.memory.toString();
        break;
      case 'm+':
        this.memory += parseFloat(this.currentValue);
        this.currentValue = '0';
        break;
      case 'm-':
        this.memory -= parseFloat(this.currentValue);
        this.currentValue = '0';
        break;
    }
    
    this.updateDisplay();
  }

  calculate() {
    if (this.operation === null || this.previousValue === '') return;

    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    let result;

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current !== 0 ? prev / current : 0;
        break;
      case '%':
        result = prev % current;
        break;
      case '^':
        result = prev ** current;
        break;
      default:
        return;
    }

    this.currentValue = result.toString();
    this.operation = null;
    this.previousValue = '';
    this.updateDisplay();
  }

  clear() {
    this.currentValue = '0';
    this.previousValue = '';
    this.operation = null;
    this.updateDisplay();
  }

  backspace() {
    if (this.currentValue.length > 1) {
      this.currentValue = this.currentValue.slice(0, -1);
    } else {
      this.currentValue = '0';
    }
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

  formatNumber(num) {
    // Round very small numbers to 0 (floating-point precision fix)
    if (Math.abs(num) < 1e-10) return 0;
    // Limit decimal places to avoid excessive scientific notation
    return parseFloat(num.toPrecision(12));
  }

  updateDisplay() {
    const numValue = parseFloat(this.currentValue);
    const formatted = this.formatNumber(numValue);
    this.displayMain.textContent = formatted.toString();
    
    if (this.operation) {
      this.displayHistory.textContent = `${this.previousValue} ${this.operation}`;
    } else {
      this.displayHistory.textContent = '';
    }
  }

  switchMode(mode) {
    this.currentMode = mode;
    
    // Update button states
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.mode === mode) {
        btn.classList.add('active');
      }
    });

    // Show/hide button sections
    document.getElementById('standardMode').classList.toggle('hidden', mode !== 'standard');
    document.getElementById('scientificMode').classList.toggle('hidden', mode !== 'scientific');

    this.clear();
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('calculatorTheme', theme);
    
    // Remove all theme classes
    document.body.classList.remove('theme-white', 'theme-pink', 'theme-green', 'theme-orange', 'theme-black');
    
    // Add selected theme class
    document.body.classList.add(`theme-${theme}`);

    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.style.boxShadow = btn.dataset.theme === theme ? '0 0 0 3px rgba(0,0,0,0.3)' : 'none';
    });
  }

  handleKeyboard(e) {
    if (e.key >= '0' && e.key <= '9') {
      this.handleNumber(e.key);
    } else if (e.key === '.') {
      this.handleNumber('.');
    } else if (e.key === '+' || e.key === '-') {
      this.handleOperator(e.key);
    } else if (e.key === '*') {
      e.preventDefault();
      this.handleOperator('*');
    } else if (e.key === '/') {
      e.preventDefault();
      this.handleOperator('/');
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      this.handleAction('equals');
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      this.backspace();
    } else if (e.key === 'Escape') {
      this.clear();
    }
  }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});
