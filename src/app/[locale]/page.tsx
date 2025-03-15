import { Metadata } from "next";
// import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import HeroBanner from "@/components/hero-banner/banner";
import WhatWeDo from "@/components/our-services/what-we-do";
import Portfolio from "@/components/projects/portfolio";
import FooterFive from "@/layout/footer/footer-five";
import AboutUs from "@/components/about/about";
import PartnersLogosTwo from "@/components/partners/partners-logo-2";
import FeedbackFive from "@/components/feedback/feedback-five";
import BlogsHomeFive from "@/components/blogs/home-5-blogs";
import Services from "@/components/services/services";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "Arkantech | Home",
  description: "Arkantech Home Page",
  keywords: "Arkantech Home Page",
};

export default function HomePage() {
  return (
    <div className="main-page-wrapper">
      {/* header start */}
      <Header />
      {/* header end */}
      <main>
        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* partner logos start */}
        <PartnersLogosTwo />
        {/* partner logos end */}

        {/* What we do start */}
        <WhatWeDo />
        {/* What we do end */}

        {/* About us start */}
        <AboutUs style_2={true} />
        {/* About us end */}

        {/* Services start */}
        <Services />
        {/* Services end */}

        {/* portfolio start */}
        <Portfolio />
        {/* portfolio end */}

        {/* Testimonials start */}
        <FeedbackFive />
        {/* Testimonials end */}

        {/* Blogs start */}
        <BlogsHomeFive />
        {/* Blogs end */}

        {/* newsletter banner start */}
        <NewsletterBanner />
        {/* newsletter banner end */}

        {/* footer start */}
        <FooterFive />
        {/* footer end */}
      </main>
    </div>
  );
}
