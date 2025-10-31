import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Shield, Lock, Search, Cpu, Code, Database, Key } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const academicProjects = [
    {
      title: 'Post-Quantum Threshold Signature System',
      icon: Key,
      description: 'Designed and implemented a quantum-resilient, multi-factor authentication system using Dilithium signatures, threshold cryptography, and BLE-based wearable device integration.',
      tools: ['Python', 'Cryptography Libraries', 'BLE'],
      focus: ['Post-quantum cryptography', 'Secure authentication'],
      githubLink: '#'
    },
    {
      title: 'Modified AES (AES + Blowfish) Steganography',
      icon: Lock,
      description: 'Developed a data-hiding application using combined AES and Blowfish encryption within multimedia files for enhanced confidentiality and integrity.',
      tools: ['Python', 'Steghide', 'Cryptography Libraries'],
      focus: ['Cryptography', 'Steganography', 'Information Security'],
      githubLink: '#'
    },
    {
      title: 'Airline Management System',
      icon: Database,
      description: 'Built a GUI-based airline booking and management system with Java Swing and MySQL for flight and customer operations.',
      tools: ['Java', 'Swing', 'MySQL'],
      focus: ['GUI Design', 'Database Management', 'Software Engineering'],
      githubLink: '#'
    },
    {
      title: 'Secure Code Scanner',
      icon: Code,
      description: 'Created a static code analysis tool to identify vulnerabilities like hardcoded credentials and unsafe system calls.',
      tools: ['Python', 'Regex', 'JSON'],
      focus: ['Secure coding', 'Vulnerability detection', 'Automation'],
      githubLink: '#'
    }
  ];

  const researchHighlights = [
    {
      icon: Cpu,
      title: 'Cybersecurity Research',
      description: 'Conducted in-depth research on emerging cybersecurity threats and defense mechanisms',
    },
    {
      icon: Shield,
      title: 'Ethical Hacking Techniques',
      description: 'Practical experience with penetration testing and vulnerability assessment',
    },
    {
      icon: Lock,
      title: 'Digital Forensics',
      description: 'Hands-on experience with forensic tools and investigation techniques',
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Academic and research projects showcasing my skills in cybersecurity and software development
            </p>
          </motion.div>

          {/* Academic Projects */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
              Academic <span className="text-gradient">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl overflow-hidden hover:border-cyber-blue/40 transition-all duration-300 card-glow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-purple to-purple-600 flex items-center justify-center mr-4`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-100">{project.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-cyber-blue">Tools & Technologies:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs font-mono rounded-lg">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-cyber-green">Focus Areas:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.focus.map((area, i) => (
                          <span key={i} className="px-3 py-1 bg-cyber-green/10 text-cyber-green text-xs font-medium rounded-lg">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-dark/80 border border-cyber-blue/30 text-cyber-blue font-medium rounded-lg hover:bg-cyber-blue/10 transition-all"
                      >
                        <Github size={16} />
                        View on GitHub
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-100">
              Research & <span className="text-gradient">Experience</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {researchHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green/40 transition-all duration-300 card-glow-green"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyber-green/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-cyber-green" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
