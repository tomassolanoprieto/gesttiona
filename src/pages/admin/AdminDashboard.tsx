import React from 'react';
import { Building, FileText } from 'lucide-react';
import { AdminCard } from '../../components/admin/AdminCard';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminCard
            title="Propiedades"
            description="Gestiona las propiedades disponibles"
            icon={Building}
            actions={[
              {
                label: "Nueva Propiedad",
                path: "/admin/properties/new",
                primary: true
              },
              {
                label: "Ver todas las propiedades",
                path: "/admin/properties"
              }
            ]}
          />

          <AdminCard
            title="Blog"
            description="Gestiona los artículos del blog"
            icon={FileText}
            actions={[
              {
                label: "Nuevo Artículo",
                path: "/admin/blog/new",
                primary: true
              },
              {
                label: "Ver todos los artículos",
                path: "/admin/blog"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}