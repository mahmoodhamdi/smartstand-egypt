"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate form submission - in production, replace with actual API endpoint
      // Example: await fetch("https://formspree.io/f/YOUR_FORM_ID", { ... })
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For now, we'll open the email client as a fallback
      const mailtoLink = `mailto:info@smartstand-eg.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

      // Set success status
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Open email client
      window.location.href = mailtoLink;

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or email us directly at info@smartstand-eg.com"
      );

      // Reset error after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black rounded-card p-5 sm:p-6 lg:p-8 w-full max-w-[295px]"
    >
      <div className="space-y-5 sm:space-y-6">
        <Input
          label="Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "submitting"}
          autoComplete="name"
        />

        <Input
          label="Email:"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "submitting"}
          autoComplete="email"
        />

        <Textarea
          label="Message:"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "submitting"}
        />

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm text-center p-2 bg-green-400/10 rounded-lg"
          >
            Message sent successfully! We&apos;ll get back to you soon.
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm text-center p-2 bg-red-400/10 rounded-lg"
          >
            {errorMessage}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
          whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
          className={cn(
            "w-full gold-gradient text-white font-bold py-3 rounded-button mt-4",
            "min-h-[48px] transition-all duration-300",
            status === "submitting" && "opacity-70 cursor-not-allowed"
          )}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </div>
    </form>
  );
};
