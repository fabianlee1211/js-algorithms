const CashRegister = require('../src/cash-register');

const mockCash = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['HUNDRED', 100],
];

const mockCashSpecial = [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
];

describe('Cash Register', () => {
  let cashRegister;

  beforeEach(() => {
    cashRegister = new CashRegister(mockCash);
  });

  it('should return OPEN', () => {
    const result = cashRegister.change(19.5, 20);
    expect(result).toEqual({
      status: 'OPEN',
      changes: [['QUARTER', 0.5]],
    });
  });

  it('should return OPEN with coins and bills', () => {
    const result = cashRegister.change(3.26, 100);
    expect(result).toEqual({
      status: 'OPEN',
      changes: [
        ['TWENTY', 60],
        ['TEN', 20],
        ['FIVE', 15],
        ['ONE', 1],
        ['QUARTER', 0.5],
        ['DIME', 0.2],
        ['PENNY', 0.04],
      ],
    });
  });

  it('should return INSUFFICIENT when the change is greater than all cash', () => {
    const result = cashRegister.change(19.5, 1000);
    expect(result).toEqual({
      status: 'INSUFFICIENT_FUNDS',
      changes: [],
    });
  });

  it('should return INSUFFICIENT when unit is not enough', () => {
    cashRegister = new CashRegister(mockCashSpecial);
    const result = cashRegister.change(19.5, 20);
    expect(result).toEqual({
      status: 'INSUFFICIENT_FUNDS',
      changes: [],
    });
  });

  it('should return CLOSED', () => {
    const result = cashRegister.change(1, 336.41);
    expect(result).toEqual({
      status: 'CLOSED',
      changes: mockCash,
    });
  });
});
