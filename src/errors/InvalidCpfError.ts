export class InvalidCpfError extends Error {
  constructor() {
    super("CPF formatting is invalid");
  }
}
