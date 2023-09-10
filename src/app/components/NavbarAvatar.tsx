"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";

export function NavbarAvatar() {
  const authContext = useAuthContext();
  const user = authContext?.user;
  const signOut = authContext?.signOut;

  const router = useRouter();

  const handleAvatarClick = async () => {
    if (user) {
      await signOut?.();
      router.push("/");
    } else {
      router.push("/signin");
    }
  };

  const avatarIcon = user ? (
    <svg
      className="absolute w-12 h-12 text-grey-500 -left-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clip-rule="evenodd"
      ></path>
    </svg>
  ) : (
    <svg
      className="absolute w-12 h-12 text-red-500 -left-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div
      className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
      onClick={handleAvatarClick}
      style={{ cursor: "pointer" }}
    >
      {avatarIcon}
    </div>
  );
}
