import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { FavoritesContext } from '../../context/FavouritesContext';
import { exercises } from '../../data/exercises';

export default function ExerciseDetailScreen() {
  const { id } = useLocalSearchParams();
const exerciseId = Array.isArray(id) ? id[0] : id;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const exercise = exercises.find((ex) => ex.id === exerciseId);
  const isFavorite = favorites.includes(exerciseId);

  if (!exercise) return <Text>Nie znaleziono ćwiczenia</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.gif }} style={styles.gif} />
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.series}>{exercise.series}</Text>
      <Button
        title={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
        onPress={() => isFavorite ? removeFavorite(exerciseId) : addFavorite(exerciseId)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  gif: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  series: { fontSize: 16, marginBottom: 20 },
});
