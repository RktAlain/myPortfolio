
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Développement de modèles prédictifs avancés"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Traitement et analyse de données massives"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Visualisation et insights métier"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et communication des résultats"
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
              Data Scientist passionné avec une solide expertise en analyse de données et en apprentissage automatique. 
              Je transforme les données complexes en insights stratégiques pour aider les entreprises à prendre des décisions éclairées.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Ma spécialisation en <span className="text-purple-400 font-semibold">KNIME</span> me permet de créer 
              des workflows analytiques sophistiqués, tandis que ma maîtrise de Python, R et des technologies 
              de visualisation me donne une approche complète de la science des données.
            </p>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">Expertise clé :</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Modélisation prédictive et Machine Learning</li>
                <li>• Analyse statistique avancée avec R et Python</li>
                <li>• Workflows analytiques avec KNIME</li>
                <li>• Visualisation de données (Tableau, Power BI)</li>
                <li>• Big Data et bases de données (SQL, NoSQL)</li>
              </ul>
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
