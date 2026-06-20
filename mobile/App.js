import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return <Routes />;
}
