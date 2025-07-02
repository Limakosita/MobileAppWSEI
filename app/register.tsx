// ekran rejstracja
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !password) return alert('Uzupełnij wszystkie pola');
    await AsyncStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Zarejestrowano! Teraz się zaloguj.');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rejestracja</Text>
      <TextInput placeholder="Nazwa użytkownika" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Hasło" style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Zarejestruj się" onPress={handleRegister} />
      <View style={{ marginTop: 20 }} />
      <Button title="Masz konto? Zaloguj się" onPress={() => router.replace('/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
