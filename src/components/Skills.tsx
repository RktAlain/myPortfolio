
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & I.A",
      skills: [
        { name: "KNIME", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "ETL", level: 90, color: "from-green-500 to-teal-500" },
        { name: "Power BI", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Python Django", level: 88, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "Développement Web",
      skills: [
        { name: "React", level: 90, color: "from-indigo-500 to-purple-500" },
        { name: "Node.js", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "HTML5/CSS3", level: 95, color: "from-pink-500 to-rose-500" },
        { name: "JavaScript", level: 92, color: "from-emerald-500 to-teal-500" },
      ]
    },
    {
      title: "Backend & Mobile",
      skills: [
        { name: "Java Spring Boot", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "PHP Laravel", level: 80, color: "from-yellow-600 to-orange-600" },
        { name: "Flutter", level: 78, color: "from-green-600 to-emerald-600" },
        { name: "React Native", level: 75, color: "from-purple-600 to-pink-600" },
      ]
    },
    {
      title: "Bases de Données & Outils",
      skills: [
        { name: "MySQL", level: 90, color: "from-cyan-500 to-blue-500" },
        { name: "PostgreSQL", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", level: 75, color: "from-orange-500 to-amber-500" },
        { name: "Git/GitHub", level: 88, color: "from-blue-500 to-indigo-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une expertise technique polyvalente alliant Data Science et Développement d'Application
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-scale-in`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Langues</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Français : Bien</li>
              <li>• Anglais : Assez-bien</li>
              <li>• Malagasy : Natif</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Design & Outils</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Figma, Adobe Photoshop</li>
              <li>• UML, Scrum, Merise II</li>
              <li>• Administration réseaux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
