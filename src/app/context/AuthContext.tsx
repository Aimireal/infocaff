"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { firebaseApp } from "../firebase/firebase";
import { IAuthContextProvider } from "../interfaces/IAuthContextProvider";

const auth = getAuth(firebaseApp);

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({
  children,
}: IAuthContextProvider): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}
