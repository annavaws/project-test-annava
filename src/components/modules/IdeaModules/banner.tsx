import React from "react";
import Image from "next/image";

export default function Banner() {
  //   const backgroundImageUrl = "/banner.png";
  const backgroundImageUrl =
    "https://suitmedia.static-assets.id/strapi/about_us_0b0537a706.png";

  return (
    <>
      <div className="h-[70vh] flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center h-[70vh]"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>

        <Image
          src="/polygon.png"
          width={1400}
          height={1000}
          alt="polygon"
          className="relative self-end"
        />

        <div className="absolute flex flex-col text-white items-center justify-center">
          <div className="text-2xl">Ideas</div>
          <div className="text-lg">Where all our great things begin</div>
        </div>
      </div>
    </>
  );
}
