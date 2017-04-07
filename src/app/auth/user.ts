export interface User {
  email: string;
  profile: {
    name: {
      first: string,
      last: string
    },
    photoURL: string
  };
  uid?: string;
  password?: string;
  createdAt?: any;
  updatedAt?: any;
}