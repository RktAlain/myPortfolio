import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, Github, Database, Brain, TrendingUp, Trophy, Code, Award, 
  ShoppingCart, ChevronDown, ChevronUp, X, ZoomIn 
} from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const experiences = [
    {
      title: "Projet BI Analyst & Data Science",
      description: "Conception d’un système décisionnel basé sur l’OLAP avec l’intégration de l’AutoML pour l’analyse et la prédiction des promotions internes d’une entreprise",
      technologies: ["OLAP", "AutoML", "Python", "Power BI"],
      icon: Brain,
      gradient: "from-yellow-600 to-orange-600",
      features: ["Vue Descriptive", "Vue prédictive", "Vue comparative", "Memoire"],
      year: "2024-2025",
      demoLink: "",
      codeLink: null,
      codeMessage: "Voir le projet",
      hasImages: true,
      images: [
        "/desc.png",
        "/vuepred.png",
        "/vuecomp.png",
        "/couv.png"
      ]
    },
    {
      title: "Participation à l'EMHACK 3.0 (2ème place en développement)",
      description: "Hackathon EMHACK 3.0 - Création d'une application de gestion d'épidémies utilisant Big Data et Intelligence Artificielle.",
      technologies: ["Big Data", "Intelligence Artificielle", "Développement d'application"],
      icon: Trophy,
      gradient: "from-yellow-600 to-orange-600",
      features: ["Analyse de données", "Solution innovante", "Prix du 2ème place"],
      year: "2024-2025",
      demoLink: "https://pandemie.onrender.com",
      codeLink: null,
      codeMessage: "Code inaccessible"
    },
    {
      title: "Projet d'équipe / Hackathon – Gestion des achats en entreprise",
      description: "Hackathon de recrutement - Réinvention du processus d'achat de matériel dans une entreprise.",
      technologies: ["Processus d'achat", "Gestion d'entreprise", "Automatisation", "React TS", "Python Django"],
      icon: ShoppingCart,
      gradient: "from-green-600 to-blue-600",
      features: ["Refonte processus achat", "Solution entreprise", "Innovation digitale", "Hackathon recrutement"],
      year: "2024-2025",
      demoLink: "https://accessachat.onrender.com",
      codeLink: null,
      codeMessage: "Code inaccessible"
    },
    {
      title: "Stage chez Assurance Aro Antsahavola Antananarivo",
      description: "Obtention de mon diplôme de licence professionnelle en informatique - Création d'une application de centre de documentation et d'information.",
      technologies: ["React", "JAVA Spring", "PostgreSQL", "Documentation"],
      icon: Database,
      gradient: "from-blue-600 to-purple-600",
      features: ["Application complète", "Centre de documentation", "Interface moderne", "Système d'information"],
      year: "2023-2024",
      demoLink: null,
      codeLink: null,
      codeMessage: "Code inaccessible",
      demoMessage: "Lien indisponible"
    },
    {
      title: "Stage chez Computer Store Fianarantsoa",
      description: "En vue de mon passage en 3ème année de licence - Création d'une application Desktop pour la gestion des Services Après-vente.",
      technologies: ["Desktop App", "Java", "FX", "Gestion SAV"],
      icon: Code,
      gradient: "from-emerald-600 to-teal-600",
      features: ["Application desktop", "Gestion SAV", "Interface utilisateur", "Base de données"],
      year: "2022-2023",
      demoLink: "https://www.mediafire.com/file/urxeltu15rv8al7/Application.rar/file",
      codeLink: null,
      codeMessage: "Code inaccessible",
      demoMessage: "Lien indisponible"
    },
    {
      title: "Participation au Summer-code",
      description: "Hackathon en ligne de l'EMIT - Création d'une application web statique d'un portfolio et de la lutte contre le feu de brousse. Concours Algorithme en ligne en utilisant la plateforme HackerRank.",
      technologies: ["HTML", "CSS", "JavaScript", "Algorithmes"],
      icon: Brain,
      gradient: "from-red-600 to-pink-600",
      features: ["Portfolio web", "Lutte anti-incendie", "Algorithmes", "Développement web"],
      year: "2021-2022",
      demoLink: null,
      codeLink: null,
      codeMessage: "Code inaccessible",
      demoMessage: "Lien indisponible"
    }
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 4);

  // Lightbox pour afficher une image en grand
  const Lightbox = () => {
    if (!lightboxImage) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
        onClick={() => setLightboxImage(null)}
      >
        <button 
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxImage(null);
          }}
        >
          <X size={32} />
        </button>
        
        <div className="max-w-5xl max-h-full flex items-center justify-center">
          <img 
            src={lightboxImage} 
            alt="Vue agrandie du projet"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
          <p className="text-white text-sm">Cliquez n'importe où pour fermer</p>
        </div>
      </div>
    );
  };

  // Modal pour afficher les images du premier projet
  const ProjectModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white">Projet BI Analyst & Data Science</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {experiences[0].images.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden relative group cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Aperçu du projet ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white h-8 w-8" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Description du projet</h4>
              <p className="text-gray-300 text-sm">
                {experiences[0].description}
              </p>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-700 flex justify-end">
            <Button 
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Fermer
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expériences & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours professionnel et mes réalisations lors de stages et hackathons
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {visibleExperiences.map((experience, index) => (
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
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={!experience.codeLink && !experience.hasImages}
                    onClick={() => {
                      if (experience.hasImages) {
                        setShowModal(true);
                      } else if (experience.codeLink) {
                        window.open(experience.codeLink, '_blank');
                      }
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {experience.codeLink ? "Code" : experience.codeMessage}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-white/20 text-black hover:bg-white/10 hover:text-black"
                    disabled={!experience.demoLink}
                    onClick={() => experience.demoLink ? window.open(experience.demoLink, '_blank') : null}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {experience.demoLink ? "Demo" : (experience.demoMessage || "Lien indisponible")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {experiences.length > 4 && (
          <div className="mt-8 text-center">
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
                  Voir plus ({experiences.length - 4} autres)
                </>
              )}
            </Button>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>

      {/* Modal pour afficher les images du premier projet */}
      <ProjectModal />
      
      {/* Lightbox pour afficher une image en grand */}
      <Lightbox />
    </section>
  );
};

export default Projects;