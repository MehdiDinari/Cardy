
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Canvas from '@/components/editor/Canvas';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Save, Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';

const Create = () => {
  const handleSave = () => {
    toast.success("Votre carte a été sauvegardée !");
  };

  const handleExport = () => {
    toast.success("Votre carte a été exportée !");
  };

  const handleShare = () => {
    toast.success("Lien de partage copié dans le presse-papier !");
  };

  const handleOrder = () => {
    toast.success("Votre commande a été ajoutée au panier !");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Créer votre carte postale</h1>
            <p className="text-muted-foreground">Personnalisez votre carte en quelques clics</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Sauvegarder
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="front" className="mb-8">
          <TabsList>
            <TabsTrigger value="front">Recto</TabsTrigger>
            <TabsTrigger value="back">Verso</TabsTrigger>
          </TabsList>
          <TabsContent value="front" className="pt-4">
            <Canvas />
          </TabsContent>
          <TabsContent value="back" className="pt-4">
            <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
              <p className="text-muted-foreground">Le verso sera disponible bientôt...</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end mt-8">
          <Button className="btn-postcard" onClick={handleOrder}>
            Commander cette carte
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
