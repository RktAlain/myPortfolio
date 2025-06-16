
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, Brain, Code, Database, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    {
      icon: Brain,
      title: "Data Science",
      description: "KNIME, Python, R et Machine Learning",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "React, Node.js, Java Spring Boot",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "MySQL, PostgreSQL, MongoDB",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: BarChart2,
      title: "Analytics",
      description: "Visualisation et insights métier",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              RAKOTOMALALA Solohery Alain
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="typing-animation">Data Scientist & Développeur Fullstack</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Spécialiste en Data Science avec KNIME, Python, R et développement web fullstack. 
            Expert en transformation de données complexes en insights stratégiques.
          </p>

          {/* Profile Image Card */}
          <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <CardContent className="p-6">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1">
                  <img 
                    src="/lovable-uploads/ce65fc9e-b062-4530-b2ed-a3db410fec97.png" 
                    alt="RAKOTOMALALA Solohery Alain" 
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-semibold text-lg">RAKOTOMALALA Solohery</h3>
                  <p className="text-purple-300">Data Scientist & Fullstack Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{skill.title}</h3>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
            
            <div className="flex space-x-4">
              <a href="https://github.com/rktalain" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6 text-white" />
              </a>
              <a href="https://linkedin.com/in/solohery-alain" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a href="mailto:rakotomalalasoheryalain@gmail.com"
                 className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110">
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
