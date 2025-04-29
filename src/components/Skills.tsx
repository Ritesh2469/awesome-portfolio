
const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 65 },
    { name: "Node.js", percentage: 75 },
    { name: "TypeScript", percentage: 70 },
    { name: "C++", percentage: 70 },
    { name: "WordPress",percentage: 78},
    { name: "AWS", percentage: 79},
    { name: "PostmanAPI",percentage: 80},
    { name: "Android Studio",percentage: 78},
    { name: "Eclipse",percentage: 70},
    { name: "Selenium Ide",percentage: 80},
    
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-br-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="text-cyan-400">Skills</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            These are the technologies I've worked with and my proficiency in each.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan-400">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
