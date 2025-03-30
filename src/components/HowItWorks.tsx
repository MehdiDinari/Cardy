
import React from 'react';
import { MousePointerClick, Palette, Send } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick className="h-12 w-12 text-primary" />,
    title: 'Choisissez un modèle',
    description: 'Sélectionnez parmi notre large collection de modèles ou commencez avec une toile vierge.'
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: 'Personnalisez',
    description: 'Ajoutez vos photos, textes et éléments décoratifs pour créer une carte unique.'
  },
  {
    icon: <Send className="h-12 w-12 text-primary" />,
    title: 'Imprimez et envoyez',
    description: 'Nous imprimons votre création sur du papier de qualité et l\'envoyons directement au destinataire.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-postcard-lavender/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Créer et envoyer votre carte postale personnalisée est simple et rapide. Suivez ces étapes :
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex-1 card-container text-center relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2 text-3xl text-gray-300 font-light">
                  →
                </div>
              )}
              <div className="mb-6 bg-primary/10 p-4 rounded-full inline-flex justify-center items-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
