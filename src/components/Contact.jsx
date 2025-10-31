import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:mathewsomy46@gmail.com',
      color: 'text-cyber-blue',
      hoverColor: 'hover:bg-cyber-blue/10 hover:border-cyber-blue',
      label: 'mathewsomy46@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mathew-somy',
      color: 'text-cyber-green',
      hoverColor: 'hover:bg-cyber-green/10 hover:border-cyber-green',
      label: 'linkedin.com/in/mathew-somy',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/mathewsomy',
      color: 'text-cyber-purple',
      hoverColor: 'hover:bg-cyber-purple/10 hover:border-cyber-purple',
      label: 'github.com/mathewsomy',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's connect! Whether you have a project in mind or just want to chat about cybersecurity
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">

            {/* Social Links & Info */}
            <motion.div variants={itemVariants} className="space-y-6 w-full">
              <div className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-8 card-glow">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">
                  Connect with me
                </h3>
                <p className="text-gray-400 mb-8 text-center">
                  Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                {/* Social Links */}
                <div className="space-y-6 max-w-md mx-auto">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, x: 5 }}
                      className={`flex items-center p-4 border rounded-xl transition-all duration-300 ${link.hoverColor} border-cyber-dark/30 bg-cyber-dark/50 backdrop-blur-sm`}
                    >
                      <div className={`w-14 h-14 rounded-xl ${link.color} bg-opacity-10 flex items-center justify-center mr-4`}>
                        <link.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-gray-100 font-semibold text-lg">{link.name}</h4>
                        <p className="text-gray-400">{link.label}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-cyber-blue/10 to-cyber-green/10 border border-cyber-blue/20 rounded-2xl p-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-cyber-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-1">Location</h4>
                    <p className="text-gray-400">Available for remote opportunities</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently focused on cybersecurity research and innovative security solutions.
                  Open to collaboration on cutting-edge projects.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
