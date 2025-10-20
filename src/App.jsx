import { useState, useEffect } from "react";
import { Menu, X, Github, Mail, ExternalLink, ArrowUpRight, Code, Database, Zap, Globe, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-black absolute top-0 left-0"
          />
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-gray-600 font-light tracking-widest"
          >
            LOADING
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      name: "Symbolic",
      status: "private",
      year: "2024",
      role: "Creator",
      description: "A high-level interpreted programming language engineered for mathematical expressiveness and symbolic computation. Features a multi-tiered execution engine (AST, bytecode, JIT) that seamlessly transitions from rapid prototyping to performance-optimized native code. Pluggable domain architecture enables specialized extensions for mathematics, physics, finance, and other computational domains.",
      tags: ["Language Design", "Symbolic Computing", "Performance Optimization"],
      technologies: ["Python", "C++", "Cython"],
      link: "https://elijahmanda.github.io/symbolic-docs",
      repo: "docs",
    },
    {
      name: "Sensor Dash",
      status: "private",
      year: "2024",
      role: "Developer",
      description: "High-performance desktop application for real-time sensor data acquisition, analysis, and visualization. Engineered for scientific research, industrial monitoring, and IoT applications with multi-protocol sensor support (Serial, USB, Ethernet, Bluetooth), sub-millisecond precision real-time visualization, and advanced signal processing (FFT, filtering, anomaly detection).",
      tags: ["Signal Processing", "Real-time Systems", "Data Visualization"],
      technologies: ["Python", "NumPy", "Scientific Computing"],
      link: "https://github.com/elijahmanda/Sensor-Dash",
      repo: "request",
    },
    {
      name: "Pakashop",
      status: "private",
      year: "2023",
      role: "Creator",
      description: "Comprehensive e-commerce platform designed to streamline the process of building, deploying, and managing digital storefronts. Provides developers and shop owners with a flexible, scalable foundation for selling products and services online with integrated payment processing, inventory management, and admin dashboard.",
      tags: ["E-commerce", "Full Stack", "Web Application"],
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://github.com/elijahmanda/ecommerce-app",
      repo: "request",
    },
    {
      name: "NLP Entity Extraction",
      status: "public",
      year: "2023",
      role: "Creator",
      description: "Multi-parser entity extraction NLP library providing comprehensive tools for text processing. Enables users to define custom entity parsers, tokenize text using regex patterns, and build sophisticated pipelines for extracting structured entities. Ideal for parsing emails, IP addresses, numbers, and domain-specific patterns.",
      tags: ["Natural Language Processing", "Text Analysis", "Entity Recognition"],
      technologies: ["Python", "Regex", "Tokenization"],
      link: "https://github.com/elijahmanda/NLP",
      repo: "public",
    },
  ];

  const skills = {
    backend: {
      title: "Backend & Systems",
      items: ["Node.js", "Express", "Python", "C", "C++", "Java", "API Design", "Database Design"],
      icon: Database,
    },
    frontend: {
      title: "Frontend & Web",
      items: ["React", "Tailwind CSS", "Responsive Design", "JavaScript", "Web Performance", "UI/UX"],
      icon: Globe,
    },
    data: {
      title: "Data & Scientific",
      items: ["NumPy", "Pandas", "Cython", "Signal Processing", "Data Analysis", "Scientific Computing"],
      icon: Zap,
    },
    tools: {
      title: "Tools & DevOps",
      items: ["Git", "RESTful APIs", "Linux", "Problem Solving", "System Design", "Performance Optimization"],
      icon: Code,
    },
  };

  const socials = [
    { name: "GitHub", url: "https://github.com/elijahmanda", icon: Github },
    { name: "LinkedIn", url: "https://zm.linkedin.com/in/elijah-manda-9544b5380", icon: null },
    { name: "Email", url: "mailto:elijahmandajc@gmail.com", icon: Mail },
  ];

  const navItems = ["Work", "Skills", "About", "Contact"];

  return (
    <div className="min-h-screen bg-white text-black">
      <LoadingScreen isLoading={isLoading} />

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-40 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-bold tracking-tight"
            >
              EM
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item, i) => {
                const sectionId = item === "Work" ? "work" : item === "Skills" ? "skills" : item === "About" ? "about" : "contact";
                return (
                  <motion.a
                    key={i}
                    href={`#${sectionId}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-sm font-light tracking-wide hover:text-gray-600 transition-colors relative group"
                  >
                    {item}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-black/5"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-light tracking-wide hover:text-gray-600 w-full text-left"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
                Elijah Manda
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-600 mt-4">
                Software Developer & Language Designer
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl font-light">
              I engineer computational systems and programming languages for scientific research, data analysis, and digital commerce. Focused on building performant, scalable solutions that bridge mathematics and software.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <motion.a
                href="#work"
                whileHover={{ x: 4 }}
                className="text-sm font-medium tracking-wide flex items-center gap-2 group"
              >
                View work
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              <div className="flex items-center gap-6">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-gray-600 hover:text-black transition-colors text-xs font-light tracking-wide"
                    title={social.name}
                  >
                    {social.icon ? <social.icon size={18} /> : social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 lg:px-8 bg-gray-50 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light tracking-tight mb-16"
          >
            Projects
          </motion.h2>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white border border-black/5 hover:border-black/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-gray-500 font-light tracking-wide">{project.year}</p>
                      <div className="flex items-center gap-2">
                        {project.status === "public" ? (
                          <span className="text-xs px-2 py-1 bg-green-50 text-green-700 font-light tracking-wide rounded">
                            Public
                          </span>
                        ) : project.repo === "docs" ? (
                          <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 font-light tracking-wide rounded flex items-center gap-1">
                            <Lock size={12} />
                            Docs Open Source
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 font-light tracking-wide rounded flex items-center gap-1">
                            <Lock size={12} />
                            {project.repo === "request" ? "Access on request" : "Private"}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-3xl font-light tracking-tight">{project.name}</h3>
                    <p className="text-sm text-gray-600 font-light">{project.role}</p>
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 group-hover:text-black transition-colors flex-shrink-0"
                    whileHover={{ x: 4, y: -4 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium tracking-widest text-gray-500 mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 font-light tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-widest text-gray-500 mb-2">FOCUS AREAS</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-gray-50 text-gray-600 font-light">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 lg:px-8 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light tracking-tight mb-16"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([key, skill], i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-black/5 hover:border-black/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-gray-400" />
                    <h3 className="text-lg font-light tracking-tight">{skill.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {skill.items.join(" • ")}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-gray-50 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light tracking-tight mb-16"
          >
            About
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 leading-relaxed font-light"
            >
              <p>
                I specialize in engineering computational systems and domain-specific languages. My work spans from low-level performance optimization to high-level mathematical abstractions, with a focus on building tools that serve research and production environments.
              </p>
              <p>
                Currently exploring symbolic computation systems, scientific software architecture, and the intersection of programming language design with practical applications in data science and financial modeling.
              </p>
              <p>
                Based in Chipata, Eastern Province, Zambia. Open to collaborations on research projects, open-source contributions, and opportunities to build scalable technical solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-6 border border-black/5">
                <h4 className="text-sm font-medium tracking-widest mb-3 text-gray-700">EXPERTISE AREAS</h4>
                <ul className="text-gray-600 font-light space-y-2 text-sm">
                  <li>• Programming Language Design & Implementation</li>
                  <li>• Scientific Computing & Symbolic Reasoning</li>
                  <li>• Full-Stack Web Application Development</li>
                  <li>• Real-time Data Processing & Visualization</li>
                  <li>• API Design & Database Architecture</li>
                </ul>
              </div>

              <div className="p-6 border border-black/5">
                <h4 className="text-sm font-medium tracking-widest mb-3 text-gray-700">CURRENT FOCUS</h4>
                <p className="text-gray-600 font-light text-sm">
                  Developing performant computational engines and exploring formal methods in software engineering.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-8"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 font-light mb-12 text-lg"
          >
            Interested in discussing projects, research, or opportunities? I'm available for consulting, collabora             }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 transform perspective-1000"
                >
                  <div className="text-blue-400">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-sm bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ParallaxSection>
      {/* Projects End */}

    {/* Contact Start */}
    <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-mono">
            <TextScramble text="Get In Touch" />
          </h2>
          <p className="text-gray-300 mb-8">
            Open to software development opportunities</p>
        </div>
      </motion.section>
      {/* Contact End */}

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2025 Elijah Manda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
