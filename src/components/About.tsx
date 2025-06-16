
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, Code, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Data Science",
      description: "KNIME, Python, R et Machine Learning"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "React, Node.js, Java Spring Boot"
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "MySQL, PostgreSQL, MongoDB"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Visualisation et insights métier"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Diplômé de l'EMIT en Sciences des Données et Intelligence Artificielle, je suis un professionnel polyvalent 
              alliant expertise en Data Science et développement fullstack. Ma passion pour l'innovation technologique 
              me pousse à créer des solutions complètes et performantes.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Fort d'une expérience diversifiée acquise lors de hackathons (EMIHACK 3.0 - 2ème place) et de stages 
              professionnels, je maîtrise l'ensemble de la chaîne de développement : de l'analyse de données 
              à la mise en production d'applications web modernes.
            </p>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">Localisation :</h3>
              <p className="text-gray-300">📍 Imandry Fianarantsoa, Madagascar</p>
              <p className="text-gray-300">📞 034 66 974 37</p>
              <p className="text-gray-300">✉️ rakotomalalasoheryalain@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
