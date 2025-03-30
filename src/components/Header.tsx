
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Créer', path: '/create' },
    { name: 'Modèles', path: '/templates' },
    { name: 'À propos', path: '/about' },
  ];

  const NavLinks = () => (
    <div className="flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="font-quicksand text-foreground/80 hover:text-primary font-medium transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  const ActionButtons = () => (
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
        <ShoppingCart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
        <User className="h-5 w-5" />
      </Button>
      <Button className="btn-postcard">
        <Mail className="h-4 w-4 mr-2" />
        Créer une carte
      </Button>
    </div>
  );

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-quicksand text-xl text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <hr className="my-2" />
          <Button className="btn-postcard w-full">
            <Mail className="h-4 w-4 mr-2" />
            Créer une carte
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-2" />
            <span className="font-comfortaa font-bold text-xl">PostCarte</span>
          </Link>
          {!isMobile && <NavLinks />}
        </div>
        
        {isMobile ? <MobileMenu /> : <ActionButtons />}
      </div>
    </header>
  );
};

export default Header;
