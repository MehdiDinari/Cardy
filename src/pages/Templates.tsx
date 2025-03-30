
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TemplateCard, { Template } from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const templates: Template[] = [
  {
    id: 1,
    title: 'Destination plage',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&h=400&auto=format',
    category: 'Voyage',
    description: 'Parfait pour partager vos souvenirs de vacances ensoleillées.'
  },
  {
    id: 2,
    title: 'Joyeux anniversaire',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=600&h=400&auto=format',
    category: 'Anniversaire',
    description: 'Souhaitez un joyeux anniversaire avec cette carte festive.'
  },
  {
    id: 3,
    title: 'Félicitations',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&h=400&auto=format',
    category: 'Événements',
    description: 'Célébrez les réussites avec cette carte élégante.'
  },
  {
    id: 4,
    title: 'Souvenirs urbains',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=600&h=400&auto=format',
    category: 'Voyage',
    description: 'Partagez vos aventures urbaines avec ce design moderne.'
  },
  {
    id: 5,
    title: 'Fleurs de printemps',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&h=400&auto=format',
    category: 'Nature',
    description: 'Une carte florale parfaite pour les occasions printanières.'
  },
  {
    id: 6,
    title: 'Bonnes fêtes',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=600&h=400&auto=format',
    category: 'Fêtes',
    description: 'Souhaitez de joyeuses fêtes avec cette carte chaleureuse.'
  },
  {
    id: 7,
    title: 'Montagnes majestueuses',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&h=400&auto=format',
    category: 'Nature',
    description: 'Capturez la beauté des montagnes avec ce design inspirant.'
  },
  {
    id: 8,
    title: 'Merci beaucoup',
    image: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=600&h=400&auto=format',
    category: 'Remerciements',
    description: 'Exprimez votre gratitude avec cette carte élégante.'
  },
  {
    id: 9,
    title: 'Coucher de soleil',
    image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=600&h=400&auto=format',
    category: 'Paysages',
    description: 'Un magnifique coucher de soleil pour partager des moments sereins.'
  }
];

const Templates = () => {
  const categories = Array.from(new Set(templates.map(t => t.category)));
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = activeCategory === 'Tous' || template.category === activeCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (template.description && template.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-postcard-blue/20 py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Galerie de modèles</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Parcourez notre collection de modèles et trouvez l'inspiration pour votre prochaine carte postale.
            </p>
            
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Rechercher un modèle..." 
                className="pl-10 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            <Button 
              variant={activeCategory === 'Tous' ? 'default' : 'outline'} 
              className="rounded-full font-quicksand"
              onClick={() => setActiveCategory('Tous')}
            >
              Tous
            </Button>
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={activeCategory === category ? 'default' : 'outline'} 
                className="rounded-full font-quicksand"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Aucun modèle ne correspond à votre recherche. Essayez d'autres termes ou catégories.
              </p>
              <Button 
                className="mt-4 btn-postcard-outline"
                onClick={() => {
                  setActiveCategory('Tous');
                  setSearchQuery('');
                }}
              >
                Voir tous les modèles
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
