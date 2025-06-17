import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Users, Trophy, Code, Award } from 'lucide-react';

const Formation = () => {
  const formations = [
    {
      title: "Master en Informatique",
      institution: "EMIT - École des Mines et des Industries Technologique",
      period: "2025",
      location: "Fianarantsoa, Madagascar",
      specialization: "Sciences de Données et Intelligence Artificielle",
      description: "Formation avancée en Data Science, Machine Learning et développement d'applications intelligentes",
      color: "from-blue-500 to-indigo-600",
      icon: GraduationCap
    },
    {
      title: "Licence Professionnelle en Informatique",
      institution: "EMIT",
      period: "2024",
      location: "Fianarantsoa, Madagascar",
      specialization: "Développement d'Application Internet/Intranet",
      description: "Formation complète en développement web, programmation et gestion de projets informatiques",
      color: "from-purple-500 to-pink-600",
      icon: Code
    },
    {
      title: "Diplôme DELF B2",
      institution: "Alliance Française de Fianarantsoa",
      period: "2024",
      location: "Fianarantsoa, Madagascar",
      specialization: "Français Langue Étrangère",
      description: "Certification de compétence en langue française niveau intermédiaire avancé",
      color: "from-green-500 to-emerald-600",
      icon: Award
    },
    {
      title: "Deuxième Année de Licence en Informatique",
      institution: "EMIT",
      period: "2023",
      location: "Fianarantsoa, Madagascar",
      specialization: "Développement d'Application Internet/Intranet",
      description: "Approfondissement des connaissances en programmation et développement web",
      color: "from-cyan-500 to-blue-600",
      icon: Code
    },
    {
      title: "Première Année de Licence en Informatique",
      institution: "EMIT",
      period: "2022",
      location: "Fianarantsoa, Madagascar",
      specialization: "Développement d'Application Internet/Intranet",
      description: "Bases fondamentales de l'informatique et introduction au développement",
      color: "from-indigo-500 to-purple-600",
      icon: Code
    },
    {
      title: "Formation en Cybersécurité",
      institution: "Cisco",
      period: "2021",
      location: "Formation en ligne",
      specialization: "Attestation de fin de formation",
      description: "Formation complète sur les fondamentaux de la cybersécurité et protection des systèmes",
      color: "from-red-500 to-pink-600",
      icon: Trophy
    },
    {
      title: "Baccalauréat série D",
      institution: "Lycée Privé Arc en Ciel",
      period: "2020",
      location: "Toliara, Madagascar",
      specialization: "Sciences et Technologies",
      description: "Formation scientifique avec spécialisation en mathématiques et sciences physiques",
      color: "from-yellow-500 to-orange-600",
      icon: Trophy
    }
  ];

  const experiences = [
    {
      title: "Participation EMIHACK 3.0",
      company: "EMIT",
      period: "2024-2025",
      type: "Hackathon",
      description: "2ème place - Création d'une application de gestion d'épidémies avec Big Data et IA",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Stage - Assurance Aro Antananarivo",
      company: "Assurance Aro",
      period: "2023-2024",
      type: "Stage Professionnel",
      description: "Création d'une application de centre de documentation et d'information",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Stage - Computer Store",
      company: "Computer Store",
      period: "2022-2023",
      type: "Stage Technique",
      description: "Création d'une application Desktop pour la gestion des Services Après-vente",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="formation" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Parcours & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Formation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mon parcours académique et professionnel en Data Science et développement
          </p>
        </div>

        {/* Formation Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="mr-3 h-8 w-8 text-purple-400" />
            Formation Académique
          </h3>
          <div className="space-y-8">
            {formations.map((formation, index) => {
              const IconComponent = formation.icon;
              return (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${formation.color} transform group-hover:rotate-12 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl group-hover:text-purple-300 transition-colors">
                          {formation.title}
                        </CardTitle>
                        <p className="text-purple-400 font-medium text-lg">{formation.institution}</p>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formation.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {formation.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-3 rounded-lg border border-purple-500/30">
                      <p className="text-purple-300 font-medium">{formation.specialization}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{formation.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Users className="mr-3 h-8 w-8 text-purple-400" />
            Expériences Professionnelles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                <CardHeader className="pb-3">
                  <div className={`w-full h-2 bg-gradient-to-r ${exp.color} rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </CardTitle>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{exp.period}</span>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
                      {exp.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
