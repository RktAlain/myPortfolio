
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Brain, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Prédiction de Churn Client",
      description: "Modèle de machine learning développé avec KNIME pour prédire l'attrition client dans le secteur des télécommunications. Amélioration de 25% de la rétention client.",
      technologies: ["KNIME", "Python", "Scikit-learn", "XGBoost"],
      icon: Brain,
      gradient: "from-blue-600 to-purple-600",
      features: ["Accuracy: 92%", "ROC-AUC: 0.89", "Feature Engineering", "Cross-validation"]
    },
    {
      title: "Dashboard Analytics E-commerce",
      description: "Développement d'un tableau de bord interactif pour analyser les performances de vente et identifier les tendances du marché en temps réel.",
      technologies: ["Tableau", "SQL", "Python", "PostgreSQL"],
      icon: TrendingUp,
      gradient: "from-emerald-600 to-teal-600",
      features: ["Real-time data", "KPI tracking", "Automated reports", "Mobile responsive"]
    },
    {
      title: "Analyse Sentiment Réseaux Sociaux",
      description: "Pipeline d'analyse de sentiment sur les données Twitter pour une marque internationale, utilisant du NLP avancé et des techniques de deep learning.",
      technologies: ["Python", "NLTK", "TensorFlow", "Apache Kafka"],
      icon: Database,
      gradient: "from-orange-600 to-red-600",
      features: ["NLP Pipeline", "Real-time processing", "Sentiment scoring", "Trend analysis"]
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
            Découvrez quelques-uns de mes projets les plus impactants en Data Science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
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
