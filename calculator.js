class Economy {
    constructor() {
      this.years_of_invest = 30;
      this.tax = 0.17;
      this.updated_fortune = 0;
      this.monthly_dispose = 0;
      this.monthly_withdraw = 0;
      this.is_year = 1;
      this.precentages_profit = 0.08;
      this.first_fortune = this.updated_fortune;
      this.profits = 0;
    }
  
    get yearsOfInvest() {
      return this.years_of_invest;
    }
  
    set yearsOfInvest(value = 30) {
      if (typeof value === 'number' && value >= 0) {
        this.years_of_invest = value;
      } else {
        throw new Error('Invalid value for years of investment');
      }
    }
  
    get currentTax() {
      return this.tax;
    }
  
    set currentTax(value = 0.17) {
      if (typeof value === 'number' && value >= 0 && value <= 1) {
        this.tax = value;
      } else {
        throw new Error('Tax rate should be a number between 0 and 1');
      }
    }
  
    get currentFortune() {
      return this.updated_fortune;
    }
  
    set currentFortune(value = 0) {
      if (typeof value === 'number' && value >= 0) {
        this.updated_fortune = value;
      } else {
        throw new Error('Invalid value for fortune');
      }
    }
  
    get monthlyDispose() {
      return this.monthly_dispose;
    }
  
    set monthlyDispose(value = 0) {
      if (typeof value === 'number' && value >= 0) {
        this.monthly_dispose = value;
      } else {
        throw new Error('Invalid value for monthly disposal');
      }
    }
  
    get monthlyWithdraw() {
      return this.monthly_withdraw;
    }
  
    set monthlyWithdraw(value = 0) {
      if (typeof value === 'number' && value >= 0) {
        this.monthly_withdraw = value;
      } else {
        throw new Error('Invalid value for monthly withdrawal');
      }
    }
  
    get isYearly() {
      return this.is_year;
    }
  
    set isYearly(value = 1) {
      if (typeof value === 'number' && (value === 0 || value === 1)) {
        this.is_year = value;
      } else {
        throw new Error('Invalid value for is_year');
      }
    }

    get percentagesProfit() {
        return this.precentages_profit;
      }
    
    set percentagesProfit(value = 0.08) {
    if (typeof value === 'number' && value >= 0) {
        this.precentages_profit = value;
    } else {
        throw new Error('Invalid value for percentages profit');
    }
    }
    calculateProfits = () => {
        const initialFortune = this.updated_fortune; // Store the initial fortune
        for (let i = 0; i < this.years_of_invest; i++) {
          this.updated_fortune *= (1 + this.precentages_profit);
        }
        return this.updated_fortune - initialFortune; // Calculate and return profits
      };
      

  };
  document.getElementById("proceedButton").addEventListener("click", function () {
    const yearsOfInvest = parseFloat(document.getElementById("years_of_invest").value);
    const tax = parseFloat(document.getElementById("tax").value);
    const fortune = parseFloat(document.getElementById("fortune").value);
    const monthlyDispose = parseFloat(document.getElementById("monthly_dispose").value);
    const monthlyWithdraw = parseFloat(document.getElementById("monthly_withdraw").value);
    const percentagesProfit = parseFloat(document.getElementById("percentages_profit").value);
  
    const economy = new Economy();
    economy.yearsOfInvest = yearsOfInvest;
    economy.currentTax = tax;
    economy.currentFortune = fortune;
    economy.monthlyDispose = monthlyDispose;
    economy.monthlyWithdraw = monthlyWithdraw;
    economy.percentagesProfit = percentagesProfit;
  
    const profits = economy.calculateProfits();
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
    <p>Years: ${economy.years_of_invest}</p>
    <p>Total Profit: ${economy.currentFortune.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    <p>Profits: ${profits.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
  `;
  });