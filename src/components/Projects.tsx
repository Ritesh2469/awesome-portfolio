
const Projects = () => {
  const projects = [
    {
      title: "Indian-Currency-Converter ",
      description: "Developed a currency conversion tool enabling users to convert Indian Rupees (INR) to 5+ global currencies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/Ritesh2469/INDIAN-CURRENCY-CONVERTER"
    },
    {
      title: "Weather-forecast",
      description: "Developed a Weather Forecast App using HTML, CSS, and JavaScript, enabling users to fetch real- time weather data for 100,00+ global.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/Ritesh2469/weather-forecast"
    },
    {
      title: "Static-website",
      description: "Deployed a static website to AWS S3, ensuring 99.99% uptime with a serverless architecture..",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/Ritesh2469/Static-website-using-aws"
    },
    {
      title: "Student-Academic-Records-API-Automation-Testing",
      description: "Student Academic Record API with RESTful Services and Automated Testing using RestAssured." ,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      link: "https://github.com/Ritesh2469/Student-Academic-Records-API-Automation-Testing.git"
    },
  ];

  return (
    <section id="projects" className="section relative overflow-hidden bg-gray-900/30">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-tr-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="text-cyan-400">Projects</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project presented unique challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4">
                    <a href={project.link} className="button-glow text-sm">View Project</a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
