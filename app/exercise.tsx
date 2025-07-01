import { router } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { exercises } from './data/exercises';

export default function ExerciseListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista ćwiczeń</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`../exercises/${item.id}`)}
          >
            <Image source={{ uri: item.image }}  />
            <Image source={{ uri: item.gif }}  /> 
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
