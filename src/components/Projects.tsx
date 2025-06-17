
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Brain, TrendingUp, Trophy, Code, Award } from 'lucide-react';

const Projects = () => {
  const experiences = [
    {
      title: "Participation à l'EMIHACK 3.0",
      description: "Obtention du prix de 2e place dans la catégorie du développement - Création d'une application de gestion d'épidémies incluant Big Data et Intelligence Artificielle.",
      technologies: ["Big Data", "Intelligence Artificielle", "Data Science", "Machine Learning"],
      icon: Trophy,
      gradient: "from-yellow-600 to-orange-600",
      features: ["Prix de développement", "Gestion épidémies", "Big Data intégré", "IA appliquée"],
      year: "2024-2025"
    },
    {
      title: "Stage chez Assurance Aro Antananarivo",
      description: "Obtention de mon diplôme de licence professionnelle en informatique - Création d'une application de centre de documentation et d'information.",
      technologies: ["React", "Node.js", "MySQL", "Documentation"],
      icon: Database,
      gradient: "from-blue-600 to-purple-600",
      features: ["Application complète", "Centre de documentation", "Interface moderne", "Système d'information"],
      year: "2023-2024"
    },
    {
      title: "Stage chez Computer Store",
      description: "En vue de mon passage en 3ème année de licence - Création d'une application Desktop pour la gestion des Services Après-vente.",
      technologies: ["Desktop App", "Java", "Swing", "Gestion SAV"],
      icon: Code,
      gradient: "from-emerald-600 to-teal-600",
      features: ["Application desktop", "Gestion SAV", "Interface utilisateur", "Base de données"],
      year: "2022-2023"
    },
    {
      title: "Participation à l'EMIHACK 2.0",
      description: "Hackathon interne de l'EMIT - Création d'une application web pour la gestion du suivi de vente de vin.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: TrendingUp,
      gradient: "from-purple-600 to-pink-600",
      features: ["Application web", "Suivi des ventes", "Gestion stocks", "Interface responsive"],
      year: "2021-2022"
    },
    {
      title: "Participation au Summer-code",
      description: "Hackathon en ligne de l'EMIT - Création d'une application web statique d'un portfolio et de la lutte contre le feu de brousse. Concours Algorithme en ligne en utilisant la plateforme HackerRank.",
      technologies: ["HTML", "CSS", "JavaScript", "Algorithmes"],
      icon: Brain,
      gradient: "from-red-600 to-pink-600",
      features: ["Portfolio web", "Lutte anti-incendie", "Algorithmes", "Développement web"],
      year: "2021-2022"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expériences <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Professionnelles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours professionnel et mes réalisations lors de stages et hackathons
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${experience.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <experience.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-purple-400 font-semibold text-sm">{experience.year}</span>
                </div>
                <CardTitle className="text-white text-xl text-left">{experience.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Réalisations clés :</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {experience.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
            <Github className="mr-2 h-5 w-5" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
