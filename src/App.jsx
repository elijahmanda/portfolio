import { useState, useEffect } from "react";
import { Menu, X, Github, Mail, ExternalLink, ArrowUpRight, Code, Database, Zap, Globe, Lock, MapPin, Clock } from "lucide-react";
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
      name: "Palazzo San Lorenzo",
      tagline: "Where Medieval Luxury Meets Modern Comfort",
      status: "public",
      year: "2025",
      role: "Web Designer & Developer",
      description: "Complete WordPress site redesign for a luxury 5-star accommodation in Bergamo Alta. Modern, elegant landing page showcasing a historic palazzo with immersive imagery and intuitive booking flow. Features responsive design, optimized performance, and professional hospitality branding.",
      tags: ["Web Design", "UX/UI", "WordPress", "Hospitality"],
      technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
      link: "https://sanlorenzobnb.great-site.net/?i=1",
      repo: "public",
      image: "🏛️",
    },
    {
      name: "Symbolic",
      tagline: "Mathematical Programming Language",
      status: "private",
      year: "2024",
      role: "Creator",
      description: "A high-level interpreted programming language engineered for mathematical expressiveness and symbolic computation. Features a multi-tiered execution engine (AST, bytecode, JIT) that seamlessly transitions from rapid prototyping to performance-optimized native code. Pluggable domain architecture enables specialized extensions for mathematics, physics, finance, and other computational domains.",
      tags: ["Language Design", "Symbolic Computing", "Performance Optimization"],
      technologies: ["Python", "C++", "Cython"],
      link: "https://elijahmanda.github.io/symbolic-docs",
      repo: "docs",
      image: "∑",
    },
    {
      name: "Sensor Dash",
      tagline: "Real-time Data Acquisition & Analysis",
      status: "private",
      year: "2024",
      role: "Developer",
      description: "High-performance desktop application for real-time sensor data acquisition, analysis, and visualization. Engineered for scientific research, industrial monitoring, and IoT applications with multi-protocol sensor support (Serial, USB, Ethernet, Bluetooth), sub-millisecond precision real-time visualization, and advanced signal processing (FFT, filtering, anomaly detection).",
      tags: ["Signal Processing", "Real-time Systems", "Data Visualization"],
      technologies: ["Python", "NumPy", "Scientific Computing"],
      link: "https://github.com/elijahmanda/Sensor-Dash",
      repo: "request",
      image: "📊",
    },
    {
      name: "Pakashop",
      tagline: "E-commerce Platform",
      status: "private",
      year: "2023",
      role: "Creator",
      description: "Comprehensive e-commerce platform designed to streamline the process of building, deploying, and managing digital storefronts. Provides developers and shop owners with a flexible, scalable foundation for selling products and services online with integrated payment processing, inventory management, and admin dashboard.",
      tags: ["E-commerce", "Full Stack", "Web Application"],
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://github.com/elijahmanda/ecommerce-app",
      repo: "request",
      image: "🛍️",
    },
    {
      name: "NLP Entity Extraction",
      tagline: "Text Analysis & Entity Recognition",
      status: "public",
      year: "2023",
      role: "Creator",
      description: "Multi-parser entity extraction NLP library providing comprehensive tools for text processing. Enables users to define custom entity parsers, tokenize text using regex patterns, and build sophisticated pipelines for extracting structured entities. Ideal for parsing emails, IP addresses, numbers, and domain-specific patterns.",
      tags: ["Natural Language Processing", "Text Analysis", "Entity Recognition"],
      technologies: ["Python", "Regex", "Tokenization"],
      link: "https://github.com/elijahmanda/NLP",
      repo: "public",
      image: "📝",
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
      items: ["React", "Tailwind CSS", "Responsive Design", "JavaScript", "Web Performance", "WordPress"],
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
                {navItems.map((item) => {
                  const sectionId = item === "Work" ? "work" : item === "Skills" ? "skills" : item === "About" ? "about" : "contact";
                  return (
                    <a
                      key={item}
                      href={`#${sectionId}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-light tracking-wide hover:text-gray-600 w-full text-left"
                    >
                      {item}
                    </a>
                  );
                })}
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
            {/* Profile Info */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
              <motion.img
                src="https://raw.githubusercontent.com/elijahmanda/portfolio/refs/heads/main/src/assets/profile.png"
                alt="Elijah Manda"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-32 h-32 rounded-lg object-cover flex-shrink-0 border border-black/10 shadow-sm"
              />

              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
                  Elijah Manda
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-600 mb-4">
                  Software Developer & Language Designer
                </p>

                <div className="flex flex-col gap-2 text-sm text-gray-600 font-light">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>Chipata, Eastern Province, Zambia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="flex-shrink-0" />
                    <span>CAT (UTC+2)</span>
                  </div>
                </div>
              </div>
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

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group block bg-white border border-black/5 hover:border-black/15 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image/Icon */}
                  <div className="w-full md:w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-shrink-0 border-b md:border-b-0 md:border-r border-black/5">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <p className="text-xs text-gray-500 font-light tracking-widest uppercase">{project.year}</p>
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
                          <h3 className="text-2xl font-light tracking-tight mb-1">{project.name}</h3>
                          <p className="text-sm text-gray-600 font-light italic mb-3">{project.tagline}</p>
                        </div>
                        <motion.div
                          className="text-gray-300 group-hover:text-black transition-colors flex-shrink-0 hidden md:block"
                          whileHover={{ x: 2, y: -2 }}
                        >
                          <ExternalLink size={20} />
                        </motion.div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6 font-light text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3 border-t border-black/5 pt-6">
                      <div>
                        <p className="text-xs font-medium tracking-widest text-gray-500 mb-2">TECHNOLOGIES</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 font-light tracking-wide rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium tracking-widest text-gray-500 mb-2">FOCUS</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 font-light">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
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
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="p-6 border border-black/5 hover:border-black/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-gray-400" />
                    <h3 className="text-lg font-light tracking-tight">{skill.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm">
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
            Interested in discussing projects, research, or opportunities? I'm available for consulting, collaborations, and technical conversations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <motion.a
              href="mailto:elijahmandajc@gmail.com"
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-lg font-medium tracking-wide group"
            >
              elijahmandajc@gmail.com
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>

            <div className="hidden sm:block w-px h-6 bg-gray-300" />

            <motion.a
              href="https://zm.linkedin.com/in/elijah-manda-9544b5380"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-lg font-medium tracking-wide group"
            >
              LinkedIn
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-black/5 text-center text-sm text-gray-500 font-light tracking-wide">
        <p>© 2025 Elijah Manda. All rights reserved.</p>
      </footer>
    </div>
  );
}
