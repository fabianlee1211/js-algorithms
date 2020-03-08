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

describe('Cash Register', () => {
  let cashRegister;

  beforeEach(() => {
    cashRegister = new CashRegister(mockCash);
  });

  it('should return OPEN status', () => {
    const result = cashRegister.change(19.5, 20);
    expect(result).toEqual({
      status: 'OPEN',
      changes: [['QUARTER', 0.5]],
    });
  });

  it('should return OPEN status with coins and bills', () => {
    const result = cashRegister.change(19.5, 234.1);
    expect(result).toEqual({
      status: 'OPEN',
      changes: [
        ['HUNDRED', 100],
        ['TWENTY', 60],
        ['TEN', 20],
        ['FIVE', 30],
        ['ONE', 4],
        ['QUARTER', 0.5],
        ['DIME', 0.1],
      ],
    });
  });

  it('should return INSUFFICIENT status', () => {
    const result = cashRegister.change(19.5, 1000);
    expect(result).toEqual({
      status: 'INSUFFICIENT_FUNDS',
      changes: [],
    });
  });

  it('should return CLOSED status', () => {
    const result = cashRegister.change(1, 336.41);
    expect(result).toEqual({
      status: 'CLOSED',
      changes: mockCash,
    });
  });
});
