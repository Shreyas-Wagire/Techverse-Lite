import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Github, Linkedin, MapPin, Phone, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/techverse', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/techverse', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Visit TechVerse', href: 'https://techverse-club.vercel.app/' },
    { name: 'Join WhatsApp', href: 'https://chat.whatsapp.com/IIi5w2Agj2OHGcFNNcclM2?mode=ac_t' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">TechVerse</span>
            </motion.div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Empowering students to innovate, code, and collaborate. Join our community of 
              tech enthusiasts and transform your ideas into reality.
            </p>
            
            {/* CTA Button */}
            <motion.button
                onClick={() => window.open('https://techverse-club.vercel.app/', '_blank')}
                className="group w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Users className="h-5 w-5" />
                Visit TechVerse
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <a 
                  href="mailto:contact@techverse.edu" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base"
                >
                  contact@techverse.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-600 text-base">+91 123-456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-gray-600 text-base">
                  CSE Dept, ADCET, Ashta 416301
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center sm:text-left mb-4 sm:mb-0">
              © 2024 TechVerse. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center sm:text-right">
              Made with ❤️ for the tech community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;