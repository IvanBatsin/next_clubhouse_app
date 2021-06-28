export class ErrorException extends Error {
  status: number;
  errors: any;

  constructor(status: number, message: string, errors: any = null){
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static Unauthorized(): ErrorException {
    return new ErrorException(401, 'User Unauthorized');
  }

  static BadRequest(message: string, errors: any = null): ErrorException {
    return new ErrorException(400, message, errors);
  }
}