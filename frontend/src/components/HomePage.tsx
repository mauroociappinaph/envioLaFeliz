import React from 'react';
import useStore from '../store/useStore.ts';
import Map from './Map.tsx';

const HomePage = () => {
const { location, resetLocation } = useStore();
    return (
        <div className="App">
            <h1>Envíos La Feliz</h1>
      <p>Ubicación: Lat {location.lat.toFixed(4)}, Lng {location.lng.toFixed(4)}</p>
      <button onClick={resetLocation}>Restablecer Ubicación</button>
      <Map />
        </div>
    );
};

export default HomePage;
