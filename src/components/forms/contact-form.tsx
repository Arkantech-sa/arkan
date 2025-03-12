"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContactForm, useServices } from "@/hooks/useContact";
import { toast } from "react-hot-toast";
import ErrorMsg from "../common/error-msg";

// Define Form Data Type
type FormData = {
  name: string;
  email: string;
  phone: string;
  service_id: string;
  message: string;
};

// Yup Schema Validation
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  service_id: yup.string().required("Service Type is required"),
  message: yup.string().required("Message must be at least 10 characters").min(10),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { mutateAsync: sendMessage, isPending: isSending } = useContactForm();
  const { data: services, isLoading: servicesLoading } = useServices();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await toast.promise(
        sendMessage({ ...data, service_id: data.service_id.toString() }),
        {
          loading: "Sending your message...",
          success: (res) => res?.msg || "Message sent successfully!",
          error: (err) =>
            err?.response?.data?.message || "Failed to send message. Please try again.",
        }
      );
      if (response?.status === 200) {
        reset(); // Reset form only on success
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="row controls">
        {/* Name Field */}
        <div className="col-lg-6 col-md-6">
          <div className="input-group-meta form-group mb-30">
            <input type="text" placeholder="Your Name*" {...register("name")} />
            <ErrorMsg msg={errors.name?.message} />
          </div>
        </div>

        {/* Phone Field */}
        <div className="col-lg-6 col-md-6">
          <div className="input-group-meta form-group mb-30">
            <input type="text" placeholder="Your Phone*" {...register("phone")} />
            <ErrorMsg msg={errors.phone?.message} />
          </div>
        </div>

        {/* Email Field */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <input type="email" placeholder="Email Address*" {...register("email")} />
            <ErrorMsg msg={errors.email?.message} />
          </div>
        </div>

        {/* Service Type Field (Dropdown) */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <select {...register("service_id")} className="form-select" disabled={servicesLoading}>
              <option value="">Select a Service*</option>
              {services?.map(({ id, title }: { id: string; title: string }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
            </select>
            <ErrorMsg msg={errors.service_id?.message} />
          </div>
        </div>

        {/* Message Field */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <textarea placeholder="Your message*" {...register("message")} />
            <ErrorMsg msg={errors.message?.message} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn-four tran3s w-100 d-block" disabled={isSending || servicesLoading}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
