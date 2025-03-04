"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState, useEffect } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    form: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        if (value.length > 100) return "Name must not exceed 100 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!isValidEmail(value)) return "Please enter a valid email";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 500) return "Message must not exceed 500 characters";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", userInput.name),
      email: validateField("email", userInput.email),
      message: validateField("message", userInput.message),
      form: "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 seconds timeout
        }
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
      setErrors({ name: "", email: "", message: "", form: "" });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        error.request ? "Network error occurred" : 
        "An unexpected error occurred";
      setErrors((prev) => ({ ...prev, form: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don&apos;t hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              name="name"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              value={userInput.name}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              name="email"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              value={userInput.email}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              name="message"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              rows="4"
              value={userInput.message}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.message && (
              <p className="text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col items-center gap-3">
            {errors.form && (
              <p className="text-sm text-red-400">{errors.form}</p>
            )}
            <button
              type="submit"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;