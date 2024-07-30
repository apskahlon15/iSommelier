import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const username = router.query.username || "User";

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-semibold text-blue-800">
        Welcome, {username}!
      </h1>
    </div>
  );
};

export default Home;
