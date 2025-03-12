"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
// internal
import logo from "@/assets/images/logo/favicon.ico";
import useSticky from "@/hooks/use-sticky";
import Navbar from "./navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { sticky } = useSticky();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`theme-main-menu menu-style-five`}>
      <div className="inner-content">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-flex align-items-center">
                <Image src={logo} alt="logo" width={100} height={100} />
              </Link>
            </div>
            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li className="d-none d-md-inline-block ms-3 ms-xl-4">
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
            <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                onClick={toggleNavbar} // ✅ Manually toggle state
                aria-controls="navbarNav"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
                {/* header navbar start */}
                <Navbar />
                {/* header navbar end */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
