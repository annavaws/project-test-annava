import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-[70vh] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center h-[70vh]"
        style={{
          backgroundImage: `url('/header.png')`,
        }}
      ></div>

      <div
        className="absolute w-full h-full flex justify-center items-center transform -translate-y-1/2 text-white text-center z-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div>
          <div className="text-5xl">Ideas</div>
          <div className="text-lg">Where all our great things begin</div>
        </div>
      </div>

      <div className="w-full absolute flex justify-end h-full transform z-20">
        <Image
          src="/polygon.png"
          width={1400}
          height={1000}
          alt="polygon"
          className="relative self-end"
        />
      </div>
    </section>
  );
};

export default Banner;
