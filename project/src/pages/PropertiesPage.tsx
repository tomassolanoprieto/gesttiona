import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { PropertySearch } from '../components/ui/PropertySearch';
import { PropertyCard } from '../components/ui/PropertyCard';

const sampleProperties = [
  {
    id: '1',
    title: 'Villa Moderna en Valencia',
    price: 450000,
    location: 'Valencia, España',
    description: 'Hermosa villa moderna con vistas panorámicas',
    bedrooms: 4,
    bathrooms: 3,
    size: 250,
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    tags: ['Piscina', 'Jardín', 'Garaje'],
    type: 'venta' as const,
    featured: true
  },
];

export function PropertiesPage() {
  return (
    <div>
      <HeroSection
        title="Descubre Tu Próximo Hogar"
        subtitle="Explora nuestra selección de propiedades exclusivas en las mejores zonas de Valencia"
        backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <div className="container mx-auto px-4">
        <PropertySearch />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}