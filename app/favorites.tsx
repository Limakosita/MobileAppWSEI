import { router } from 'expo-router';
import { useContext } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FavoritesContext } from '../context/FavouritesContext';
import { exercises } from '../data/exercises';

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext);
  const favoriteExercises = exercises.filter((ex) => favorites.includes(ex.id));

  if (favoriteExercises.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Brak ulubionych ćwiczeń</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push(`/exercise/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#CCCCCC', fontSize: 18 },
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: '#3E3E3E',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 120 },
  name: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 12,
  },
});
