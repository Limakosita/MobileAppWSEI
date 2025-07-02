import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const stored = await AsyncStorage.getItem('user');
    if (!stored) return alert('Brak zarejestrowanego użytkownika');

    const parsed = JSON.parse(stored);
    if (parsed.username === username && parsed.password === password) {
      alert('Zalogowano pomyślnie');
      router.replace('/');
    } else {
      alert('Nieprawidłowe dane logowania');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logowanie</Text>
      <TextInput placeholder="Nazwa użytkownika" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Hasło" style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Zaloguj się" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
