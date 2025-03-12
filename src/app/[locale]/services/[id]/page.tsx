import React from "react";
import { Metadata } from "next";
import Header from "@/layout/header/header";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterFive from "@/layout/footer/footer-five";
import ServiceDetailsArea from "@/components/services/service-details-area";

export const metadata: Metadata = {
    title: "Arkantech | Services Details",
};

const servicesPage = () => {
    return (
        <div className="main-page-wrapper step-header">
            {/* header start */}
            <Header />
            {/* header end */}
            <main>

                {/* service details area start */}
                <ServiceDetailsArea />
                {/* service details area end */}

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
