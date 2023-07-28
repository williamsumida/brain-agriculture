export class MustIncludeDocumentError extends Error {
  constructor() {
    super("Must include at least one document.");
  }
}
