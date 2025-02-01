import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000); // Simulated API call
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg text-white font-medium transition ${
              loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={16} />}
          </button>

          <button 
        onClick={() => navigate("/integration")}
        className="primary-btn w-full bg-green-600 hover:bg-green-700">
          Go back to Chatting
        </button>
        <button onClick={() => navigate("/")}
        className="primary-btn w-full bg-red-600 hover:bg-red-500">
          Log Out.
        </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-6 text-gray-600">
        <p className="flex items-center gap-2">
          <Mail size={16} className="text-blue-500" /> anirudhbhadauriya@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} className="text-blue-500" /> +91 8823070579
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={16} className="text-blue-500" /> Gwlior, (M.P.), India
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
