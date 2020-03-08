module.exports = class CashRegister {
  constructor(cashInRegister) {
    this.cashInRegister = cashInRegister;
  }

  change(price, cash) {
    const changes = [];
    let status = 'OPEN';
    // Multiply by 100 to avoid JS floating number issue
    let changeAmount = cash * 100 - price * 100;

    if (this.checkRegisterTotal() === changeAmount) {
      return { status: 'CLOSED', changes: this.cashInRegister };
    }

    if (this.checkRegisterTotal() < changeAmount) {
      return { status: 'INSUFFICIENT_FUNDS', changes: [] };
    }

    const cashInRegister = new Map(this.cashInRegister);
    const maxUnitIndex = Array.from(cashInRegister.keys())
      .reverse()
      .findIndex(unit => changeAmount >= currencyUnit.get(unit) * 100);

    const changeCash = Array.from(cashInRegister.entries())
      .slice(
        0,
        maxUnitIndex === 0
          ? cashInRegister.size
          : cashInRegister.size - maxUnitIndex
      )
      .map(([unit, value]) => [unit, value * 100])
      .reverse();

    for (const [unit, value] of changeCash) {
      const unitCashValue = currencyUnit.get(unit) * 100;
      if (changeAmount === 0) break;
      if (value === changeAmount) {
        changes.push([unit, changeAmount / 100]);
        return { status, changes };
      } else if (value > changeAmount) {
        const maxNumberOfUnit = Math.floor(changeAmount / unitCashValue);
        if (maxNumberOfUnit > 0) {
          const maxChangeOfUnit = maxNumberOfUnit * unitCashValue;
          changes.push([unit, maxChangeOfUnit / 100]);
          changeAmount -= maxChangeOfUnit;
        }
      } else if (value < changeAmount) {
        changes.push([unit, value / 100]);
        changeAmount -= value;
      }
    }
    // Edge case where there's enough value but not enough unit for change
    if (changeAmount > 0) return { status: 'INSUFFICIENT_FUNDS', changes: [] };
    return { status, changes };
  }

  checkRegisterTotal() {
    return this.cashInRegister
      .map(([_unit, value]) => value * 100)
      .reduce((acc, curr) => acc + curr, 0);
  }
};

const currencyUnit = new Map([
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['HUNDRED', 100],
]);
