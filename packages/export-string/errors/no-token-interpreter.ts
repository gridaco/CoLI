export class NoTokenInterpreterFoundError extends Error {
  constructor(token: string, origin: any, context?: any) {
    super(
      `No coli stringfy interpreter found for token kind: ${token}\nThe origin input was ${JSON.stringify(
        origin
      )}`
    );
  }
}
