function calcCheckerDigits(digits) {
  let sum = null;
  for (let i = 0; i < digits.length; ++i) {
    sum += Number(digits.charAt(i)) * (digits.length + 1 - i);
  }

  const remainder = sum % 11;
  const checker = remainder < 2 ? 0 : 11 - remainder;

  return checker;
}

export function format(value) {
  if (typeof value !== 'string' || value === '') {
    console.warn('Unsupported value');
    return '';
  }
  const cpfDigits = value.match(/\d/g);
  if (cpfDigits.length > 3) cpfDigits.splice(3, 0, '.');
  if (cpfDigits.length > 7) cpfDigits.splice(7, 0, '.');
  if (cpfDigits.length > 11) cpfDigits.splice(11, 0, '-');
  if (cpfDigits.length > 14) cpfDigits.splice(14, cpfDigits.length - 14);
  return cpfDigits.join('');
}

export function getNumber(value) {
  if (typeof value !== 'string' || value === '') {
    console.warn('Unsupported value');
    return '';
  }
  const cpfDigits = value.match(/\d/g);
  return cpfDigits.join('');
}

export function isValid(value) {
  if (typeof value !== 'string' || value === '') {
    console.warn('Unsupported value');
    return false;
  }

  const listDigits = value.match(/\d/g);
  const digits = listDigits.join('');
  const firstNineDigits = digits.substring(0, 9);
  const checker = digits.substring(9, 11);

  if (digits.length !== 11) {
    return false;
  }

  for (let i = 0; i < 10; i++) {
    if (`${firstNineDigits}${checker}` === Array(12).join(String(i))) {
      return false;
    }
  }

  const firstDigitChecker = calcCheckerDigits(firstNineDigits);
  const secundDigitChecker = calcCheckerDigits(
    `${firstNineDigits}${firstDigitChecker}`,
  );

  return (
    checker === firstDigitChecker.toString() + secundDigitChecker.toString()
  );
}
