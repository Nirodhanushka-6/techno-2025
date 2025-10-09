import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // Update form values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx_EiEvv8Mj7J6jpECv37KDvsI9wv1YydQuIYrLW5YvRYLZ-mMlxWAYhJgGliQEixZ1/exec", // ✅ your Google Script URL
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setStatus("✅ Thank you for your feedback!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-400 via-gray-400 to-zinc-400 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-slate-950/20 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-950/30 rounded-full mix-blend-overlay blur-3xl"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 drop-shadow-lg mb-4 text-center">
        Share Your Feedback
      </h2>
      <p className="text-gray-800 mb-10 text-center max-w-xl">
        We value your thoughts! Let us know how we can improve or what you loved.
      </p>

      {/* Glass Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full  max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 flex flex-col gap-5"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-white/20 placeholder-gray-800 text-gray-950 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-950"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-white/20 placeholder-gray-800 text-gray-950 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-950"
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="bg-white/20 placeholder-gray-800 text-gray-950 border border-white/30 rounded-xl px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-slate-950"
          required
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-slate-500 via-slate-700 to-slate-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300"
        >
          {isSubmitting ? "Sending..." : "Submit Feedback"}
        </button>

        {status && (
          <p className="text-center text-white mt-3">{status}</p>
        )}
      </form>
    </section>
  );
}
