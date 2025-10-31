import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Award, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const educationData = [
    {
      icon: GraduationCap,
      title: 'B.Tech in Cybersecurity',
      subtitle: 'St. Joseph\'s College of Engineering and Technology, Palai',
      description: 'Oct 2022 – May 2026 | CGPA: 5.75 (up to S6)',
    },
    {
      icon: BookOpen,
      title: 'Higher Secondary Education',
      subtitle: 'St. Peter\'s Higher Secondary School, Elanji',
      description: 'June 2020 – March 2022 | Percentage: 88%',
    },
    {
      icon: BookOpen,
      title: 'SSLC',
      subtitle: 'St. Paul\'s High School, Mutholapuram',
      description: 'June 2019 – March 2020 | Percentage: 100%',
    },
  ];

  const focusAreas = [
    { icon: Target, title: 'Network Security', color: 'text-cyber-blue' },
    { icon: Award, title: 'Ethical Hacking', color: 'text-cyber-green' },
    { icon: BookOpen, title: 'Digital Forensics', color: 'text-cyber-purple' },
    { icon: Target, title: 'Vulnerability Assessment', color: 'text-cyber-pink' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-8 mb-12 card-glow"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a disciplined and passionate <span className="text-cyber-blue font-semibold">Computer Science and Engineering (Cyber Security)</span> student specializing in network security, ethical hacking, and digital forensics. I'm adaptable, organized, and a collaborative team player with experience in event management.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My goal is to deliver secure, innovative, and impactful technology solutions that strengthen cyber defense. I'm particularly interested in <span className="text-cyber-green font-semibold">vulnerability assessment</span>, <span className="text-cyber-purple font-semibold">penetration testing</span>, and <span className="text-cyber-blue font-semibold">digital forensics</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not securing systems, you can find me participating in CTF competitions, contributing to open-source security tools, or mentoring aspiring cybersecurity enthusiasts.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 hover:border-cyber-blue/40 transition-all duration-300 card-glow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyber-blue/10 rounded-lg">
                    <item.icon className="w-8 h-8 text-cyber-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h3>
                    <p className="text-cyber-blue font-semibold mb-2">{item.subtitle}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Focus Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">
              Areas of <span className="text-gradient">Expertise</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 text-center hover:border-cyber-green/40 transition-all duration-300 card-glow-green"
                >
                  <area.icon className={`w-10 h-10 ${area.color} mx-auto mb-3`} />
                  <p className="text-gray-300 font-medium text-sm">{area.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
