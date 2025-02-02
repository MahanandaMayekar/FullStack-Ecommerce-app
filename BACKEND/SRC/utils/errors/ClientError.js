class ClientError extends Error {
  constructor(message, explanation, statusCode) {
    super();
    this.name = "ClientError";
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

export default ClientError;