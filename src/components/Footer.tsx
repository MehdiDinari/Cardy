
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const emailInput = target.querySelector('input[type="email"]') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      toast.success("Merci de vous être inscrit à notre newsletter !");
      emailInput.value = '';
    } else {
      toast.error("Veuillez entrer une adresse email valide");
    }
  };

  return (
    <footer className="bg-postcard-blue/30 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Mail className="h-6 w-6 text-primary mr-2" />
              <span className="font-comfortaa font-bold text-xl">Cardy</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Créez des cartes postales uniques et personnalisées pour toutes les occasions.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-quicksand font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Créer', 'Modèles', 'À propos'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-quicksand font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Contact', 'Livraison', 'Remboursements'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/support/${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-quicksand font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Abonnez-vous pour recevoir nos dernières nouveautés et offres spéciales.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-2 rounded-l-full border-y border-l focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-r-full hover:bg-primary/90 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cardy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
