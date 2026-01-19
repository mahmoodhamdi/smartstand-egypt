"use client";

import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2, Check, AlertCircle, Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export const ContactForm: React.FC = () => {
  const uniqueId = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "bg-gradient-to-b from-black/90 to-black/70",
        "backdrop-blur-md border border-white/10",
        "rounded-[24px] sm:rounded-[30px]",
        "p-6 sm:p-8 lg:p-10",
        "w-full shadow-2xl"
      )}
    >
      <div className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label
            htmlFor={`${uniqueId}-name`}
            className="block text-white font-bold text-base sm:text-lg"
          >
            Name:
          </label>
          <input
            id={`${uniqueId}-name`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={cn(
              "w-full bg-white/5 text-white text-base",
              "border-b-2 border-white/30 rounded-t-lg",
              "px-4 py-3",
              "outline-none focus:border-[#FBDD97] focus:bg-white/10",
              "transition-all duration-300",
              "placeholder:text-white/40"
            )}
            required
            disabled={status === "loading"}
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor={`${uniqueId}-email`}
            className="block text-white font-bold text-base sm:text-lg"
          >
            Email:
          </label>
          <input
            id={`${uniqueId}-email`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={cn(
              "w-full bg-white/5 text-white text-base",
              "border-b-2 border-white/30 rounded-t-lg",
              "px-4 py-3",
              "outline-none focus:border-[#FBDD97] focus:bg-white/10",
              "transition-all duration-300",
              "placeholder:text-white/40"
            )}
            required
            disabled={status === "loading"}
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label
            htmlFor={`${uniqueId}-message`}
            className="block text-white font-bold text-base sm:text-lg"
          >
            Message:
          </label>
          <textarea
            id={`${uniqueId}-message`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={4}
            className={cn(
              "w-full bg-white/5 text-white text-base",
              "border-b-2 border-white/30 rounded-t-lg",
              "px-4 py-3",
              "outline-none focus:border-[#FBDD97] focus:bg-white/10",
              "transition-all duration-300 resize-none",
              "placeholder:text-white/40"
            )}
            required
            disabled={status === "loading"}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "loading" || status === "success"}
          whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
          whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
          className={cn(
            "w-full font-bold py-4 rounded-[25px] mt-4",
            "min-h-[56px]",
            "flex items-center justify-center gap-2",
            "transition-all duration-300 shadow-lg",
            status === "success" && "bg-green-500 text-white",
            status === "error" && "bg-red-500 text-white",
            status === "idle" && "gold-gradient text-white hover:shadow-xl",
            status === "loading" && "gold-gradient text-white opacity-80",
            (status === "loading" || status === "success") && "cursor-not-allowed"
          )}
        >
          {status === "loading" && (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          )}
          {status === "success" && (
            <>
              <Check className="w-5 h-5" />
              <span>Message Sent!</span>
            </>
          )}
          {status === "error" && (
            <>
              <AlertCircle className="w-5 h-5" />
              <span>Try Again</span>
            </>
          )}
          {status === "idle" && (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};
