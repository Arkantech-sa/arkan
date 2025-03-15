"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import loader from "@/assets/images/logo/black.png";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    // Show preloader on initial load
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show preloader on route change
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div id="preloader" className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="">
          <Image src={loader} alt="loader" className="m-auto d-block" width={60} height={60} />
        </div>
        <div className="txt-loading flex justify-center gap-2 text-white text-2xl">
          <span data-text-preloader={"Arkantech"} className="letters-loading">
            Arkantech
          </span>
          {/* {["A", "r", "k", "a", "n"].map((letter, index) => (
            <span key={index} data-text-preloader={letter} className="letters-loading">
              {letter}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
