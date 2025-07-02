//ekran strona główna
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Witaj w GymBro!</Text>

      <View style={{ marginVertical: 20 }}>
        <Button title="Wyszukaj ćwiczenie" onPress={() => router.push('/exercise')} />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Button title="Ulubione ćwiczenia" onPress={() => router.push('/favorites')} />
      </View>

      <Button title="Wyloguj się" color="red" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});
