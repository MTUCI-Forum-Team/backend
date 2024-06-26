import { ICredentials } from './credentials.interface';

export interface IUser {
  id: string;
  username: string;
  password: string;
  credentials: ICredentials;
  createdAt: Date;
  updatedAt: Date;
}
