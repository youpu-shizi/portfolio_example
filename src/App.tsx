import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User, Terminal, Database, Palette } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 gradient-bg opacity-10"></div>
        
        <nav className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center backdrop-blur-sm bg-white/30">
          <div className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Terminal className="text-indigo-600" />
            <span className="text-glow">Youpu Dev</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>

        <div className={`relative z-10 max-w-5xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="animate-float mb-8">
            <img 
              src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&w=300&h=300&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto shadow-xl border-4 border-white"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Welcome, I'm <span className="text-indigo-600 text-glow">Youpu Dev</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with code, creativity, and passion
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-gray-600 hover:text-indigo-600 transition-colors hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 text-gray-600 hover:text-indigo-600 transition-colors hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="mailto:youpu.dev@example.com"
               className="p-3 text-gray-600 hover:text-indigo-600 transition-colors hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <ChevronDown size={24} className="text-gray-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Coding"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As a Full Stack Developer with a passion for creating innovative solutions, 
                I bring ideas to life through clean code and intuitive design. My expertise 
                spans across modern web technologies, with a focus on building scalable and 
                performant applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="card-hover bg-gray-50 p-4 rounded-lg">
                  <Code size={24} className="text-indigo-600 mb-2" />
                  <h3 className="font-semibold mb-2">Frontend Magic</h3>
                  <p className="text-sm text-gray-500">React, Vue, TypeScript</p>
                </div>
                <div className="card-hover bg-gray-50 p-4 rounded-lg">
                  <Database size={24} className="text-indigo-600 mb-2" />
                  <h3 className="font-semibold mb-2">Backend Power</h3>
                  <p className="text-sm text-gray-500">Node.js, Python, SQL</p>
                </div>
                <div className="card-hover bg-gray-50 p-4 rounded-lg">
                  <Palette size={24} className="text-indigo-600 mb-2" />
                  <h3 className="font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-sm text-gray-500">Figma, Tailwind</p>
                </div>
                <div className="card-hover bg-gray-50 p-4 rounded-lg">
                  <Briefcase size={24} className="text-indigo-600 mb-2" />
                  <h3 className="font-semibold mb-2">DevOps</h3>
                  <p className="text-sm text-gray-500">Docker, AWS, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-featured online store with React, Node.js, and Stripe integration",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI Chat Application",
                description: "Real-time chat platform with AI-powered responses and analytics",
                image: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Portfolio Generator",
                description: "Dynamic portfolio builder with customizable themes and components",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Task Management",
                description: "Collaborative project management tool with real-time updates",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-semibold">{project.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center gap-1 transition-colors">
                      Source <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            Whether you have a project in mind or just want to chat about technology,
            I'm always excited to connect with fellow developers and creators.
          </p>
          <a 
            href="mailto:youpu.dev@example.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Youpu Dev. Crafted with ❤️ and code</p>
        </div>
      </footer>
    </div>
  );
}

export default App;