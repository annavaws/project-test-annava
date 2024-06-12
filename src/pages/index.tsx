import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-10 bg-white min-h-screen flex justify-center items-center text-lg text-black">
      <Link
        href="/ideas"
        className="animate-bounce hover:underline hover:underline-offset-4"
      >
        Go here -{">"}
      </Link>
    </div>
  );
}
