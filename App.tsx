import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import React from 'react';

export default function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

// Rejestracja aplikacji
registerRootComponent(App);
