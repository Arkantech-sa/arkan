import React from "react";
import { Link } from "@/i18n/navigation";

const FooterSocial = () => {
  return (
    <>
      <li>
        <Link href="https://www.facebook.com/" target="_blank">
          <i className="bi bi-facebook"></i>
        </Link>
      </li>
      <li>
        <Link href="https://dribbble.com/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/" target="_blank">
          <i className="bi bi-instagram"></i>
        </Link>
      </li>
    </>
  );
};

export default FooterSocial;
