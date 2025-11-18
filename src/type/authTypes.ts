export interface IUser extends Document {
  name: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  roles: "admin" | "farmer";
  comparePassword(candidatePassword: string): Promise<boolean>;
}
