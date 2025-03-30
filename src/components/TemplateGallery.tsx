
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const templates = [
  {
    id: 1,
    title: 'Destination plage',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&h=400&auto=format',
    category: 'Voyage'
  },
  {
    id: 2,
    title: 'Joyeux anniversaire',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=600&h=400&auto=format',
    category: 'Anniversaire'
  },
  {
    id: 3,
    title: 'Félicitations',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&h=400&auto=format',
    category: 'Événements'
  },
  {
    id: 4,
    title: 'Souvenirs urbains',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=600&h=400&auto=format',
    category: 'Voyage'
  },
  {
    id: 5,
    title: 'Fleurs de printemps',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&h=400&auto=format',
    category: 'Nature'
  },
  {
    id: 6,
    title: 'Bonnes fêtes',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=600&h=400&auto=format',
    category: 'Fêtes'
  }
];

const TemplateGallery = () => {
  const categories = Array.from(new Set(templates.map(t => t.category)));

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Modèles populaires</h2>
          <Link to="/templates">
            <Button variant="ghost" className="text-primary hover:text-primary/90 font-medium">
              Voir tous les modèles
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button variant="outline" className="rounded-full font-quicksand">
            Tous
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="rounded-full font-quicksand">
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="template-card group">
              <img 
                src={template.image} 
                alt={template.title} 
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold">{template.title}</h3>
                <p className="text-white/80">{template.category}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button className="btn-postcard">Personnaliser</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;
