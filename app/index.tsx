import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function IndexScreen() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        console.log('Znaleziony użytkownik:', user);

        if (!user) {
          router.replace('/register'); // jeśli brak użytkownika → rejestracja
        } else {
          setChecking(false); // jeśli jest użytkownik → pokaż główny ekran
        }
      } catch (error) {
        console.error('Błąd przy sprawdzaniu użytkownika:', error);
        router.replace('/register');
      }
    };

    checkLogin();
  }, []);

  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  // Tu możesz wstawić treść strony głównej aplikacji (dla zalogowanego użytkownika)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Twoja strona główna */}
    </View>
  );
}
