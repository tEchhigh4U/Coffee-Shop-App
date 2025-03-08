import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Appearance } from 'react-native';

import { Colors } from '@/constants/Colors'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()
  
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.headerBackground}, headerTintColor: theme.text, headerShadowVisible: false }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
        
        <Stack.Screen name='index' options={{ title: 'Home', headerShown: false}}/>
        <Stack.Screen name='menu' options={{ title: 'Menu', headerTitle:'Coffee Shop Menu', headerShown: true}}/>
        <Stack.Screen name='contact' options={{ title: 'Contact Us', headerTitle: 'Contact Us', headerShown: true}}/>
        
        <Stack.Screen name="+not-found" options={ {headerShown: false}} />
      </Stack>
  );
}
