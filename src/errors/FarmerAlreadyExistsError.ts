export class FarmerAlreadyExistsError extends Error {
  constructor() {
    super("Farmer already exists.");
  }
}
