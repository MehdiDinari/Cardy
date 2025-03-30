
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section className="py-16 bg-postcard-mint/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à créer votre carte postale ?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Exprimez vos sentiments à travers une carte postale unique et personnalisée. 
            Commencez dès aujourd'hui et envoyez un souvenir qui durera.
          </p>
          <Link to="/create">
            <Button className="btn-postcard text-lg px-8 py-6">
              <Mail className="h-5 w-5 mr-2" />
              Commencer à créer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
