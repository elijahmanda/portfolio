import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Code2,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import profileImage from './assets/profile.png';


const TextScramble = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    let iteration = 0;
    const finalText = text;

    const update = () => {
      let output = "";
      for (let i = 0; i < finalText.length; i++) {
        if (i < iteration) {
          output += finalText[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayText(output);

      if (iteration < finalText.length) {
        iteration += 1 / 3;
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return <span>{displayText}</span>;
};

const ParallaxSection = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};



const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const projects = [
    {
      title: "Symbolic",
      description:
        "Symbolic is a high-level language and computational engine for symbolic reasoning across multiple domains.",

      tags: [
        "Programming Language",
        "Computational Engine",
        "Scientific Research",
      ],
      icon: <Code2 className="mb-4" size={32} />,
      link: "https://elijahmanda.github.io/symbolic-docs",
    },
  ];

  const experience = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
    
       {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold font-mono">EM</span>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About</a>
              <a href="#expertise" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Expertise</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Contact</a>
            </div>
          </div>
        )}
        </AnimatePresence>
      </nav>
      {/* Nav End */}
      
      {/* Hero  Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="my-12"
          >
            <img
              src={profileImage}
              alt="Elijah Manda"
              className="w-48 h-48 rounded-full mx-auto border-4 border-blue-400 shadow-lg"
            />
          </div>

          <h1 className="text-3xl font-bold mb-6 font-mono">
            <TextScramble text="Elijah Manda" />
          </h1>

          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Briefcase size={16} />
              <span>Software developer</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span>Chipata, Eastern Province, Zambia</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={16} />
              <span>elijahmandajc@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {[
              {
                icon: <Github size={24} />,
                link: "https://www.github.com/elijahmanda",
              },
              {
                icon: <Twitter size={24} />,
                link: "https:/www.x.com/@ElijahMandajc"
              },
              {
                icon: <Facebook size={24} />,
                link: "https://www.facebook.com/share/1CjewfRxS1/?mibextid=qi2Omg"
              },
              {
                icon: <Instagram size={24} />,
                link: "https://www.instagram.com/elijahmanda.jc?igsh=bnJ6bGVyam5hbXE5"
              },
              /* No account yet */
              /* { icon: <Linkedin size={24} />, link: "#" }, */
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ scale: 1.2 }}
                className="p-2 hover:text-blue-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      
      {/* About Me Start */}
      <ParallaxSection>
        <motion.section id="about" className="py-16 px-4 bg-gray-800/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-mono">
              <TextScramble text="About Me" />
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I specialize in scientific
              software, research tools, mobile app development, web development,
              and game development.
            </p>
          </div>
        </motion.section>
      </ParallaxSection>
      {/* About Me End */}
      
      {/* Expertise Start */}
      <ParallaxSection>
        <motion.section id="expertise" className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-mono">
              <TextScramble text="Technical Expertise" />
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Core Languages</h3>
                <p className="text-gray-300">
                  Python • C • Java • JavaScript • C++
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
                <p className="text-gray-300">
                  React • Node.js • Express
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </ParallaxSection>
      {/* Expertise End */}
      
      {/* Experience Start */}
      <ParallaxSection>
        <motion.section id="experience" className="py-16 px-4 bg-gray-800/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-mono">
              <TextScramble text="Work Experience" />
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800/30 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-400">
                    {exp.role}
                  </h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{exp.company}</span>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ParallaxSection>
      {/* Experience End */}
      
      {/* Projects Start */}
      <ParallaxSection>
        <motion.section 
          id="projects"
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 font-mono">
              <TextScramble text="Key Projects" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ rotateY: 45, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                  }}
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
