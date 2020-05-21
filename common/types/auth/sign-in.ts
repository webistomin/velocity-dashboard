export interface IAuthSignInResponseBody {
  success: boolean;
  message?: string;
  token?: string;
}

export interface IAuthSignInValidatorResponseBody {
  success: boolean;
  message: string;
}
