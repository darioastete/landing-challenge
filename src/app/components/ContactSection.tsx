import Link from "next/link";
import { Github, Instagram, Mail, Phone, Twitter, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with us on social media or reach out directly
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg" role="listitem">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <address className="space-y-4 not-italic">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  <a href="mailto:carlosastetearana@gmail.com" className="hover:underline">
                    carlosastetearana@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  <a href="tel:+51955858525" className="hover:underline">
                    +51 955 858 525
                  </a>
                </div>
              </address>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-lg" role="listitem">
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <ul className="grid grid-cols-2 gap-4" role="list">
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label="Visit our Twitter"
                  >
                    <Twitter className="h-6 w-6 text-[#1DA1F2]" aria-hidden="true" />
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label="Visit our LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-[#0A66C2]" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label="Visit our GitHub"
                  >
                    <Github className="h-6 w-6 text-[#24292F]" aria-hidden="true" />
                    <span>GitHub</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label="Visit our Instagram"
                  >
                    <Instagram className="h-6 w-6 text-[#E4405F]" aria-hidden="true" />
                    <span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
