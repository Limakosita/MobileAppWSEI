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
      <View style={styles.container}>
        <Text>Brak ulubionych ćwiczeń</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => router.push(`./exercise/${item.id}`)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: { width: 200, height: 120, borderRadius: 6, marginBottom: 6 },
  name: { fontSize: 18 },
});
