import React from 'react';
import AppState from './context/app/AppState';
import AppStack from './navigation/AppStack';

export default function App() {
  return (
    <AppState>
      <AppStack />
    </AppState>
  );
}