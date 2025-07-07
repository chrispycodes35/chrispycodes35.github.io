import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-blue-600">Christopher</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate full-stack developer who loves creating beautiful, 
                functional, and user-centered digital experiences. I'm always 
                looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                  <span>Learn More</span>
                </Link>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/chrispycodes35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/chrispycodes35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:chrispycodes35@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                <p className="text-blue-100 mb-6">
                  I specialize in creating modern web applications that are both 
                  beautiful and functional. From concept to deployment, I handle 
                  every aspect of the development process.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Frontend</div>
                    <div className="text-blue-200">React, TypeScript, Tailwind</div>
                  </div>
                  <div>
                    <div className="font-semibold">Backend</div>
                    <div className="text-blue-200">Node.js, Python, Databases</div>
                  </div>
                  <div>
                    <div className="font-semibold">Tools</div>
                    <div className="text-blue-200">Git, Docker, AWS</div>
                  </div>
                  <div>
                    <div className="font-semibold">Design</div>
                    <div className="text-blue-200">Figma, Responsive UI/UX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and bring innovative ideas to life. 
            Let's discuss how we can work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chrispycodes35@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
            <Link to="/about" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 