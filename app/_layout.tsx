// app/_layout.tsx

import { Stack } from 'expo-router';
import { FavoritesProvider } from './context/FavouritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack />
    </FavoritesProvider>
  );
}
