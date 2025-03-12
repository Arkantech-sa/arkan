import React from "react";
import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import about_bg from "@/assets/images/media/img_26.jpg";
import shape from "@/assets/images/shape/shape_25.svg";
import Header from "@/layout/header/header";
import ServicesPage from "@/components/services/servicePage";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterFive from "@/layout/footer/footer-five";

export const metadata: Metadata = {
    title: "Arkantech | Services Page",
};

const servicesPage = () => {
    return (
        <div className="main-page-wrapper step-header">
            {/* header start */}
            <Header />
            {/* header end */}
            <main>
                {/* breadcrumb start */}
                <BreadcrumbOne
                    title="Our Services"
                    page="Services"
                    bg_img={about_bg}
                    shape={shape}
                    style_2={true}
                />
                {/* breadcrumb end */}

                {/* Services start */}
                <ServicesPage />
                {/* Services end */}

                {/* newsletter banner start */}
                <NewsletterBanner />
                {/* newsletter banner end */}

                {/* footer start */}
                <FooterFive />
                {/* footer end */}
            </main>
        </div>
    );
};

export default servicesPage;
