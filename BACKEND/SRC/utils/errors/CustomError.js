class CustomError extends Error {
  constructor( message, statusCode) {
    super(message);
    (this.success = false),
      (this.message = message),
      (this.explanation = explanation),
      (this.statusCode = statusCode);
  }
}
export default CustomError;
