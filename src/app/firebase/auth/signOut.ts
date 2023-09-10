import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default async function signOutUser() {
  let error = null;

  try {
    await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { error };
}
