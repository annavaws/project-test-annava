import Link from "next/link";
import React from "react";
export default function Nothing() {
  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center text-lg text-black">
        <Link
          href="/ideas"
          className="animate-bounce hover:underline hover:underline-offset-4"
        >
          Go here -{">"}
        </Link>
      </div>
    </>
  );
}
