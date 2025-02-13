import { create } from 'zustand';

// Define el tipo del estado
interface AppState {
  location: { lat: number; lng: number };
  setLocation: (lat: number, lng: number) => void;
  resetLocation: () => void;
}

// Crea el store con la ubicación inicial en Mar del Plata
const useStore = create<AppState>((set) => ({
  location: { lat: -34.6037, lng: -58.3816 },
  setLocation: (lat, lng) => set({ location: { lat, lng } }),
  resetLocation: () => set({ location: { lat: -34.6037, lng: -58.3816 } }),
}));

export default useStore;
