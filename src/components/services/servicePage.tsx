"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import icon from "@/assets/images/icon/icon_09.svg";
import { useServices } from "@/hooks/useContact";
import shape from "@/assets/images/shape/shape_05.svg";

interface Service {
    id: number;
    icon_image: string;
    title: string;
    small_description: string;
}
// const feature_data = [
//     {
//         id: 1,
//         icon: designer,
//         title: "UI/UX Design",
//         desc: "Crafting intuitive and engaging user experiences with modern design principles.",
//     },
//     {
//         id: 2,
//         icon: web,
//         title: "Web Development",
//         desc: "Building responsive and high-performance websites tailored to your business needs.",
//     },
//     {
//         id: 3,
//         icon: mobile,
//         title: "Mobile App Development",
//         desc: "Developing scalable and feature-rich mobile applications for iOS and Android.",
//     },
//     {
//         id: 4,
//         icon: seo,
//         title: "SEO Optimizing",
//         desc: "Optimizing websites to improve search rankings and boost online visibility.",
//     },
// ];

const ServicesPage = ({ border }: { border?: string }) => {
    const { data: services, isLoading, isError } = useServices();

    const serviceList = useMemo(() => {
        if (!services || isLoading || isError) return null;
        return services.map((service: Service) => (
            <div
                key={service.id}
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="card-style-twenty d-flex position-relative z-1 tran3s w-100 mt-50 md-mt-30">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                        <Image
                            src={service.icon_image}
                            width={40}
                            height={40}
                            alt={`${service.title} icon`}
                            className="lazy-img"
                        />
                    </div>
                    <div className="text">
                        <Link href={`/services/${service.id}`}>
                            <h4 className="fw-bold mb-25">{service.title}</h4>
                        </Link>
                        <p dangerouslySetInnerHTML={{ __html: service.small_description }} className="mb-20 pe-xxl-5 me-xxl-5" />
                        <Link
                            href={`/services/${service.id}`}
                            className="arrow-btn tran3s mt-auto stretched-link"
                        >
                            <Image src={icon} alt="" className="lazy-img" />
                        </Link>
                    </div>
                </div>
            </div>
        ));
    }, [services, isLoading, isError]);

    return (
        <div className={`feedback-section-five ${border ? `border-${border}` : "border-100"} position-relative`}>
            <div className="bg-wrapper light-bg-deep border-40 position-relative z-1 pt-120 lg-pt-80 pb-150 lg-pb-80">
                <div className="container">
                    <div className="position-relative">
                        <div className="row gx-xl-5 mt-10">{serviceList}</div>
                    </div>
                </div>
                <Image src={shape} alt="decorative shape" className="lazy-img shapes shape_01" />
            </div>
        </div>
    );
};

export default ServicesPage;
