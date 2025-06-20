import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & I.A",
      skills: [
        { name: "KNIME", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "ETL", level: 90, color: "from-green-500 to-teal-500" },
        { name: "Power BI", level: 65, color: "from-purple-500 to-pink-500" },
        { name: "Excel", level: 70, color: "from-orange-500 to-red-500" },
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
        { name: "PHP Laravel", level: 73, color: "from-yellow-600 to-orange-600" },
        { name: "Flutter, React Native", level: 78, color: "from-green-600 to-emerald-600" },
        { name: "Python Django", level: 70, color: "from-purple-600 to-pink-600" },
      ]
    },
    {
      title: "Bases de Données & Outils",
      skills: [
        { name: "MySQL, SQLite", level: 90, color: "from-cyan-500 to-blue-500" },
        { name: "PostgreSQL", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", level: 75, color: "from-orange-500 to-amber-500" },
        { name: "Git/GitHub", level: 88, color: "from-blue-500 to-indigo-500" },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-purple-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une expertise technique polyvalente alliant Data Science et Développement d'Application
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={item}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader>
                  <CardTitle className="text-white text-xl z-10 relative">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 z-10 relative">
                  <motion.div 
                    variants={container}
                    className="space-y-6"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        custom={skillIndex}
                        variants={skillItem}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4"
                      >
                        <div className="relative w-full">
                          <div className="text-gray-300 font-medium flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                            {skill.name}
                          </div>
                          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden relative">
                            <motion.div
                              initial={{ scaleX: 0, originX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                              }}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              style={{ width: `${skill.level}%` }}
                            ></motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30 relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-[conic-gradient(from_90deg_at_50%_50%,#805ad5_0%,#d53f8c_50%,#805ad5_100%)] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Langues</h3>
            <ul className="text-gray-300 space-y-2 relative z-10">
              {["Français : Bien", "Anglais : Assez-bien", "Malagasy : Natif"].map((lang, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  {lang}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30 relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-[conic-gradient(from_90deg_at_50%_50%,#805ad5_0%,#d53f8c_50%,#805ad5_100%)] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Design & Outils</h3>
            <ul className="text-gray-300 space-y-2 relative z-10">
              {["Figma, Adobe Photoshop", "UML, Scrum, Merise II", "Administration réseaux"].map((tool, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;