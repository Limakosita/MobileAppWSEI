import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const FavoritesContext = createContext({
  favorites: [] as string[],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const stored = await AsyncStorage.getItem('favorites');
      if (stored) setFavorites(JSON.parse(stored));
    };
    loadFavorites();
  }, []);

  const saveFavorites = async (newFavs: string[]) => {
    setFavorites(newFavs);
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavs));
  };

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      const updated = [...favorites, id];
      saveFavorites(updated);
    }
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((fav) => fav !== id);
    saveFavorites(updated);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
