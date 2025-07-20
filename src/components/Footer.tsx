import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rktalain",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/solohery-alain-rakotomalala-054599257",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rakotomalalasoheryalain@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-20 px-4 relative">
      {/* Divider ajouté ici */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-white/10 mb-12"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-purple-400">R</span>AKOTOMALALA{" "}
              <span className="text-purple-400">S</span>olohery{" "}
              <span className="text-purple-400">A</span>lain
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Data Scientist et Développeur Fullstack passionné par l'innovation
              technologique. Spécialisé en Data Science et Intelligence
              Artificielle.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Imandry Fianarantsoa, Madagascar</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>034 66 974 37 (WhatsApp)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>rakotomalalasoheryalain@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Disponibilité</h4>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400 border border-green-600/30">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Ouvert aux opportunités
              </span>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="w-full text-center">
            {" "}
            {/* Conteneur plein largeur avec centrage */}
            <div className="text-gray-400 text-sm inline-block">
              {" "}
              {/* inline-block pour que le centrage fonctionne */}©{" "}
              {currentYear} RAKOTOMALALA Solohery Alain. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;