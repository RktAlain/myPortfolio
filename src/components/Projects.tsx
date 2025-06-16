
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Brain, TrendingUp, Trophy, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EMIHACK 3.0 - 2ème Place",
      description: "Application de gestion d'épidémies avec Big Data et Intelligence Artificielle. Projet primé lors du hackathon national de l'EMIT en 2024.",
      technologies: ["Python", "IA", "Big Data", "Data Analysis"],
      icon: Trophy,
      gradient: "from-yellow-600 to-orange-600",
      features: ["Prix du développement", "Analyse prédictive", "Interface intuitive", "Traitement Big Data"],
      year: "2024"
    },
    {
      title: "Système de Gestion Documentaire",
      description: "Application complète de centre de documentation développée lors de mon stage chez Assurance Aro Antananarivo.",
      technologies: ["React", "Node.js", "MySQL", "API REST"],
      icon: Database,
      gradient: "from-blue-600 to-purple-600",
      features: ["Interface moderne", "Gestion complète", "API sécurisée", "Base de données optimisée"],
      year: "2023-2024"
    },
    {
      title: "Application Desktop SAV",
      description: "Système de gestion des Services Après-vente développé avec Java pour Computer Store durant mon stage de 3ème année.",
      technologies: ["Java", "Swing", "MySQL", "Desktop"],
      icon: Code,
      gradient: "from-emerald-600 to-teal-600",
      features: ["Interface desktop", "Gestion clientèle", "Suivi commandes", "Rapports automatisés"],
      year: "2022-2023"
    },
    {
      title: "EMIHACK 2.0 - Application Web",
      description: "Plateforme web pour la gestion du suivi de vente de vin développée lors du hackathon interne de l'EMIT.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: TrendingUp,
      gradient: "from-purple-600 to-pink-600",
      features: ["Suivi des ventes", "Dashboard analytique", "Interface responsive", "Gestion stocks"],
      year: "2021-2022"
    },
    {
      title: "Portfolio & Anti-Incendie",
      description: "Application web statique portfolio et système de lutte contre le feu de brousse développés lors du Summer-code.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      icon: Brain,
      gradient: "from-red-600 to-pink-600",
      features: ["Design moderne", "Responsive design", "Performance optimisée", "UX/UI soigné"],
      year: "2021-2022"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez mes réalisations en Data Science et développement fullstack
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-purple-400 font-semibold text-sm">{project.year}</span>
                </div>
                <CardTitle className="text-white text-xl text-left">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Résultats clés :</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
