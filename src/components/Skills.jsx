import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Globe, Shield, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'cyber-blue',
      skills: ['Python', 'C', 'SQL', 'HTML/CSS', 'JavaScript'],
    },
    {
      title: 'Security Tools',
      icon: Shield,
      color: 'cyber-green',
      skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Hashcat', 'John the Ripper', 'FTK Imager', 'Volatility', 'SQLMap', 'Encase', 'Autopsy', 'Sleuthkit'],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'cyber-purple',
      skills: ['Visual Studio Code', 'MySQL', 'Git', 'GitHub', 'LaTeX'],
    }
  ];

  const expertise = [
    'Network Security',
    'Ethical Hacking',
    'Digital Forensics',
    'Vulnerability Assessment',
    'Penetration Testing',
    'Cryptography',
    'Secure Coding',
    'Incident Response'
  ];

  const certifications = [
    'Design and Analysis Training - Industrus Tech (Dec 2022)',
    'Asus Certified Professional: Hybrid Vehicles (Dec 2022)',
    'Cyber Security and Ethical Hacking - Techmagi (Nov 2023)',
    'Privacy and Security in Online Social Media - IIT Madras, NPTEL (Jan–Apr 2024)',
    'Introduction to Packet Tracer - Cisco Networking Academy (Nov 2024)',
    'IBM SkillsBuild Project-Based Learning (Front-End Web Dev) (Jul–Aug 2025)',
    'Ethical Hacker - Cisco Networking Academy (Oct 2025)'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      'cyber-blue': {
        text: 'text-cyber-blue',
        border: 'border-cyber-blue/30',
        bg: 'bg-cyber-blue/10',
        hover: 'hover:border-cyber-blue hover:bg-cyber-blue/20',
        glow: 'hover:shadow-cyber-blue/30',
      },
      'cyber-green': {
        text: 'text-cyber-green',
        border: 'border-cyber-green/30',
        bg: 'bg-cyber-green/10',
        hover: 'hover:border-cyber-green hover:bg-cyber-green/20',
        glow: 'hover:shadow-cyber-green/30',
      },
      'cyber-purple': {
        text: 'text-cyber-purple',
        border: 'border-cyber-purple/30',
        bg: 'bg-cyber-purple/10',
        hover: 'hover:border-cyber-purple hover:bg-cyber-purple/20',
        glow: 'hover:shadow-cyber-purple/30',
      },
      'cyber-pink': {
        text: 'text-cyber-pink',
        border: 'border-cyber-pink/30',
        bg: 'bg-cyber-pink/10',
        hover: 'hover:border-cyber-pink hover:bg-cyber-pink/20',
        glow: 'hover:shadow-cyber-pink/30',
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/30">
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building secure and innovative solutions
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-cyber-dark/50 backdrop-blur-sm border ${colorClasses.border} rounded-2xl p-6 ${colorClasses.hover} transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 ${colorClasses.bg} rounded-lg`}>
                      <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-4 py-2 ${colorClasses.bg} ${colorClasses.text} rounded-lg font-medium text-sm border ${colorClasses.border} ${colorClasses.hover} ${colorClasses.glow} transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expertise & Certifications */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Expertise */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100 text-center">
                Areas of <span className="text-gradient">Expertise</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-lg hover:border-cyber-green/40 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-cyber-green mr-3"></div>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100 text-center">
                Professional <span className="text-gradient">Certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ x: 5 }}
                    className="p-4 bg-cyber-dark/50 backdrop-blur-sm border border-cyber-purple/20 rounded-lg hover:border-cyber-purple/40 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cyber-purple mt-2"></div>
                      </div>
                      <p className="text-gray-200 ml-3">{cert}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
