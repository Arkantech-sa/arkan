import React from "react";
import { Metadata } from "next";
import Header from "@/layout/header/header";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterFive from "@/layout/footer/footer-five";
import ProjectDetailsArea from "@/components/project-details/project-details";

export const metadata: Metadata = {
    title: "Arkan | Projects Details",
};

const ProjectDetails = () => {
    return (
        <div className="main-page-wrapper step-header">
            {/* header start */}
            <Header />
            {/* header end */}
            <main>

                {/* Services start */}
                <ProjectDetailsArea />
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

export default ProjectDetails;
