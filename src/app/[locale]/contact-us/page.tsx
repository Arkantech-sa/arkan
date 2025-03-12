import React from "react";
import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import about_bg from "@/assets/images/media/img_26.jpg";
import shape from "@/assets/images/shape/shape_25.svg";
import Header from "@/layout/header/header";
import ContactArea from "@/components/contact/contact-area";
import { Toaster } from "react-hot-toast";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterFive from "@/layout/footer/footer-five";

export const metadata: Metadata = {
    title: "Contact us Page",
};

const ContactPage = (locale: any) => {

    return (
        <div className="main-page-wrapper step-header">
            {/* header start */}
            <Header />
            {/* header end */}

            <main>
                {/* breadcrumb start */}
                <BreadcrumbOne
                    title="Contact us for inquiries"
                    page="Contact"
                    bg_img={about_bg}
                    shape={shape}
                    style_2={true}
                />
                {/* breadcrumb end */}

                {/* React-Hot-Toast with locale-based direction */}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{ style: { direction: locale === "en" ? "ltr" : "rtl" } }}
                />

                {/* contact area start */}
                <ContactArea />
                {/* contact area end */}

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

export default ContactPage;
