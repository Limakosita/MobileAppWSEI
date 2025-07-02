import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { FavoritesContext } from '../../context/FavouritesContext';
import { exercises } from '../../data/exercises';

export default function ExerciseDetailScreen() {
  const { id } = useLocalSearchParams();
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  if (!id || typeof id !== 'string') return <Text>Brak ID</Text>;

  const exercise = exercises.find((ex) => ex.id === id);
  if (!exercise) return <Text>Ćwiczenie nie znalezione</Text>;

  const isFavorite = favorites.includes(id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.gif }} style={styles.gif} />
      <Text>{exercise.description}</Text>
      <Text>{exercise.series}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
          onPress={() => {
            if (isFavorite) {
              removeFavorite(id);
            } else {
              addFavorite(id);
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  gif: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 12 },
});
