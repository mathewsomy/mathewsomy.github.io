import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mathewsomy', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mathew-somy', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mathewsomy46@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-cyber-dark/80 backdrop-blur-md border-t border-cyber-blue/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyber-blue" />
              <span className="text-2xl font-bold font-mono">
                <span className="text-cyber-blue">MS</span>
                <span className="text-gray-300">.dev</span>
              </span>
            </div>
            <p className="text-gray-400">
              Cybersecurity Engineer dedicated to building secure and innovative solutions for the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg hover:bg-cyber-blue/20 hover:border-cyber-blue transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-cyber-blue" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-blue/20 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Mathew Somy. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-cyber-pink fill-cyber-pink" /> using React & Tailwind CSS
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Secured with modern encryption • Cybersecurity best practices applied
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
