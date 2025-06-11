import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      // Replace this with your backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Try again later.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      <div className="w-full">
        <label
          htmlFor="name"
          className="mb-2 block text-[13px] font-normal text-[#797979] capitalize"
        >
          Name*
        </label>
        <div className="relative w-full overflow-hidden border border-[#e5e7eb]">
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="input-field text-dark-gray h-[50px] w-full bg-white px-6 text-sm font-normal placeholder:text-sm focus:ring-0 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="email"
          className="mb-2 block text-[13px] font-normal text-[#797979] capitalize"
        >
          Email Address*
        </label>
        <div className="relative w-full overflow-hidden border border-[#e5e7eb]">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="text-dark-gray h-[50px] w-full bg-white px-6 text-sm font-normal placeholder:text-sm focus:ring-0 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="subject"
          className="mb-2 block text-[13px] font-normal text-[#797979] capitalize"
        >
          Subject*
        </label>
        <div className="relative w-full overflow-hidden border border-[#e5e7eb]">
          <input
            id="subject"
            type="text"
            placeholder="Your Subject here"
            className="text-dark-gray h-[50px] w-full bg-white px-6 text-sm font-normal placeholder:text-sm focus:ring-0 focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="message"
          className="mb-2 block text-[13px] font-normal text-[#797979] capitalize"
        >
          Message*
        </label>
        <textarea
          id="message"
          placeholder="Type your message here"
          className="h-[105px] w-full border border-[#e5e7eb] p-3 text-sm placeholder:text-sm focus:ring-0 focus:outline-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {submitted && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-[50px] w-full items-center justify-center bg-[#222222] text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          <span>{isSubmitting ? "Sending..." : "Send Now"}</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
