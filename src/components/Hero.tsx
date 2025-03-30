
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Créez des cartes postales <span className="text-primary">uniques</span> et <span className="text-primary">personnalisées</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Exprimez vos sentiments avec des cartes postales faites avec ❤️. 
              Notre éditeur simple vous permet de créer des souvenirs durables en quelques clics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-postcard">
                <Mail className="h-4 w-4 mr-2" />
                Commencer à créer
              </Button>
              <Button className="btn-postcard-outline">
                Voir les modèles
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative perspective-lg">
              <div className="absolute top-0 right-0 -rotate-6 transform animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1591036707533-d12e9794cf01?q=80&w=600&h=400&auto=format" 
                  alt="Carte postale de plage" 
                  className="w-48 md:w-64 h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute bottom-4 left-4 rotate-6 transform animate-float animation-delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1604538944082-3243b9b8661d?q=80&w=600&h=400&auto=format" 
                  alt="Carte postale de montagne" 
                  className="w-48 md:w-64 h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="relative z-10 transform animate-float animation-delay-400">
                <img 
                  src="https://images.unsplash.com/photo-1553708881-112abc53fe54?q=80&w=600&h=400&auto=format" 
                  alt="Carte postale urbaine" 
                  className="w-72 md:w-80 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
