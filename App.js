import React from 'react';

import AppState from './context/app/AppState';

import AppTab from './navigation/AppTab';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <AppTab />
      </NavigationContainer>
    </AppState>
  );
}
