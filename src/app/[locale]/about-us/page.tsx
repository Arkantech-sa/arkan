import React from "react";
import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import about_bg from "@/assets/images/media/img_26.jpg";
import shape from "@/assets/images/shape/shape_25.svg";
import Header from "@/layout/header/header";
import AboutUs from "@/components/about/about";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterFive from "@/layout/footer/footer-five";

export const metadata: Metadata = {
    title: "About Us Page",
};

const AboutUsPage = () => {
    return (
        <div className="main-page-wrapper step-header">
            {/* header start */}
            <Header />
            {/* header end */}
            <main>
                {/* breadcrumb start */}
                <BreadcrumbOne
                    title="We’r top rated company"
                    page="About Us"
                    bg_img={about_bg}
                    shape={shape}
                    style_2={true}
                />
                {/* breadcrumb end */}

                {/* About us start */}
                <AboutUs style_2={true} />
                {/* About us end */}

                <br />
                <br />
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

export default AboutUsPage;
