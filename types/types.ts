export type TokenType = {
  _id: string;
  role: string;
  email: string;
};

export type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  docVersion: number;
  isDisabled: boolean;
};

export type DecodeType = {
  id: string;
  role: string;
  email: string;
} 
