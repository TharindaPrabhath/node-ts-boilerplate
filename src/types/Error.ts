export class HttpError extends Error {
  statusCode: number;
  description: string | undefined;
  isJoi: boolean | undefined;
  constructor(
    name: string,
    message: string,
    statusCode: number,
    description?: string,
    isJoi?: boolean
  ) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.message = message;
    this.description = description;
    this.statusCode = statusCode;
    this.isJoi = isJoi;
    Error.captureStackTrace(this);
  }
}

export enum ErrorNames {
  VALIDATION_FAIL = "VALIDATION_FAIL",
  REQUEST_AUTH_FAIL = "REQUEST_AUTH_FAIL",
  LOGIN_FAIL = "LOGIN_FAIL",
  REGISTRATION_FAIL = "REGISTRATION_FAIL",
  EMAIL_VERIFICATION_FAIL = "EMAIL_VERIFICATION_FAIL",
  REFRESH_TOKENS_FAIL = "REFRESH_TOKENS_FAIL",
  EVENT_CREATE_FAIL = "EVENT_CREATE_FAIL",
  EVENT_GET_FAIL = "EVENT_GET_FAIL",
  CERTIFICATE_ISSUE_FAIL = "CERTIFICATE_ISSUE_FAIL",
  CERTIFICATE_IMAGE_FETCH_FAIL = "CERTIFICATE_IMAGE_FETCH_FAIL",
  REPORT_CREATE_FAIL = "REPORT_CREATE_FAIL",
  REPORT_GET_FAIL = "REPORT_GET_FAIL",
  DB_READ_FAIL = "DB_READ_FAIL",
}
