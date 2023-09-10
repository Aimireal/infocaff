"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { IAuthContextProvider } from "../interfaces/IAuthContextProvider";
import { auth } from "../firebase/firebase";
import signOutUser from "../firebase/auth/signOut";
import { IAuthContextData } from "../interfaces/IAuthContextData";

export const AuthContext = createContext<IAuthContextData | undefined>(undefined);
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

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signOut: handleSignOut  }}>{children}</AuthContext.Provider>
  );
}
