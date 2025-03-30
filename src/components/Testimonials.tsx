
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format',
    text: 'J\'ai créé une carte pour l\'anniversaire de ma grand-mère avec ses photos préférées. Elle était enchantée ! La qualité d\'impression est excellente.',
    rating: 5
  },
  {
    name: 'Thomas L.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format',
    text: 'Interface intuitive et service rapide. J\'utilise PostCarte pour toutes mes occasions spéciales maintenant.',
    rating: 5
  },
  {
    name: 'Emma R.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format',
    text: 'Je vis à l\'étranger et PostCarte me permet d\'envoyer des cartes personnalisées à ma famille en France. Le service est impeccable !',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez l'expérience de nos clients qui ont créé et envoyé des cartes postales personnalisées avec notre service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-container flex flex-col"
            >
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground flex-1">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
