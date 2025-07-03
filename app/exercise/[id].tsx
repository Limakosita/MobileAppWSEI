import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FavoritesContext } from '../../context/FavouritesContext';
import { exercises } from '../../data/exercises';

export default function ExerciseDetailScreen() {
  const { id } = useLocalSearchParams();
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  if (!id || typeof id !== 'string') return null;

  const exercise = exercises.find((ex) => ex.id === id);
  if (!exercise) return <Text style={styles.error}>Ćwiczenie nie znalezione</Text>;

  const isFavorite = favorites.includes(id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.gif }} style={styles.gif} />
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.series}>{exercise.series}</Text>

      <Pressable
        style={[styles.button, isFavorite && styles.unfavorite]}
        onPress={() => (isFavorite ? removeFavorite(id) : addFavorite(id))}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  gif: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#2E2E2E',
  },
  description: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 8,
  },
  series: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#505050',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  unfavorite: {
    backgroundColor: '#7A0000',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  error: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50,
  },
});
