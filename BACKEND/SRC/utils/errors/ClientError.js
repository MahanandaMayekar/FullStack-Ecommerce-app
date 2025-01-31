class ClientError extends Error {
  constructor(error,explanation,statusCode) {
    super();
    this.name = 'ClientError';
    this.message = error.message;
    this.explanation =explanation;
    this.statusCode = statusCode
  }
}

export default ClientError;