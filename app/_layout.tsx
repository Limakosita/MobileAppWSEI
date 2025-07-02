import { Slot } from 'expo-router';
import { FavoritesProvider } from '../context/FavouritesContext';

export default function Layout() {
  return (
    <FavoritesProvider>
      <Slot />
    </FavoritesProvider>
  );
}
