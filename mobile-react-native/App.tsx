import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

/**
 * The app is a single, continuously scrolling Apple-style landing page.
 * There is no tab navigation and no secondary screens — Home is the app.
 */
export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  );
}
