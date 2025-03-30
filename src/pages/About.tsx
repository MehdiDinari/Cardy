
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Truck, Heart, Clock, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sophie Martin',
    role: 'Fondatrice & Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format'
  },
  {
    name: 'Thomas Dubois',
    role: 'Responsable Technique',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format'
  },
  {
    name: 'Emma Robert',
    role: 'Service Client',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format'
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-postcard-pink/20 py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">À propos de PostCarte</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Nous sommes passionnés par les connexions humaines et convaincus que les cartes postales 
              personnalisées sont un moyen unique de partager des moments précieux et des émotions sincères.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre histoire</h2>
              <p className="text-muted-foreground mb-4">
                PostCarte est né d'une idée simple : rendre l'envoi de cartes postales personnalisées aussi facile 
                que l'envoi d'un message numérique, mais avec tout le charme et l'émotion d'un objet physique.
              </p>
              <p className="text-muted-foreground mb-4">
                Fondée en 2023 par Sophie Martin, notre entreprise a commencé comme un petit atelier créatif 
                et s'est développée pour devenir une plateforme complète de création et d'envoi de cartes postales.
              </p>
              <p className="text-muted-foreground">
                Aujourd'hui, nous aidons des milliers de personnes à travers le monde à créer des souvenirs 
                durables et à maintenir des liens précieux avec leurs proches, même à distance.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581431886281-93ae50c7c9e6?q=80&w=1000&auto=format" 
                alt="Notre équipe au travail" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Mail className="h-10 w-10 text-primary" />, title: 'Connexion', description: 'Nous croyons au pouvoir des connexions humaines significatives.' },
                { icon: <Heart className="h-10 w-10 text-primary" />, title: 'Qualité', description: 'Nous nous engageons à offrir des produits de la plus haute qualité.' },
                { icon: <Clock className="h-10 w-10 text-primary" />, title: 'Rapidité', description: 'Nous valorisons votre temps et travaillons efficacement.' },
                { icon: <Truck className="h-10 w-10 text-primary" />, title: 'Fiabilité', description: 'Vous pouvez compter sur nous pour livrer vos souvenirs en toute sécurité.' }
              ].map((value, index) => (
                <div key={index} className="card-container text-center">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Notre équipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="card-container text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
