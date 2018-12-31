export interface Credentials {
  email: string;
  password: string;
}

type UserRole = 'Admin' | 'User';

export interface User {
  id: number;
  name: string;
  role: UserRole;
}