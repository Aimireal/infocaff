import { User } from "firebase/auth";

export interface IAuthContextData {
  user: User | null;
  signOut: () => Promise<void>;
}
