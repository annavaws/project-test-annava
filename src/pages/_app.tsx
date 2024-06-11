import React from "react";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/elements/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className={`${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
