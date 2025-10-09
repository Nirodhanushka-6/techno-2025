import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

/**
 * Demo-only Contact component (NO BACKEND)
 *
 * - Always returns a successful submission.
 * - Simulates network delay.
 * - Clears the form and shows a success message.
 * - Saves mock submissions to localStorage (dev-only).
 *
 * Replace with a real endpoint or a Formspree/Web3Forms integration when ready.
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const mockSubmit = async (data) => {
    // simulate network latency
    await new Promise((r) => setTimeout(r, 700));

    // store a local mock copy (optional; dev convenience)
    try {
      const existing = JSON.parse(localStorage.getItem("mock_submissions") || "[]");
      existing.unshift({ ...data, timestamp: new Date().toISOString() });
      // keep only latest 500 entries to avoid overfilling storage
      localStorage.setItem("mock_submissions", JSON.stringify(existing.slice(0, 500)));
    } catch (e) {
      // ignore storage errors in restricted environments
    }

    // always succeed in demo mode
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      feedback: formData.feedback.trim(),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.feedback) {
      setStatus("⚠️ Please fill out all fields before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await mockSubmit(payload);

      if (result.ok) {
        setStatus("✅ Successfully submitted — thank you!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setStatus("⚠️ Submission failed in demo mode.");
      }
    } catch (err) {
      console.error("Demo submit error:", err);
      setStatus("❌ Unexpected error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-red-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-red-800 drop-shadow-sm mb-4 text-center"
      >
        Share Your Feedback
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-gray-700 mb-10 text-center max-w-xl"
      >
        We value your thoughts! Let us know how we can improve or what you loved most.
      </motion.p>

      {/* Glass Form */}
      <motion.form
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="w-full max-w-lg backdrop-blur-2xl bg-white/40 border border-white/50 rounded-2xl shadow-xl p-8 flex flex-col gap-5"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-white/70 placeholder-gray-500 text-gray-900 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-white/70 placeholder-gray-500 text-gray-900 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
          required
        />

        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="bg-white/70 placeholder-gray-500 text-gray-900 border border-gray-300 rounded-xl px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-700"
          required
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit Feedback"}
        </button>

        {status && (
          <p className="text-center text-gray-800 font-medium mt-3">{status}</p>
        )}
      </motion.form>
    </section>
  );
}
