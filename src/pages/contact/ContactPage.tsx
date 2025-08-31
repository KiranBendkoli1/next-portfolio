"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Bird = dynamic(() => import("@/components/Scene1"));

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("access_key", "5c1e07c0-1ccc-45e5-ad4f-cf91788ad2d7");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if ((data as any).success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">

      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-16 mt-12">
          <h1 className="text-5xl font-semibold text-white mb-4">Contact Me</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
          <div className="max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/60 shadow-2xl  backdrop-blur-md border-white/10 rounded-lg px-8 pt-6 pb-8 mb-4 border"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-semibold mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-semibold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 resize-none"
                  placeholder="Message"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-lg shadow-lg transition-transform duration-200 ${isSubmitting
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "gradient-btn"
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <p className="text-sm text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-700 rounded-lg">
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
          <div className="w-full h-screen">
            {/* <Bird /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
