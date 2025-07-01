import { router } from 'expo-router';
import { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FavoritesContext } from './context/FavouritesContext';
import { exercises } from './data/exercises';

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext);
  const favoriteExercises = exercises.filter((ex) => favorites.includes(ex.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ulubione ćwiczenia</Text>
      {favoriteExercises.length === 0 ? (
        <Text>Brak ulubionych ćwiczeń</Text>
      ) : (
        <FlatList
          data={favoriteExercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(`../exercises/${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  image: { width: 60, height: 60, marginRight: 12 },
  name: { fontSize: 18 },
});
