"use client";

import signIn from "@/app/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);
    if (error) {
      console.log(error);
      return;
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center pt-40 text-black">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleForm}
          className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="blocktext-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
