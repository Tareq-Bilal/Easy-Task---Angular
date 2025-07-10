export interface User {
  id: string;
  name: string;
  avatar: string;
}

// Alias for User interface to support IUser naming convention
export type IUser = User;
