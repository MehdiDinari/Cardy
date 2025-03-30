
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Canvas from '@/components/editor/Canvas';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Create = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-2">Créer votre carte postale</h1>
        <p className="text-muted-foreground mb-6">Personnalisez votre carte en quelques clics</p>
        
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
      </main>
      <Footer />
    </div>
  );
};

export default Create;
