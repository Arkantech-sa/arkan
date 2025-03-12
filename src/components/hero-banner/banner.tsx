'use client'
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
// internal
import banner from "@/assets/images/assets/banner.png";
import screen from "@/assets/images/assets/screen_18.png";
import sticker from "@/assets/images/assets/sticker.png";
import { useTranslations } from "next-intl";
import { useBanner } from "@/hooks/useHome";

// img style
const imgStyle = {
  height: "auto",
};

const HeroBanner = () => {
  const t = useTranslations('HomePage');

  const { data, isLoading, isError } = useBanner();

  console.log(data);


  return (
    <div className="hero-banner-five">
      <div className="bg-wrapper position-relative pt-85 sm-pt-50 pb-120 xl-pb-100 sm-pb-10">
        <div className="container position-relative">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-8 wow fadeInLeft">
              <h1 className="hero-heading font-magnita">
                {data?.[0]?.title}
              </h1>
              <p className="text-lg text-dark pt-60 lg-pt-40 pb-30 lg-pb-10 sm-pb-30">
                {data?.[0]?.description}
              </p>
              <div className="d-md-inline-flex flex-wrap align-items-center">
                <div className="me-5 mt-15">
                  <Link href={data?.[0]?.action || "/contact"} className="btn-sixteen tran3s">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="media-wrapper ps-5 pe-5 d-flex align-items-end">
          <Image
            src={banner}
            alt="image"
            className="lazy-img me-auto ms-auto bounce_ani"
            style={imgStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
