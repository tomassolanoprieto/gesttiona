import { useState, useEffect } from 'react';
import { getProperties } from '../lib/api/properties';
import type { Property } from '../types/property';
import { featuredProperties } from '../data/properties';

export function useProperties(useFallback = true) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProperties();
        setProperties(data);
      } catch (err) {
        console.error('Error loading properties:', err);
        setError('Error al cargar las propiedades. Por favor, inténtalo de nuevo más tarde.');
        
        // Use fallback data if enabled
        if (useFallback) {
          setProperties(featuredProperties);
          setError(null);
        }
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [useFallback]);

  return { properties, loading, error };
}