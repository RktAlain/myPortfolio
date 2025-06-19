import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code2, 
  GraduationCap, 
  Folder, 
  BadgeCheck, 
  Mail 
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const controls = useAnimation();
  const navRef = useRef(null);
  const photoRef = useRef(null);

  const navItems = [
    { label: 'Accueil', href: '#home', icon: <Home size={18} /> },
    { label: 'À propos', href: '#about', icon: <User size={18} /> },
    { label: 'Compétences', href: '#skills', icon: <Code2 size={18} /> },
    { label: 'Formation', href: '#formation', icon: <GraduationCap size={18} /> },
    { label: 'Projets', href: '#projects', icon: <Folder size={18} /> },
    { label: 'Certifications', href: '#certifications', icon: <BadgeCheck size={18} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={18} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({
          y: 0,
          opacity: 1,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          transition: { duration: 0.3 }
        });
      } else {
        controls.start({
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          transition: { duration: 0.3 }
        });
      }

      // Active section detection
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, navItems]);

  const handleNavigation = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = navRef.current?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-purple-500/20 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with photo and 3D effects */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <motion.div
              ref={photoRef}
              initial={{ rotateY: 0, scale: 1 }}
              whileHover={{ 
                rotateY: 180,
                scale: 1.1,
                boxShadow: '0 0 20px rgba(167, 139, 250, 0.7)'
              }}
              transition={{ 
                duration: 0.8,
                type: 'spring',
                bounce: 0.5
              }}
              className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-purple-400 cursor-pointer"
            >
              {/* Utilisez img au lieu de next/image */}
              <img 
                src="/profile.jpg" 
                alt="Photo de profil"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              {/* Effet de halo au survol */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                className="absolute inset-0 bg-purple-400 rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 10 }}
              transition={{ duration: 0.3 }}
              className="font-bold text-xl md:text-2xl text-white"
            >
              <span className="text-purple-400">R</span>AKOTOMALALA{' '}
              <span className="text-purple-400">S</span>olohery
            </motion.div>
          </motion.div>
          
          {/* Desktop Navigation - 3D effect */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ rotateX: 0 }}
                whileHover={{ 
                  rotateX: activeSection === item.href ? 0 : 10,
                  scale: 1.05
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <motion.a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 font-medium group whitespace-nowrap ${
                    activeSection === item.href 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                  whileHover={{ y: activeSection === item.href ? 0 : -3 }}
                >
                  <motion.span 
                    className={`mr-2 ${
                      activeSection === item.href 
                        ? 'text-purple-400 opacity-100' 
                        : 'text-purple-400 opacity-0 group-hover:opacity-100'
                    } transition-opacity`}
                    whileHover={{ rotate: 15 }}
                  >
                    {item.icon}
                  </motion.span>
                  {item.label}
                  <motion.span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 ${
                      activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    } transition-all duration-300`}
                    layoutId="underline"
                  />
                </motion.a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button with 3D flip effect */}
          <motion.button
            className="md:hidden p-2 rounded-full bg-purple-900/30 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-purple-400"
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation with 3D effects */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: 15 }}
              animate={{ 
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { 
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 100
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                rotateX: 15,
                transition: { duration: 0.2 }
              }}
              className="md:hidden absolute left-0 right-0 bg-slate-800/95 backdrop-blur-sm shadow-lg origin-top"
              style={{
                top: navRef.current?.offsetHeight || '64px'
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="flex flex-col space-y-2 py-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                        activeSection === item.href
                          ? 'bg-purple-900/30 text-purple-400'
                          : 'text-gray-300 hover:bg-purple-900/20 hover:text-purple-300'
                      }`}
                      initial={{ x: -20, opacity: 0, rotateZ: -5 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        rotateZ: 0,
                        transition: { 
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 100,
                          damping: 10
                        }
                      }}
                      whileHover={{ 
                        x: 5,
                        scale: 1.02,
                        boxShadow: '0 4px 10px rgba(124, 58, 237, 0.3)'
                      }}
                    >
                      <motion.span 
                        className={`mr-3 ${
                          activeSection === item.href ? 'text-purple-400' : 'text-purple-400'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      >
                        {item.icon}
                      </motion.span>
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;