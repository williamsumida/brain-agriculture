export class InvalidCnpjError extends Error {
  constructor() {
    super("CNPJ formatting is invalid");
  }
}
