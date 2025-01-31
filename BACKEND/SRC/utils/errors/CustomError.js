class CustomError extends Error {
  constructor(error) {
    super();
    (this.success = false),
      (this.message = error.message),
      (this.explanation =error.explanation),
      (this.statusCode = error.statusCode);
  }
}
export default CustomError;
