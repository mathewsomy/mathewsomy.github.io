import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Lock, Database } from 'lucide-react';

const Hero = () => {
  const [imgError, setImgError] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingIcons = [
    { Icon: Shield, delay: 0, position: 'top-20 left-10' },
    { Icon: Lock, delay: 0.5, position: 'top-40 right-20' },
    { Icon: Database, delay: 1, position: 'bottom-40 left-20' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-24 h-24 text-cyber-blue" />
          </motion.div>
        </motion.div>
      ))}

      {/* Corner photo for large screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden lg:block absolute top-20 left-8 z-0"
      >
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-green/20 blur-2xl"></div>
          <div className="relative p-[4px] rounded-full bg-gradient-to-br from-cyber-blue to-cyber-green">
            {imgError ? (
              <div className="w-40 h-40 rounded-full bg-cyber-dark/60 backdrop-blur-md flex items-center justify-center border border-cyber-blue/30">
                <span className="text-cyber-blue font-bold text-xl">MS</span>
              </div>
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Mathew Somy headshot"
                loading="eager"
                onError={() => setImgError(true)}
                className="w-40 h-40 rounded-full object-cover"
              />
            )}
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue font-mono text-sm mb-4">
              Cybersecurity Specialist & Ethical Hacker
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-gray-100">Hi, I'm </span>
            <span className="text-gradient cyber-glow">Mathew Somy</span>
          </h1>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-cyber-green">
              Protecting Digital Frontiers with Expertise and Passion
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-mono">
              Ethical Hacker | Digital Forensics | Network Security
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed"
          >
            I'm a passionate cybersecurity professional specializing in{' '}
            <span className="text-cyber-blue font-semibold">Network Security</span>,{' '}
            <span className="text-cyber-green font-semibold">Ethical Hacking</span>, and{' '}
            <span className="text-cyber-purple font-semibold">Digital Forensics</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-green text-cyber-darker font-semibold rounded-lg shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-10 flex justify-center lg:hidden"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-green/20 blur-2xl"></div>
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-cyber-blue to-cyber-green">
                {imgError ? (
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-cyber-dark/60 backdrop-blur-md flex items-center justify-center border border-cyber-blue/30">
                    <span className="text-cyber-blue font-bold text-2xl">MS</span>
                  </div>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Mathew Somy headshot"
                    loading="eager"
                    onError={() => setImgError(true)}
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block text-cyber-blue hover:text-cyber-green transition-colors"
            >
              <ChevronDown size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
