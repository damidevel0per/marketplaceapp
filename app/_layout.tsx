
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { PaperProvider, MD3LightTheme as DefaultTheme,} from 'react-native-paper';

export const unstable_settings = {
  anchor: '(tabs)',
};

//paleta de colores de la app
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


export default function RootLayout() {

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
