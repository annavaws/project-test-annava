import React from "react";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { AxiosProvider } from "@/components/contexts/AxiosContext";
import Navbar from "@/components/elements/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AxiosProvider>
        <Navbar />
        <div className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </AxiosProvider>
    </div>
  );
}

export default MyApp;
