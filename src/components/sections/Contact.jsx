import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Error - Try Again" : "Send Message"}
              </button>
            </form>

            <div className="space-y-6">
              <div className="border border-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="space-y-3 text-sm">
                  <a href="mailto:krshubham21102005@gmail.com" className="block text-zinc-400 hover:text-blue-500 transition-colors">
                    krshubham21102005@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/krshubham21" target="_blank" rel="noopener noreferrer" className="block text-zinc-400 hover:text-blue-500 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Shubham21102005" target="_blank" rel="noopener noreferrer" className="block text-zinc-400 hover:text-blue-500 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-semibold">Available for Work</span>
                </div>
                <p className="text-sm text-zinc-400">Open to full-time opportunities and projects</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            © 2025 Shubham Kumar
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
