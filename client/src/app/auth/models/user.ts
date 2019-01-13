export interface Credentials {
  email: string;
  password: string;
}

type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  name: string;
  role?: UserRole;
  email?: string;
  phone?: string;
  avatar?: string;
}