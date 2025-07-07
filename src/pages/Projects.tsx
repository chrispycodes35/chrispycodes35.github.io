import { useState } from 'react';
import { Github, Globe, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment processing.',
      longDescription: 'Built a comprehensive e-commerce solution using React for the frontend and Node.js with Express for the backend. Integrated Stripe for payment processing and MongoDB for data storage. Features include user authentication, product catalog, shopping cart, order management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'JWT'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      team: 'Solo Project',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      longDescription: 'Developed a real-time task management application using React and Firebase. Features include real-time collaboration, task assignment, progress tracking, file attachments, and team management. Integrated with Google Calendar for scheduling.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'React Query'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      team: 'Solo Project',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
      longDescription: 'Created a responsive weather application using React and OpenWeather API. Features include current weather, 7-day forecast, hourly predictions, interactive charts, and location-based weather data. Implemented geolocation and search functionality.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3', 'Geolocation API'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      team: 'Solo Project',
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'A RESTful API for social media platform with user authentication and content management.',
      longDescription: 'Built a comprehensive REST API using Node.js, Express, and MongoDB. Features include user authentication, post creation, commenting, likes, user profiles, and real-time notifications. Implemented JWT authentication and file upload functionality.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Socket.io'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      team: 'Team Project',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS.',
      longDescription: 'Designed and developed a personal portfolio website showcasing projects, skills, and experience. Features include responsive design, smooth animations, contact form, and SEO optimization. Built with React, TypeScript, and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Framer Motion'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      team: 'Solo Project',
    },
    {
      id: 6,
      title: 'Machine Learning Dashboard',
      description: 'A Python-based dashboard for visualizing machine learning models and data analysis.',
      longDescription: 'Developed a comprehensive dashboard for machine learning model visualization and data analysis. Features include interactive charts, model performance metrics, data preprocessing tools, and real-time data streaming. Built with Python, Flask, and Plotly.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tech: ['Python', 'Flask', 'Plotly', 'Pandas', 'Scikit-learn', 'Docker'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      team: 'Team Project',
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here's a collection of projects I've worked on, showcasing my skills in 
            frontend development, backend systems, and full-stack applications.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <Globe size={16} className="text-gray-700" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <Github size={16} className="text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{project.team}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary text-center"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new and challenging projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chrispycodes35@gmail.com"
              className="btn-primary"
            >
              Start a Project
            </a>
            <a
              href="https://github.com/chrispycodes35"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 