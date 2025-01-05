import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink, Code2 } from 'lucide-react';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Symbolic",
      description: "Symbolic is a high-level language and computational engine for symbolic reasoning across multiple domains.",
      tags: ["Programming Language", "Computational Engine", "Scientific Research"],
      icon: <Code2 className="mb-4" size={32} />,
      link: "https://elijahmanda.github.io/symbolic-docs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
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
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Elijah Manda
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono">
            Software Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.github.com/elijahmanda" className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800/50 transition-all duration-700">
        <div className="max-w-3xl mx-auto  translate-y-10">
          <h2 className="text-3xl font-bold mb-8 font-mono">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm Elijah Manda, a developer specializing in scientific software, research tools, mobile app development, web development, and game development.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 px-4 transition-all duration-700">
        <div className="max-w-3xl mx-auto  translate-y-10">
          <h2 className="text-3xl font-bold mb-8 font-mono">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Languages</h3>
              <p className="text-gray-300">Python • C • Java • JavaScript • C++</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
              <p className="text-gray-300">React • Node.js • Modern Web Stack</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-800/50 transition-all duration-700">
        <div className="max-w-7xl mx-auto  translate-y-10">
          <h2 className="text-3xl font-bold mb-12 font-mono">Key Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50"
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
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 transition-all duration-700">
        <div className="max-w-3xl mx-auto text-center  translate-y-10">
          <h2 className="text-3xl font-bold mb-8 font-mono">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Open to software development opportunities.
          </p>
          <a 
            href="mailto:contact@elijahmandajc@gmail.com" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2025 Elijah Manda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
