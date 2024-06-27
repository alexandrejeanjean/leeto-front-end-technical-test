export class ArchivedGiftCardException extends Error {
  constructor(error: any) {
    super(`Une erreur est survenue ${error}`);
  }
}
