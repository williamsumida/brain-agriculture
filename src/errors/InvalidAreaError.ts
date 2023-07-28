export class InvalidAreaError extends Error {
  constructor() {
    super("The sum of cropArea and vegetationArea should not be greater than area");
  }
}
