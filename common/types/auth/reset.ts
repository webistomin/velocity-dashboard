export interface IPasswordResetSchema {
  email: string;
  token: string;
  createdAt: Date;
}
