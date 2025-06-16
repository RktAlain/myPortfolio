
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Licence en Sciences des Données et Intelligence Artificielle",
      institution: "École des Mines et des Industries Technologique (EMIT)",
      date: "2021 - 2024",
      type: "Diplôme",
      description: "Formation complète en Data Science, Machine Learning et développement d'applications intelligentes",
      status: "Obtenu",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Certification KNIME Analytics Platform",
      institution: "KNIME",
      date: "2024",
      type: "Certification",
      description: "Maîtrise avancée de la plateforme KNIME pour l'analyse de données et le machine learning",
      status: "Certifié",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Attestation Hackathon EMIHACK 3.0",
      institution: "EMIT",
      date: "2023",
      type: "Attestation",
      description: "2ème place au hackathon - Développement d'une solution innovante en équipe",
      status: "2ème Place",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Formation Développement Web Fullstack",
      institution: "Auto-formation & Projets",
      date: "2022 - 2024",
      type: "Compétence",
      description: "Maîtrise de React, Node.js, Java Spring Boot, PHP Laravel et bases de données",
      status: "Maîtrisé",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-purple-900/30 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Diplômes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Formations et certifications qui attestent de mon expertise technique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color}`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-purple-400 font-medium">{cert.institution}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {cert.date}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                    {cert.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Formation Continue</h3>
            <p className="text-gray-300 text-lg">
              Toujours en quête d'apprentissage, je continue de me former aux dernières technologies 
              et méthodologies en Data Science et développement web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
