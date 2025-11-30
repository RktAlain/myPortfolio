import React from "react";
import {
  Brain,
  Database,
  Code,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Home,
  Globe,
  Briefcase,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "Data Science & BI",
      description: "Knime, Power BI, Python, OLAP, Auto ML, ETL, SQL, I.A",
      color: "bg-gradient-to-br from-purple-600 to-indigo-600",
    },
    {
      icon: Code,
      title: "Développement",
      description: "React, Node.js, Spring Boot, Django, Flutter",
      color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "MySQL, PostgreSQL, MongoDB, SQLite",
      color: "bg-gradient-to-br from-emerald-600 to-teal-600",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Visualisation & Insights",
      color: "bg-gradient-to-br from-pink-600 to-rose-600",
    },
  ];

  const availabilityItems = [
    {
      icon: Home,
      text: "Mobile (Antananarivo - Fianarantsoa - Toliara)",
    },
    {
      icon: Globe,
      text: "Flexible pour travail à distance ou sur site",
      highlight: true,
    },
    {
      icon: Briefcase,
      text: "Recherche alternance/stage/Emploi/Projet",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 relative" // Suppression du gradient ici
    >
      {/* Ajout d'un fond fixe spécifique à la section About */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900 to-slate-950"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              moi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')]"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">
          {/* Colonne Gauche */}
          <div className="flex flex-col gap-8 h-full">
            {/* Carte 3D avec photo */}
            <div className="relative group perspective-1000 flex-grow">
              <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-10 group-hover:rotate-x-2">
                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl border border-white/10 shadow-2xl p-8 h-full flex flex-col backdrop-blur-sm">
                  <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-purple-400/20 mb-8 overflow-hidden shadow-lg">
                    <img
                      src="/profile.jpg"
                      alt="Solohery Alain"
                      className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    Solohery Alain
                  </h3>
                  <p className="text-purple-300 text-center mb-6">
                    Data Scientist / BI Analyst & Développeur Fullstack
                  </p>

                  <div className="flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                    <Mail className="h-4 w-4 mr-2 text-purple-300" />
                    <a
                      href="mailto:rakotomalalasoheryalain@gmail.com"
                      className="text-sm"
                    >
                      rakotomalalasoheryalain@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 mr-2 text-purple-300" />
                    <a href="tel:+261346697437" className="text-sm">
                      +261 34 66 974 37 (WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/30 rounded-3xl border border-white/10 shadow-xl backface-hidden transform translate-z-[-40px] rotate-y-3 -rotate-x-1 z-[-1]"></div>
              </div>
            </div>

            {/* Section Disponibilités */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all shadow-lg h-full backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                Disponibilités
              </h3>
              <ul className="space-y-3">
                {availabilityItems.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <item.icon
                      className={`h-5 w-5 mr-3 mt-0.5 ${
                        item.highlight ? "text-green-400" : "text-purple-300"
                      }`}
                    />
                    <span
                      className={item.highlight ? "text-white font-medium" : ""}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne Droite */}
          <div className="flex flex-col gap-8 h-full">
            {/* Section Profil */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Mon Parcours
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Diplômé de l'Ecole de Management et d'Innovation Technologique
                (EMIT) de Fianarantsoa en Développement d'Applications avec
                spécialisation en systèmes Internet/Intranet, je poursuis
                actuellement un Master en Sciences des Données et Intelligence
                Artificielle.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Spécialiste en Data et Développement, je mets à profit mon
                expertise pour concevoir des solutions digitales
                performantes, intuitives et orientées vers l’aide à la décision.
              </p>
            </div>

            {/* Grille de compétences */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`${skill.color} rounded-2xl p-6 border border-white/10 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <skill.icon className="h-8 w-8 text-white mb-3" />
                    <h4 className="text-white font-semibold mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-white/80 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles globaux */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .translate-z-[-40px] {
          transform: translateZ(-40px);
        }
      `}</style>
    </section>
  );
};

export default About;
