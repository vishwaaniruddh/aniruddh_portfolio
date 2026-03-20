"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SOCIALS } from "@/constants";
import Link from "next/link";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-10 md:px-20 py-20 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 text-center"
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-purple-500 text-xl mt-1">👤</div>
                  <div>
                    <p className="text-gray-400 text-sm">Name</p>
                    <p className="text-white text-lg">Aniruddh Vishwakarma</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-purple-500 text-xl mt-1">📧</div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:vishwaaniruddh@gmail.com"
                      className="text-cyan-400 text-lg hover:text-cyan-300 transition"
                    >
                      vishwaaniruddh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-purple-500 text-xl mt-1">📱</div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a 
                      href="tel:+917021889883"
                      className="text-cyan-400 text-lg hover:text-cyan-300 transition"
                    >
                      +91 7021889883
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-[#7042f861]">
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {SOCIALS.map(({ link, name, icon: Icon }) => (
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      key={name}
                      className="text-white hover:text-purple-500 transition"
                      title={name}
                    >
                      <Icon className="h-7 w-7" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <p className="text-gray-300 mb-6 text-sm">
                Interested in working together or have a project in mind? Feel free to reach out via email or phone.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:vishwaaniruddh@gmail.com?subject=Project Inquiry"
                  className="block w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:opacity-90 transition font-semibold text-sm"
                >
                  Email Me
                </a>

                <a
                  href="tel:+917021889883"
                  className="block w-full py-3 px-6 border border-[#7042f861] text-white text-center rounded-lg hover:bg-[#7042f88b] transition font-semibold text-sm"
                >
                  Call Me
                </a>
              </div>

              <div className="mt-8 p-4 bg-[#030014] rounded-lg border border-[#7042f861]">
                <p className="text-xs text-gray-400 mb-2">Available for:</p>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Full-time opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Freelance projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Consulting & collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
