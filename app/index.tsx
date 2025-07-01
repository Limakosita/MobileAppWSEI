import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oto GymBro!</Text>
      <Button title="Wyszukaj ćwiczenie" onPress={() => router.push('./exercise')} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Ulubione ćwiczenia" onPress={() => router.push('./favorites')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 40 },
});
