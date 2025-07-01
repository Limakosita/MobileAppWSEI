//przechowywanie ulubionych
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

type Favs = { favorites: string[], addFavorite: (id: string) => void, removeFavorite: (id: string) => void };

export const FavoritesContext = createContext<Favs>({
  favorites: [], addFavorite: ()=>{}, removeFavorite: ()=>{}
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(data => {
      if (data) setFavorites(JSON.parse(data));
    });
  }, []);

  const persist = (newFavs: string[]) => {
    setFavorites(newFavs);
    AsyncStorage.setItem('favorites', JSON.stringify(newFavs));
  };

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) persist([...favorites, id]);
  };

  const removeFavorite = (id: string) => {
    persist(favorites.filter(f => f !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
