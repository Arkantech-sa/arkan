"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useServiceDetails } from "@/hooks/useServiceDetails";
import { useServices } from "@/hooks/useServices";
import BreadcrumbOne from "../breadcrumb/breadcrumb-one";
import about_bg from "@/assets/images/media/img_26.jpg";
import shape from "@/assets/images/shape/shape_25.svg";

// Service Navigation Item Component
function ServiceNav({ id, title, active }: { id: number; title: string; active?: boolean }) {
  return (
    <li>
      <Link href={`/services/${id}`} className={`d-flex align-items-center w-100 ${active ? "active" : ""}`}>
        <span>{title}</span>
      </Link>
    </li>
  );
}

// Image Styling
const imgStyle = { height: "auto" };

const ServiceDetailsArea = () => {
  const { id } = useParams();
  const { data: service, isLoading: isLoadingDetails, isError: isErrorDetails } = useServiceDetails(id as string | undefined);
  const { data: servicesList, isLoading: isLoadingServices, isError: isErrorServices } = useServices();

  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbOne
        title="Service Details"
        page={service?.title || "Service"}
        bg_img={about_bg}
        shape={shape}
        style_2={true}
      />

      <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
        <div className="container">
          <div className="row">
            {/* Service Details */}
            <div className="col-xxl-9 col-lg-8 order-lg-last">
              <div className="details-meta ps-xxl-5 ps-xl-3">
                {isLoadingDetails ? (
                  <p>Loading service details...</p>
                ) : isErrorDetails ? (
                  <p>Error loading service details.</p>
                ) : (
                  <>
                    <h2>{service?.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: service?.short_description || "" }} />
                    <p dangerouslySetInnerHTML={{ __html: service?.long_description || "" }} />
                    {service?.image && (
                      <div className="img-meta mb-60 lg-mb-40">
                        <Image
                          src={service.image}
                          width={100}
                          height={100}
                          alt="Service"
                          className="lazy-img w-100 rounded-4"
                          style={imgStyle}
                        />
                      </div>
                    )}
                    <h3>Our Processing</h3>
                    <p>
                      Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.
                    </p>

                    <h3>Qualifications & Requirements</h3>
                    <p>
                      Crafting exceptional UI/UX designs requires a combination of creativity, technical skills, and user-centric thinking.
                      Our team follows a structured approach to ensure seamless and visually engaging digital experiences.
                    </p>
                    <ul className="style-none list-item pb-20">
                      <li>Strong understanding of design principles and user psychology.</li>
                      <li>Proficiency in design tools like Figma, Adobe XD, or Sketch.</li>
                      <li>Ability to create wireframes, prototypes, and interactive designs.</li>
                      <li>Knowledge of responsive and accessible design standards.</li>
                      <li>Experience in collaborating with developers for seamless implementation.</li>
                    </ul>
                    <p>
                      Our UI/UX experts ensure that every project delivers intuitive navigation, engaging visuals, and an optimal user experience,
                      ultimately enhancing customer satisfaction and business success.
                    </p>

                  </>
                )}
              </div>
            </div>

            {/* Service Navigation Sidebar */}
            <div className="col-xxl-3 col-lg-4 order-lg-first">
              <aside className="md-mt-40 sticky-nav">
                <div className="service-nav-item">
                  <ul className="style-none">
                    {isLoadingServices ? (
                      <p>Loading services...</p>
                    ) : isErrorServices ? (
                      <p>Error loading services.</p>
                    ) : (
                      servicesList?.map((serviceItem: { id: number; title: string; }) => (
                        <ServiceNav key={serviceItem.id} id={serviceItem.id} title={serviceItem.title} active={Number(id) === serviceItem.id} />
                      ))
                    )}
                  </ul>
                </div>
                <div className="contact-banner text-center mt-40 lg-mt-20">
                  <h3 className="mb-20">Any Questions? Let’s talk</h3>
                  <Link href="/contact-us" className="tran3s fw-500">Let’s Talk</Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
