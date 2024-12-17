import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/ui/HeroSection';
import { PropertySearch } from '../components/ui/PropertySearch';
import { PropertyCard } from '../components/ui/PropertyCard';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useProperties } from '../hooks/useProperties';

export function PropertiesPage() {
  const { properties, loading, error } = useProperties();

  return (
    <div>
      <HeroSection
        title="Descubre Tu Próximo Hogar"
        subtitle="Explora nuestra selección de propiedades exclusivas en las mejores zonas de Valencia"
        backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4">
        <PropertySearch />
        
        <div className="py-12">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : properties.length === 0 ? (
            <motion.div 
              className="text-center py-20 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No se encontraron propiedades disponibles.
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}