import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import { FavoritesProvider } from '../context/FavouritesContext';

export default function Layout() {
  return (
    <FavoritesProvider>
      <SafeAreaView style={styles.root}>
        <Slot />
      </SafeAreaView>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
});
