"use client";

import React from "react";
import { useSubscribeNewsletter } from "@/hooks/useSubscribeNewsletter";
import { Toaster } from "react-hot-toast";

const NewsletterBanner = ({ style_2 = false }: { style_2?: boolean }) => {
  const { email, setEmail, handleSubmit, isLoading } = useSubscribeNewsletter();

  return (
    <div className="newsletter-banner">
      <Toaster position="top-center" />
      <div className="container">
        <div className={`main-wrapper ${style_2 ? "" : "top-border"} bottom-border`}>
          <div className="row">
            <div className="col-lg-6">
              <h2 className={`${style_2 ? "" : "text-dark"} fw-bold`}>
                Our Newsletter.
              </h2>
              <p className="text-lg md-pb-20">
                Get instant news by subscribing to our daily newsletter.
              </p>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="m-auto ms-lg-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <button className="rounded-circle tran3s" type="submit" disabled={isLoading}>
                    {isLoading ? <i className="bi bi-arrow-repeat"></i> : <i className="bi bi-arrow-right"></i>}
                  </button>
                </div>
                <p className="text-center text-lg-end m0 pt-5">
                  Already subscribed?{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;