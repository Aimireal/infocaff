"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { IAuthContextProvider } from "../interfaces/IAuthContextProvider";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({
  children,
}: IAuthContextProvider): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
