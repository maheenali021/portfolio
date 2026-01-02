"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Girl from "@/public/Gemini_Generated_Image_uxi31muxi31muxi3-removebg-preview.png";
import Linkedin from "@/public/Untitled_design__2_-removebg-preview.png";
import Discord from "@/public/Untitled_design__3_-removebg-preview.png";
import Github from "@/public/icons8-github-32.png";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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
    setError("");

    try {
      console.log("Submitting:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Server error: ${text.substring(0, 100)}`);
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send message");

      router.push("#thank-you");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to send";
      setError(errorMessage);
      console.error("Submission error:", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-10 lg:px-20 py-10">
      {/* Left Side: Image */}
      <div className="flex justify-center w-full lg:w-1/2">
        <Image
          src={Girl}
          alt="Girl illustration"
          width={831}
          className="w-[280px] sm:w-[500px] lg:w-[800px] object-contain"
        />
      </div>

      {/* Right Side: Text + Contact Form */}
      <div className="flex flex-col justify-center text-black w-full lg:w-1/2 max-w-[700px]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
          CONTACT
        </h1>
        <h6 className="text-sm sm:text-lg lg:text-2xl font-bold text-[#c492d7] text-center lg:text-left mt-2">
          If You Want To Hire Me?
        </h6>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="pt-8 sm:pt-10 flex flex-col gap-6 sm:gap-8"
        >
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-base sm:text-xl lg:text-2xl font-bold mb-2"
            >
              EMAIL:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[45px] sm:h-[50px] lg:h-[51px] bg-[#360a4e] rounded-sm text-white px-4 outline-none"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-base sm:text-xl lg:text-2xl font-bold mb-2"
            >
              SUBJECT:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full h-[45px] sm:h-[50px] lg:h-[51px] bg-[#360a4e] rounded-sm text-white px-4 outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-base sm:text-xl lg:text-2xl font-bold mb-2"
            >
              MESSAGE:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[120px] sm:h-[150px] bg-[#360a4e] rounded-sm text-white px-4 py-2 outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-[161px] sm:w-[180px] lg:w-[200px] h-[45px] sm:h-[50px] bg-[#360a4e] text-white text-base sm:text-lg lg:text-xl font-semibold rounded-md hover:bg-[#4c1571] transition-all duration-300 mx-auto lg:mx-0"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Error message */}
        {error && (
          <p className="mt-6 text-center text-lg font-semibold text-[#360a4e]">
            {error}
          </p>
        )}

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-center items-center gap-6 sm:gap-10 mt-10">
          <Link
            href="https://www.linkedin.com/in/maheen-ali-419805295/"
            target="_blank"
          >
            <Image src={Linkedin} alt="Linkedin icon" width={90} />
          </Link>

          <Link href="https://discord.com/channels/@me" target="_blank">
            <Image src={Discord} alt="Discord icon" width={90} />
          </Link>

          <Link href="https://github.com/maheenali021" target="_blank">
            <Image
              src={Github}
              alt="Github icon"
              width={50}
              className="mt-1 brightness-150"
            />
          </Link>

        </div>

      </div>

    </div>
  );
}
