"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // Simulate API call (replace with real backend later)
      await new Promise((res) => setTimeout(res, 1500));

      toast.success("Message sent successfully 🚀");

      e.target.reset();
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4/5 mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>

          <p className="text-gray-600 mb-6">
            Have questions, feedback, or need support? We’re here to help you
            anytime. Send us a message and we’ll get back to you soon.
          </p>

          <div className="space-y-3 text-gray-700 text-sm">
            <p>📧 support@skillsphere.com</p>
            <p>📞 +880 1234-567890</p>
            <p>📍 Dhaka, Bangladesh</p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            We usually respond within 24 hours.
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
