import { create } from 'zustand';

// Define el tipo del estado
interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Crea el store
const useStore = create<AppState>((set) => ({
  count: 0, // Estado inicial
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
