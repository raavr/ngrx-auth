export interface Credentials {
  email: string;
  password: string;
}

type UserRole = 'Admin' | 'User';

export interface User {
  id: string;
  name: string;
  role?: UserRole;
  email?: string;
  phone?: string;
}