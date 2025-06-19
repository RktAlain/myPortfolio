import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Users, Trophy, Code, Award, BarChart4, BrainCircuit } from 'lucide-react';

const Formation = () => {
  const formations = [
    {
      title: "Formation en Data Scientist",
      institution: "IDEA Academy",
      period: "2025",
      location: "Fianarantsoa, Madagascar",
      specialization: "Attestation de fin de formation",
      description: "Acquisition de compétences avancées en Data Science avec Knime",
      color: "from-fuchsia-500 to-purple-600",
      icon: BarChart4
    },
    {
      title: "Première année de master en informatique",
      institution: "EMIT",
      period: "2025",
      location: "Fianarantsoa, Madagascar",
      specialization: "Sciences de Données et Intelligence Artificielle",
      description: "Formation avancée en Data Science, Machine Learning et développement d'applications intelligentes",
      color: "from-blue-500 to-indigo-600",
      icon: BrainCircuit
    },
    {
      title: "Licence professionnelle (Troisième année) en informatique",
      institution: "EMIT",
      period: "2024",
      location: "Fianarantsoa, Madagascar",
      specialization: "Obtention du diplôme de licence",
      description: "Formation complète en développement informatique et gestion de projets",
      color: "from-purple-500 to-pink-600",
      icon: GraduationCap
    },
    {
      title: "Diplôme DELF B2",
      institution: "Alliance Française",
      period: "2024",
      location: "Fianarantsoa, Madagascar",
      specialization: "Français Langue Étrangère",
      description: "Certification de compétence en langue française niveau intermédiaire avancé",
      color: "from-green-500 to-emerald-600",
      icon: Award
    },
    {
      title: "Deuxième année de licence en informatique",
      institution: "EMIT",
      period: "2023",
      location: "Fianarantsoa, Madagascar",
      specialization: "Développement d'Application Internet/Intranet",
      description: "Approfondissement des connaissances en programmation et développement web",
      color: "from-cyan-500 to-blue-600",
      icon: Code
    },
    {
      title: "Première année de licence en informatique",
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
      description: "Formation sur les fondamentaux de la cybersécurité et protection des systèmes",
      color: "from-red-500 to-pink-600",
      icon: Trophy
    },
    {
      title: "Baccalauréat série D",
      institution: "Lycée Privé Arc en Ciel",
      period: "2020",
      location: "Toliara, Madagascar",
      specialization: "Sciences et Technologies",
      description: "Diplôme de fin d'études secondaires avec spécialisation scientifique",
      color: "from-yellow-500 to-orange-600",
      icon: Trophy
    }
  ];

  return (
    <section id="formation" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Parcours <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Académique</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mon parcours académique et mes expériences professionnelles
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
      </div>
    </section>
  );
};

export default Formation;