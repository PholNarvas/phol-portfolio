import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const SERVICE_ID = 'service_j6urfpa';
  const TEMPLATE_ID = 'template_y2sz05a';
  const PUBLIC_KEY = 'OMYA2rYAB8VX84eml';

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => alert('Oops! Something went wrong. Please try again.'));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20 "
    >
      <RevealOnScroll>
        <div className="px-4 w-90 sm:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent text-center">
            Let's Connect
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/*INPUT NAME*/}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-500 focus:bg-gray-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            {/*INPUT EMAIL*/}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-500 focus:bg-gray-500/5"
                placeholder="example@gmil.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/*INPUT EMAIL*/}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-500 focus:bg-gray-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] opacity-90"
            >
              Send Message
            </button>

            <div className="w-full">
              <a
                href="/jpnarvas-resume.pdf" // Replace with the actual path to your CV file
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 gap-2 w-full justify-center"
              >
                <FaDownload />
                Download CV
              </a>
            </div>

            <div className="text-3xl flex justify-center items-center gap-4 mt-4">
              <a
                href="https://github.com/PholNarvas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white hover:text-gray-500 transform hover:scale-125 transition-all duration-300"></i>{' '}
                {/* GitHub icon */}
              </a>

              <a
                href="https://www.facebook.com/johnphol123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-white hover:text-blue-600 transform hover:scale-125 transition-all duration-300"></i>{' '}
                {/* Facebook icon */}
              </a>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
