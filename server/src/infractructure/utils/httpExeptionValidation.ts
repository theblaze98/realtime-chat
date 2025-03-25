import { HttpStatus } from '@nestjs/common'

interface ErrorDetail {
  message: string
  statusCode: number
}

// Definir un enum para los códigos de error
export enum ErrorCodes {
  INVALID_REFRESH_TOKEN = 'INVALID_REFRESH_TOKEN',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

const commonErrors: Record<ErrorCodes, ErrorDetail> = {
  [ErrorCodes.INVALID_REFRESH_TOKEN]: {
    message: 'Invalid refresh token',
    statusCode: HttpStatus.UNAUTHORIZED,
  },
  [ErrorCodes.INVALID_CREDENTIALS]: {
    message: 'Invalid credentials',
    statusCode: HttpStatus.UNAUTHORIZED,
  },
  [ErrorCodes.EMAIL_ALREADY_EXISTS]: {
    message: 'Email already exists',
    statusCode: HttpStatus.BAD_REQUEST,
  },
  [ErrorCodes.USER_NOT_FOUND]: {
    message: 'User not found',
    statusCode: HttpStatus.NOT_FOUND,
  },
}

export class HttpErrorValidation {
  static getError(key: ErrorCodes): ErrorDetail {
    return (
      commonErrors[key] ?? {
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      }
    )
  }
}
