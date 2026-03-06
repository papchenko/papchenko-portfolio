import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!recaptchaValue) {
      setError("Please confirm that you are not a robot!");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_hllb7p1",
        "template_gdn6fcv",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "v13Oo-YtABqCO9JLF"
      );

      toast.success("Message sent! I will get in touch shortly.");
      setFormData({ name: "", email: "", message: "" });
      setRecaptchaValue(null);
    } catch (err) {
      console.error(err);
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-orange-500 text-2xl transition"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-2 text-white">Contact Me</h2>
        <p className="text-white/60 mb-6">Fill out the form and I will get back to you shortly.</p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 transition"
          />

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 transition resize-none"
          />

          <ReCAPTCHA
            sitekey="6Lch3X8sAAAAAL9PhEivUvThrZpwD9iHCprZgyUG"
            onChange={setRecaptchaValue}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-full font-semibold transition mt-2"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;