import { Mail, MapPin, Calendar, GraduationCap, Briefcase, Code, Database, Palette, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code size={24} />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      category: 'Backend',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Firebase'],
    },
    {
      category: 'Design',
      icon: <Palette size={24} />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX', 'Prototyping', 'Wireframing'],
    },
    {
      category: 'Tools & DevOps',
      icon: <Globe size={24} />,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Jest', 'Webpack'],
    },
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built responsive websites and web applications for various clients using modern JavaScript frameworks.',
    },
    {
      title: 'Junior Developer',
      company: 'Startup Studio',
      period: '2019 - 2020',
      description: 'Developed features for web applications and collaborated with cross-functional teams.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web development.',
    },
    {
      degree: 'Web Development Bootcamp',
      school: 'Coding Academy',
      period: '2019',
      description: 'Intensive program covering full-stack development with modern technologies.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm a passionate full-stack developer with over 4 years of experience 
                creating digital solutions that make a difference. I believe in writing 
                clean, maintainable code and building user experiences that people love.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary-600" size={20} />
                  <span className="text-gray-700">chrispycodes35@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary-600" size={20} />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary-600" size={20} />
                  <span className="text-gray-700">Available for new opportunities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Web Development</h4>
                      <p className="text-gray-600">Building modern, responsive websites and web applications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">UI/UX Design</h4>
                      <p className="text-gray-600">Creating intuitive and beautiful user interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                      <p className="text-gray-600">Finding elegant solutions to complex technical challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I work with a variety of technologies to create the best possible solutions for my clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-primary-600">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey in software development and web technologies.
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-primary-600 font-medium">{job.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mt-2 md:mt-0">
                    <Briefcase size={16} />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My academic background and continuous learning journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-primary-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                </div>
                <p className="text-primary-600 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-600 mb-3">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <a
            href="mailto:chrispycodes35@gmail.com"
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About; 