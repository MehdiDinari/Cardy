
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface Template {
  id: number;
  title: string;
  image: string;
  category: string;
  description?: string;
}

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/create?template=${template.id}`);
  };
  
  return (
    <div className="template-card group">
      <img 
        src={template.image} 
        alt={template.title} 
        className="w-full aspect-[3/2] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-bold">{template.title}</h3>
        <p className="text-white/80">{template.category}</p>
        {template.description && (
          <p className="text-white/70 text-sm mt-1">{template.description}</p>
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button className="btn-postcard" onClick={handleClick}>Personnaliser</Button>
      </div>
    </div>
  );
};

export default TemplateCard;
