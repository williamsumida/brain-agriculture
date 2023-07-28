export function isCpfValid(cpf: string | undefined): boolean {
  if (typeof cpf !== "string") {
    return false;
  }

  const cleanedCPF = cpf.replace(/[^\d]/g, '');

  if (cleanedCPF.length !== 11) {
    return false;
  }

  const invalidPatterns = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  if (invalidPatterns.includes(cleanedCPF)) {
    return false;
  }

  let sum = 0;
  let rest;
  let i;

  for (i = 1; i <= 9; i++) {
    sum += parseInt(cleanedCPF.substring(i - 1, i), 10) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cleanedCPF.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;
  for (i = 1; i <= 10; i++) {
    sum += parseInt(cleanedCPF.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cleanedCPF.substring(10, 11), 10)) {
    return false;
  }

  return true;
}

export function isCnpjValid(cnpj: string | undefined): boolean {
  if (typeof cnpj !== "string") {
    return false;
  }
  const cleanedCNPJ = cnpj.replace(/[^\d]/g, '');

  if (cleanedCNPJ.length !== 14) {
    return false;
  }

  const invalidPatterns = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
  ];

  if (invalidPatterns.includes(cleanedCNPJ)) {
    return false;
  }

  let sum = 0;
  let rest;
  let i;

  for (i = 1; i <= 9; i++) {
    sum += parseInt(cleanedCNPJ.substring(i - 1, i), 10) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cleanedCNPJ.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;
  for (i = 1; i <= 10; i++) {
    sum += parseInt(cleanedCNPJ.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cleanedCNPJ.substring(10, 11), 10)) {
    return false;
  }

  return true;
}

export function isAreaValid(area: number, cropArea: number, vegetationArea: number) {
  if (cropArea + vegetationArea > area) {
    return false;
  }
  return true;
}
