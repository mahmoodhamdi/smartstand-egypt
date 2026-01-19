"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Button } from "./Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black rounded-card p-6 md:p-8 w-full max-w-[295px]">
      <div className="space-y-6">
        <Input
          label="Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          label="Email:"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Message:"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button variant="gold" size="md" type="submit" className="w-full">
          Send Messages
        </Button>
      </div>
    </form>
  );
};
