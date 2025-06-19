import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Composant séparé pour la bulle de discussion
const FloatingChat = ({ showChat, setShowChat }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null as File | null
  });
  const [fileName, setFileName] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let description = "Je vous répondrai dans les plus brefs délais.";
    
    if (formData.file) {
      description = `Fichier "${formData.file.name}" reçu avec votre message. ${description}`;
    }
    
    toast({
      title: "Message envoyé !",
      description: description,
    });
    setFormData({ name: '', email: '', message: '', file: null });
    setFileName('');
    setShowChat(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validation de la taille (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Fichier trop volumineux",
          description: "Veuillez sélectionner un fichier de moins de 5MB",
          variant: "destructive"
        });
        return;
      }
      
      setFormData({
        ...formData,
        file: file
      });
      setFileName(file.name);
    }
  };

  const removeFile = () => {
    setFormData({
      ...formData,
      file: null
    });
    setFileName('');
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-50 shadow-xl ${
          showChat 
            ? 'bg-gradient-to-r from-purple-700 to-pink-700 rotate-0' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rotate-0 hover:rotate-12'
        }`}
      >
        {showChat ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Bulle de discussion */}
      <div className={`fixed bottom-24 right-8 transition-all duration-500 z-50 ${
        showChat ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}>
        <Card className="bg-white/5 border-white/10 backdrop-blur-md w-80 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-purple-400" />
                Envoyez-moi un message
              </div>
              <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm"
                required
              />
              
              {/* Section pièce jointe */}
              <div className="space-y-2">
                <label className="flex items-center justify-center w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-white/20 transition-colors">
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip" 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  Joindre un fichier
                </label>
                
                {fileName && (
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm">
                    <span className="text-gray-300 truncate max-w-[180px]">{fileName}</span>
                    <button 
                      type="button" 
                      onClick={removeFile}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 text-sm"
              >
                <Send className="mr-2 h-4 w-4" />
                Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const Contact = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartProjectClick = () => {
    setShowChat(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rakotomalalasoheryalain@gmail.com",
      link: "mailto:rakotomalalasoheryalain@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "034 66 974 37",
      link: "tel:+261346697437"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Fianarantsoa, Madagascar",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-900/30 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discutons de vos projets Data Science ou de développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Restons en contact</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Diplômé de l'EMIT et passionné par l'innovation technologique, je suis toujours ouvert aux nouvelles 
                opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <a href={info.link} className="text-gray-300 hover:text-purple-400 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-8">
              <a href="https://linkedin.com/in/solohery-alain" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a href="https://github.com/rktalain" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Carte OpenStreetMap 3D */}
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=47.0794%2C-21.4616%2C47.0894%2C-21.4516&layer=mapnik&marker=-21.4566,47.0844"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à collaborer ?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Transformons vos idées en solutions innovantes ensemble !
            </p>
            <Button 
              onClick={handleStartProjectClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            >
              Discutons-en !
            </Button>
          </div>
        </div>
      </div>

      {/* Bulle de discussion flottante globale */}
      <FloatingChat showChat={showChat} setShowChat={setShowChat} />
    </section>
  );
};

export default Contact;