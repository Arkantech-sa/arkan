import React from "react";
import Image from "next/image";
import designer from "@/assets//images/icon/ui.svg";
import web from "@/assets//images/icon/web.svg";
import mobile from "@/assets//images/icon/mobile.svg";
import seo from "@/assets//images/icon/seo.svg";
import icon from "@/assets/images/icon/icon_09.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import { Link } from "@/i18n/navigation";

const feature_data = [
  {
    id: 1,
    icon: designer,
    title: "UI/UX Design",
    desc: "Crafting intuitive and engaging user experiences with modern design principles.",
  },
  {
    id: 2,
    icon: web,
    title: "Web Development",
    desc: "Building responsive and high-performance websites tailored to your business needs.",
  },
  {
    id: 3,
    icon: mobile,
    title: "Mobile App Development",
    desc: "Developing scalable and feature-rich mobile applications for iOS and Android.",
  },
  {
    id: 4,
    icon: seo,
    title: "SEO Optimizing",
    desc: "Optimizing websites to improve search rankings and boost online visibility.",
  },
];

const Services = ({ border }: { border?: string }) => {
  return (
    <div className={`feedback-section-five ${border ? `border-${border}` : 'border-100'} position-relative`}>
      <div className="bg-wrapper light-bg-deep border-40 position-relative z-1 pt-120 lg-pt-80 pb-150 lg-pb-80">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-two text-center text-lg-start mb-30">
                  <div className="upper-title-two mb-10">Services</div>
                  <h2 className="text-dark">
                    We Provide Best Services For You.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gx-xl-5 mt-10">
              {feature_data.map((f, i) => (
                <div
                  key={f.id}
                  className="col-lg-6 d-flex wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-style-twenty d-flex position-relative z-1 tran3s w-100 mt-50 md-mt-30">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                      <Image src={f.icon} alt="icon" className="lazy-img" />
                    </div>
                    <div className="text">
                      <Link href="/service-details">
                        <h4 className="fw-bold mb-25">{f.title}</h4>
                      </Link>
                      <p className="mb-20 pe-xxl-5 me-xxl-5">
                        {f.desc}
                      </p>
                      <a
                        href="service-details.html"
                        className="arrow-btn tran3s mt-auto stretched-link"
                      >
                        <Image src={icon} alt="" className="lazy-img" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-subheading md-mt-40">
              <Link href="/services" className="btn-three border-style icon-link">
                <span>See All Services</span>
                <Image src={icon} alt="" className="lazy-img icon ms-1" />
              </Link>
            </div>
          </div>
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      </div>
    </div>
  );
};

export default Services;

