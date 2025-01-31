class ClientError extends Error {
  constructor(error,explanation,statusCode) {
    super(message);
    this.name = 'ClientError';
    this.message = error.message;
    this.explanation =explanation;
    this.statusCode = statusCode
  }
}

export default ClientError;