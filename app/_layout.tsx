import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#14AE5C',
    onBackground: '#010101',
    onSurface: '#010101',
    outline: '#5E5E5E',
  },
};

export type Colores = typeof theme.colors;

export default function RootLayout() {
  const [loaded] = useFonts({
    OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
    OpenSansMedium: require('../assets/fonts/OpenSans-Medium.ttf'),
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
  });

  // Evitar render hasta que cargue la fuente
  if (!loaded) {
    return null; // o un Splash / Loader
  }

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
