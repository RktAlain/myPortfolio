
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rohit.kumar@email.com",
      link: "mailto:rohit.kumar@email.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 XX XX XX XX",
      link: "tel:+33xxxxxxxxx"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
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
            Discutons de vos projets Data Science et de la façon dont je peux vous aider
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Restons en contact</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations passionnantes. 
                N'hésitez pas à me contacter pour discuter de vos projets de Data Science !
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
              <a href="https://linkedin.com/in/rohit-kumar" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a href="https://github.com/rktalain" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à collaborer ?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Transformons vos données en insights stratégiques ensemble !
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
              Démarrons un projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
