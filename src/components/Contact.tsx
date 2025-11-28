import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  file: File | null;
}

/* ==================== FLOATING CHAT (inchangé) ==================== */
const FloatingChat = ({ showChat, setShowChat }: { showChat: boolean; setShowChat: (show: boolean) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', subject: '', message: '', file: null
  });
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      if (formData.file) formDataToSend.append('file', formData.file);

      const response = await fetch('https://backfolio-ium3.onrender.com/api/send-email', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Erreur lors de l'envoi");

      toast({
        title: (
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
            <span>Message envoyé !</span>
          </div>
        ),
        description: "Je vous répondrai dans les plus brefs délais.",
      });

      setFormData({ name: '', email: '', subject: '', message: '', file: null });
      setFileName('');
      setShowChat(false);
    } catch (error: any) {
      toast({
        title: (
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
            <span>Erreur</span>
          </div>
        ),
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "Fichier trop volumineux", description: "Max 5 Mo", variant: "destructive" });
        return;
      }
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }));
    setFileName('');
  };

  return (
    <>
      <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-50 shadow-xl ${
          showChat 
            ? 'bg-gradient-to-r from-purple-700 to-pink-700' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:rotate-12'
        }`}
        aria-label={showChat ? "Fermer" : "Ouvrir le chat"}
      >
        {showChat ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>

      {showChat && (
        <div className="fixed bottom-24 right-8 z-50 transition-all duration-500">
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
                <input name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm" />
                <input name="email" type="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm" />
                <input name="subject" placeholder="Objet" value={formData.subject} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm" />
                <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows={3} required className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm" />

                <div className="space-y-2">
                  <label className="flex items-center justify-center w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-white/20">
                    <input type="file" onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    Joindre un fichier
                  </label>
                  {fileName && (
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm">
                      <span className="text-gray-300 truncate max-w-[180px]">{fileName}</span>
                      <button type="button" onClick={removeFile} className="text-gray-400 hover:text-white">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 text-sm">
                  {isLoading ? (
                    <>Envoi en cours...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Envoyer</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

/* ==================== COMPOSANT CONTACT COMPLET (CARTE RÉDUITE) ==================== */
const Contact = () => {
  const [showChat, setShowChat] = useState(false);
  const [mapInitialized, setMapInitialized] = useState(false);

  const handleStartProjectClick = () => setShowChat(true);

  const contactInfo = [
    { icon: Mail, title: "Email", value: "rakotomalalasoheryalain@gmail.com", link: "mailto:rakotomalalasoheryalain@gmail.com" },
    { icon: Phone, title: "Téléphone", value: "034 66 974 37 (WhatsApp)", link: "tel:+261346697437" },
    { icon: MapPin, title: "Localisation", value: "Mobile (Antananarivo - Fianarantsoa - Toliara)", link: "#" }
  ];

  useEffect(() => {
    if (mapInitialized) return;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    script.onload = () => {
      const L = (window as any).L;

      const map = L.map('contact-map').setView([-19.5, 46.5], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      const redIcon = L.divIcon({ html: `<div style="background:#ef4444;width:28px;height:28px;border-radius:50%;border:4px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.6);"></div>`, iconSize: [28, 28], iconAnchor: [14, 14] });
      const blueIcon = L.divIcon({ html: `<div style="background:#3b82f6;width:28px;height:28px;border-radius:50%;border:4px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.6);"></div>`, iconSize: [28, 28], iconAnchor: [14, 14] });
      const greenIcon = L.divIcon({ html: `<div style="background:#10b981;width:28px;height:28px;border-radius:50%;border:4px solid white;box-shadow:0 3px 12px rgba(0,0,0,0.6);"></div>`, iconSize: [28, 28], iconAnchor: [14, 14] });

      L.marker([-18.8792, 47.5079], { icon: redIcon }).addTo(map).bindPopup("<b style='color:#ef4444'>Antananarivo</b><br>Capitale").openPopup();
      L.marker([-21.4545, 47.0857], { icon: blueIcon }).addTo(map).bindPopup("<b style='color:#3b82f6'>Fianarantsoa</b><br>Hautes Terres");
      L.marker([-23.3516, 43.6676], { icon: greenIcon }).addTo(map).bindPopup("<b style='color:#10b981'>Toliara</b><br>Côte sud-ouest");

      map.fitBounds([[-18.8792, 47.5079], [-21.4545, 47.0857], [-23.3516, 43.6676]], { padding: [40, 40] });
      setMapInitialized(true);
    };

    document.body.appendChild(script);
  }, [mapInitialized]);

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discutons de vos projets Data ou de développement d'application
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* === COLONNE GAUCHE === */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Restons en contact</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Diplômé de l'EMIT et passionné par l'innovation technologique, je suis toujours ouvert aux nouvelles opportunités et collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <a href={info.link} className="text-gray-300 hover:text-purple-400 transition">{info.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-8">
              <a href="https://linkedin.com/in/solohery-alain" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a href="https://github.com/rktalain" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Github className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* === COLONNE DROITE : CARTE RÉDUITE + LÉGENDE EN BAS === */}
          <div className="space-y-6">
            {/* CARTE RÉDUITE À 420px */}
            <div className="h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div id="contact-map" className="w-full h-full"></div>
            </div>

            {/* LÉGENDE EN DESSOUS */}
            <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-red-500 rounded-full ring-4 ring-white shadow-lg"></div>
                  <span className="font-semibold">Antananarivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-blue-500 rounded-full ring-4 ring-white shadow-lg"></div>
                  <span className="font-semibold">Fianarantsoa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-emerald-500 rounded-full ring-4 ring-white shadow-lg"></div>
                  <span className="font-semibold">Toliara</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === BOUTON FINAL === */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-10 rounded-2xl border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">Prêt à collaborer ?</h3>
            <p className="text-gray-300 text-lg mb-8">Transformons vos idées en solutions innovantes !</p>
            <Button onClick={handleStartProjectClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg rounded-full shadow-lg">
              Discutons-en !
            </Button>
          </div>
        </div>
      </div>

      <FloatingChat showChat={showChat} setShowChat={setShowChat} />
    </section>
  );
};

export default Contact;