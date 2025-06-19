import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  
  const certifications = [
    {
      title: "Attestation KNIME Analytics Platform",
      institution: "KNIME",
      date: "2025",
      type: "Attestation",
      description: "Maîtrise avancée de la plateforme KNIME pour l'analyse de données et le machine learning",
      status: "Certifié",
      color: "from-green-500 to-emerald-600",
      certificateImage: ""
    },
    {
      title: "Attestation Hackathon EMIHACK 3.0",
      institution: "EMIT",
      date: "2025",
      type: "Attestation",
      description: "2ème place au hackathon du développement d'Application - Développement d'une solution innovante en équipe",
      status: "2ème Place",
      color: "from-yellow-500 to-orange-600",
      certificateImage: ""
    },
    {
      title: "Licence professionnelle en informatique",
      institution: "Developpement d'Application Internet/Intranet",
      date: "2022 - 2024",
      type: "Diplôme",
      description: "Maîtrise de React, Node.js, Java Spring Boot, PHP Laravel, Python Django et bases de données",
      status: "Obtenu",
      color: "from-purple-500 to-pink-600",
      certificateImage: ""
    },
    {
      title: "Participation au Summer-code",
      institution: "École de Management et d'Innovation Technologique (EMIT)",
      date: "2021 - 2022",
      type: "Attestation",
      description: "Maîtrise du HTML/CSS/JS et HackerRank - Création d'une application web statique et Concours Algorithme en équipe",
      status: "Obtenu",
      color: "from-blue-500 to-indigo-600",
      certificateImage: ""
    },
    {
      title: "Attestation Formation Cybersécurité",
      institution: "Cisco",
      date: "2021",
      type: "Attestation",
      description: "Formation en ligne sur les fondamentaux de la cybersécurité",
      status: "Obtenu",
      color: "from-red-500 to-pink-600",
      certificateImage: ""
    }
  ];

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 4);

  const handleViewCertificate = (cert) => {
    console.log(`Voir le certificat de: ${cert.title}`);
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-purple-900/30 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Diplômes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Formations et certifications qui attestent de mon expertise technique
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {visibleCertifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} transform group-hover:rotate-12 transition-transform duration-300`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-purple-400 font-medium">{cert.institution}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
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
                  <Button 
                    onClick={() => handleViewCertificate(cert)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                    size="sm"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Voir le certificat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {certifications.length > 4 && (
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline" 
              className="border-white/20 text-black hover:bg-white/10"
            >
              {showAll ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Voir moins
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Voir plus ({certifications.length - 4} autres)
                </>
              )}
            </Button>
          </div>
        )}

        {/* Summary Section */}
        <div className="mt-8 text-center">
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