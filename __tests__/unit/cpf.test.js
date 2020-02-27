import * as CPF from '../../src/cpf';

describe('CPF.format', () => {
  it('format empty string', () => {
    expect(CPF.format('')).toBe('');
  });
  it('format null', () => {
    expect(CPF.format(null)).toBe('');
  });
  it('format undefined', () => {
    expect(CPF.format(undefined)).toBe('');
  });
  it('format one number', () => {
    expect(CPF.format('5')).toBe('5');
  });
  it('format two number', () => {
    expect(CPF.format('50')).toBe('50');
  });
  it('format three number', () => {
    expect(CPF.format('509')).toBe('509');
  });
  it('format four number', () => {
    expect(CPF.format('5095')).toBe('509.5');
  });
  it('format five number', () => {
    expect(CPF.format('50955')).toBe('509.55');
  });
  it('format six number', () => {
    expect(CPF.format('509558')).toBe('509.558');
  });
  it('format seven number', () => {
    expect(CPF.format('5095583')).toBe('509.558.3');
  });
  it('format eight number', () => {
    expect(CPF.format('50955839')).toBe('509.558.39');
  });
  it('format nine number', () => {
    expect(CPF.format('509558390')).toBe('509.558.390');
  });
  it('format ten number', () => {
    expect(CPF.format('5095583909')).toBe('509.558.390-9');
  });
  it('format eleven number', () => {
    expect(CPF.format('50955839092')).toBe('509.558.390-92');
  });
  it('format twelve number', () => {
    expect(CPF.format('509558390923')).toBe('509.558.390-92');
  });
});

describe('CPF.getNumber', () => {
  it('get number when receive empty string', () => {
    expect(CPF.getNumber('')).toBe('');
  });
  it('get number when receive null', () => {
    expect(CPF.getNumber(null)).toBe('');
  });
  it('get number when receive undefined', () => {
    expect(CPF.getNumber(undefined)).toBe('');
  });
  it('get number when receive an array', () => {
    expect(CPF.getNumber([])).toBe('');
  });
  it('get number when receive an object', () => {
    expect(CPF.getNumber({})).toBe('');
  });
  it('get number when receive several character', () => {
    expect(CPF.getNumber('5a0e9.5%5@8.3!9$0-9&2,3')).toBe('509558390923');
  });
});

describe('CPF.isValid', () => {
  it('validate empty string', () => {
    expect(CPF.isValid('')).toBe(false);
  });
  it('validate cpf valid without mask', () => {
    expect(CPF.isValid('50955839092')).toBe(true);
  });
  it('validate cpf valid with mask', () => {
    expect(CPF.isValid('509.558.390-92')).toBe(true);
  });
  it('validate cpf invalid with mask', () => {
    expect(CPF.isValid('509.558.390-21')).toBe(false);
  });
});
