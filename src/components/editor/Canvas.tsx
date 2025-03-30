
import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { Button } from '@/components/ui/button';
import { Image, Type, Square, Circle, Trash2, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeTab, setActiveTab] = useState('images');

  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: '#ffffff'
    });

    setCanvas(fabricCanvas);

    // Template de base - un cadre pour la carte postale
    const border = new fabric.Rect({
      width: 580,
      height: 380,
      fill: 'transparent',
      stroke: '#ddd',
      strokeWidth: 2,
      rx: 8,
      ry: 8,
      left: 10,
      top: 10,
      selectable: false
    });

    fabricCanvas.add(border);

    // Example placeholder text
    const text = new fabric.Textbox('Votre message ici', {
      left: 150,
      top: 100,
      width: 300,
      fontSize: 20,
      fontFamily: 'Quicksand',
      fill: '#333',
      textAlign: 'center'
    });

    fabricCanvas.add(text);

    toast.success("Éditeur de carte postale chargé !");

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  const handleAddText = () => {
    if (!canvas) return;
    
    const text = new fabric.Textbox('Cliquez pour éditer', {
      left: 150,
      top: 150,
      width: 300,
      fontSize: 20,
      fontFamily: 'Quicksand',
      fill: '#333',
      textAlign: 'center'
    });
    
    canvas.add(text);
    canvas.setActiveObject(text);
    toast("Texte ajouté ! Cliquez pour éditer");
  };

  const handleAddShape = (type: 'rect' | 'circle') => {
    if (!canvas) return;
    
    let shape;
    
    if (type === 'rect') {
      shape = new fabric.Rect({
        left: 150,
        top: 150,
        width: 100,
        height: 100,
        fill: '#F8D7DA',
        stroke: '#F5C6CB',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      });
    } else {
      shape = new fabric.Circle({
        left: 150,
        top: 150,
        radius: 50,
        fill: '#D1ECF1',
        stroke: '#BEE5EB',
        strokeWidth: 1
      });
    }
    
    canvas.add(shape);
    canvas.setActiveObject(shape);
    toast(`Forme ${type === 'rect' ? 'rectangulaire' : 'circulaire'} ajoutée !`);
  };

  const handleDelete = () => {
    if (!canvas) return;
    
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
      toast("Élément supprimé !");
    } else {
      toast.error("Veuillez sélectionner un élément à supprimer");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canvas || !e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (!event.target?.result) return;
      
      fabric.Image.fromURL(event.target.result.toString(), (img) => {
        // Redimensionner l'image si elle est trop grande
        const maxSize = 300;
        if (img.width && img.height) {
          if (img.width > img.height) {
            if (img.width > maxSize) {
              img.scaleToWidth(maxSize);
            }
          } else {
            if (img.height > maxSize) {
              img.scaleToHeight(maxSize);
            }
          }
        }
        
        img.set({
          left: 150,
          top: 150
        });
        
        canvas.add(img);
        canvas.setActiveObject(img);
        toast.success("Image ajoutée à votre carte !");
      });
    };
    
    reader.readAsDataURL(file);
    e.target.value = ''; // Reset input
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-3/4">
        <div className="border rounded-xl p-4 bg-white shadow-md">
          <canvas ref={canvasRef} className="mx-auto" />
        </div>
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={handleDelete} className="text-destructive hover:bg-destructive/10">
            <Trash2 className="h-4 w-4 mr-2" />
            Supprimer
          </Button>
          <Button className="btn-postcard">
            <Download className="h-4 w-4 mr-2" />
            Télécharger
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/4 bg-white rounded-xl border p-4 shadow-md">
        <h3 className="font-bold mb-4 text-lg">Personnalisation</h3>
        <Tabs defaultValue="images" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="text">Texte</TabsTrigger>
            <TabsTrigger value="shapes">Formes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="images" className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">Ajoutez vos images ou photos à la carte</p>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Image className="w-8 h-8 mb-3 text-gray-400" />
                <p className="text-sm text-gray-500">Cliquez pour ajouter une image</p>
              </div>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </TabsContent>
          
          <TabsContent value="text" className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">Ajoutez du texte à votre carte</p>
            <Button onClick={handleAddText} className="w-full">
              <Type className="h-4 w-4 mr-2" />
              Ajouter du texte
            </Button>
          </TabsContent>
          
          <TabsContent value="shapes" className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">Ajoutez des formes décoratives</p>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => handleAddShape('rect')} variant="outline">
                <Square className="h-4 w-4 mr-2" />
                Rectangle
              </Button>
              <Button onClick={() => handleAddShape('circle')} variant="outline">
                <Circle className="h-4 w-4 mr-2" />
                Cercle
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Canvas;
