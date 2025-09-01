class ClientError extends Error {
  constructor(error) {
    super();
    this.name = 'ClientError';
    this.message = error.message;
    this.explanation = error.explanation;
    this.statusCode = error.statusCode
      ? error.statusCode
      : 400;
  }
}

export default ClientError;
