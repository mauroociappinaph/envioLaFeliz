import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import useStore from '../store/useStore.ts';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const Map = () => {
  // Accede al estado y las acciones del store
  const { location, setLocation } = useStore();

  // Carga la API de Google Maps
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  });

  // Maneja errores de carga
  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={location} // Usa la ubicación del store
      onClick={(e) => {
        // Actualiza la ubicación al hacer clic en el mapa
        if (e.latLng) {
          setLocation(e.latLng.lat(), e.latLng.lng());
        }
      }}
    >
      <Marker position={location} /> {/* Usa la ubicación del store */}
    </GoogleMap>
  );
};

export default Map;
