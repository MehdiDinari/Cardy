
import React from 'react';
import { Image, Type, Gift, Star, Palette, Send } from 'lucide-react';

const features = [
  {
    icon: <Image className="h-10 w-10 text-primary" />,
    title: 'Images personnalisées',
    description: 'Importez vos propres photos ou choisissez parmi notre collection d\'images.'
  },
  {
    icon: <Type className="h-10 w-10 text-primary" />,
    title: 'Texte personnalisable',
    description: 'Choisissez parmi une variété de polices et styles pour votre message.'
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'Design créatif',
    description: 'Ajoutez des stickers, des cadres et des effets pour rendre votre carte unique.'
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: 'Modèles prêts à l\'emploi',
    description: 'Utilisez nos modèles pour toutes les occasions et personnalisez-les.'
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: 'Options d\'emballage',
    description: 'Ajoutez une touche spéciale avec nos options d\'emballage cadeaux.'
  },
  {
    icon: <Send className="h-10 w-10 text-primary" />,
    title: 'Livraison mondiale',
    description: 'Nous imprimons et expédions vos cartes partout dans le monde.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-postcard-pink/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tout ce dont vous avez besoin</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre plateforme offre tous les outils nécessaires pour créer des cartes postales parfaites pour chaque occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-container hover:border-primary/20 hover:border-2 hover:-translate-y-1"
            >
              <div className="mb-4 bg-primary/10 p-3 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
