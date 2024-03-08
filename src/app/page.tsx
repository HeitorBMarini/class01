"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ name: string }>({ name: "" });

  const router = useRouter();

  function makeLogin() {
    setCookie("token", "meunovoToken");
    router.push('/dashboard/users')
  }

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://api.github.com/users/HeitorBMarini"
      );

      const data = await response.json();

      setUser(data);

      console.log(data);
    }
    loadData();
  }, []);

  return (
    <main  className="flex items-center justify-center min-h-screen
    w-screen text-xl">
      <h1
     >
      {user.name}
    </h1>

    <button onClick={makeLogin}>Login</button>
    </main>
    
  );
}
