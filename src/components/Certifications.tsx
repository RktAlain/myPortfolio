import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, Eye, ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      title: "Attestation en Data Science",
      institution: "IDEA Academy",
      date: "2025",
      type: "Attestation",
      description:
        "Maîtrise avancée de la plateforme knime pour l'analyse de données et le machine learning",
      status: "Obtenu",
      color: "from-green-500 to-emerald-600",
      certificateImage: "data_science.jpg",
    },
    {
      title: "Diplôme de participation de leadership pour les jeunes",
      institution: "Airtel Madagascar",
      date: "2025",
      type: "Diplôme",
      description:
        "participation active à l'évenement de leadership pour les jeunes",
      status: "Obtenu",
      color: "from-green-500 to-emerald-600",
      certificateImage: "airtel.jpg",
    },
    {
      title: "Certificat Hackathon EMIHACK 3.0",
      institution: "EMIT",
      date: "2025",
      type: "Certificat",
      description:
        "2ème place au hackathon du développement d'Application - Développement d'une solution innovante en équipe",
      status: "Obtenu",
      color: "from-yellow-500 to-orange-600",
      certificateImage: "emihack2.png",
    },
    {
      title: "Diplôme de Licence professionnelle en informatique",
      institution: "Developpement d'Application Internet/Intranet",
      date: "2022 - 2024",
      type: "Diplôme",
      description:
        "Maîtrise de React, Node.js, Java Spring Boot, PHP Laravel, Python Django et bases de données",
      status: "Obtenu",
      color: "from-purple-500 to-pink-600",
      certificateImage: "licence.jpg",
    },
    {
      title: "Diplôme DELF B2",
      institution: "Alliance Française",
      date: "2023 - 2024",
      type: "Diplôme",
      description:
        "Maîtrise de la langue française",
      status: "Obtenu",
      color: "from-blue-500 to-indigo-600",
      certificateImage: "delf.jpg",
    },
    {
      title: "Certificat de Participation au Summer-code",
      institution: "École de Management et d'Innovation Technologique (EMIT)",
      date: "2021 - 2022",
      type: "Certificat",
      description:
        "Maîtrise du HTML/CSS/JS et HackerRank - Création d'une application web statique et Concours Algorithme en équipe",
      status: "Obtenu",
      color: "from-blue-500 to-indigo-600",
      certificateImage: "summercode.webp",
    },
    {
      title: "Attestation Formation Cybersécurité",
      institution: "Cisco",
      date: "2021",
      type: "Attestation",
      description:
        "Formation en ligne sur les fondamentaux de la cybersécurité",
      status: "Obtenu",
      color: "from-red-500 to-pink-600",
      certificateImage: "cisco.png",
    },
  ];

  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, 4);

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCert(null), 500); // Wait for animation to finish
  };

  const getButtonText = (type) => {
    switch (type) {
      case "Attestation":
        return "Voir l'attestation";
      case "Diplôme":
        return "Voir le diplôme";
      case "Certificat":
        return "Voir le certificat";
      default:
        return "Voir le document";
    }
  };

  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-gradient-to-b from-purple-900/30 to-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Diplômes & Attestations &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Formations et certifications qui attestent de mon expertise
            technique
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {visibleCertifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${cert.color} transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-purple-400 font-medium">
                        {cert.institution}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white transform group-hover:scale-110 transition-transform duration-300`}
                  >
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
                    {getButtonText(cert.type)}
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
              className="border-white/20 text-black hover:bg-white/10 hover:text-white"
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
            <h3 className="text-2xl font-bold text-white mb-4">
              Formation Continue
            </h3>
            <p className="text-gray-300 text-lg">
              Toujours en quête d'apprentissage, je continue de me former aux
              dernières technologies et méthodologies en Science de Données & Intelligence Articielle et
              développement d'application.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Modal for Certificate Display */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div
            className="relative w-full max-w-4xl bg-gradient-to-br from-purple-900/50 to-slate-900/80 border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden transition-all duration-700"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              animation: "modalEntry 0.7s ease-out forwards",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 p-6 bg-gradient-to-b from-purple-900/30 to-slate-900/50 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCert?.title}
                </h3>
                <p className="text-purple-300 mb-4">
                  {selectedCert?.institution}
                </p>

                <div className="flex items-center text-gray-300 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{selectedCert?.date}</span>
                </div>

                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${selectedCert?.color} text-white self-start`}
                >
                  {selectedCert?.status}
                </div>

                <p className="text-gray-300 mb-6 flex-grow">
                  {selectedCert?.description}
                </p>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-medium mb-2">
                    Détails du document
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>Type: {selectedCert?.type}</li>
                    <li>Institution: {selectedCert?.institution}</li>
                    <li>Date d'obtention: {selectedCert?.date}</li>
                  </ul>
                </div>
              </div>

              <div className="md:w-2/3 p-6 flex items-center justify-center bg-slate-900/50 relative">
                {selectedCert?.certificateImage ? (
                  <div className="relative w-full h-96 overflow-hidden rounded-lg border-2 border-white/10 shadow-lg transform transition-transform duration-500 hover:scale-105">
                    <img
                      src={selectedCert.certificateImage}
                      alt={`Certificat ${selectedCert.title}`}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <a
                        href={selectedCert.certificateImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors"
                      >
                        Ouvrir en plein écran
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-white/5 rounded-lg border-2 border-dashed border-white/10">
                    <p className="text-gray-400">Image non disponible</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
