import { auth } from "../../config/clientApp"
import { signOut } from "firebase/auth";
import router from "next/router";

async function signOutUser() {
  await signOut(auth);

  const response = await fetch("http://localhost:3000/api/signOut", {
    method: "POST",
  });

  if (response.status === 200) {
    router.push("/login");
  }
}
