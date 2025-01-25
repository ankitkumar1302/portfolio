import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#7127BA] mx-auto rounded-full mb-6" />
          <p className="text-[#FFFFFF]/70 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-8 border border-[#7127BA]/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:ankit_1302@outlook.com"
                className="flex items-center gap-4 text-[#FFFFFF]/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7127BA]/10 flex items-center justify-center group-hover:bg-[#7127BA]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span>ankit_1302@outlook.com</span>
              </a>

              <a
                href="https://github.com/ankitkumar1302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#FFFFFF]/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7127BA]/10 flex items-center justify-center group-hover:bg-[#7127BA]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span>github.com/ankitkumar1302</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ankit1302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#FFFFFF]/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7127BA]/10 flex items-center justify-center group-hover:bg-[#7127BA]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span>linkedin.com/in/ankit1302</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-8 border border-[#7127BA]/10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-[#1A0B2E] border border-[#7127BA]/20 text-white focus:outline-none focus:border-[#7127BA] transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-[#1A0B2E] border border-[#7127BA]/20 text-white focus:outline-none focus:border-[#7127BA] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded bg-[#1A0B2E] border border-[#7127BA]/20 text-white focus:outline-none focus:border-[#7127BA] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7127BA] text-white py-2 px-6 rounded hover:bg-[#7127BA]/80 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
