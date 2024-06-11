import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "/", label: "" },
    { href: "/home", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/ideas", label: "Ideas" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`bg-tango text-white fixed top-0 left-0 right-0 z-50 w-full h-[10vh] flex flex-row justify-between items-center px-10 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${hasScrolled ? "bg-opacity-70" : ""}`}
    >
      <Link href="/" passHref>
        <Image
          src="/site-logo-white.webp"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="left-0 w-full flex justify-end flex-row items-center gap-16 px-10 py-5">
        {links.map(({ href, label }) => (
          <Link href={href} key={href} passHref>
            <span
              className={`text-md hover:underline hover:underline-offset-8 ${
                router.pathname === href ? "underline underline-offset-8" : ""
              }`}
              onClick={(e) => {
                if (router.pathname === href) {
                  e.preventDefault();
                }
              }}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
