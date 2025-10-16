import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useAuth } from '@/contexts/auth-provider';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const {user}  = useAuth();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
       
        <Stack.Protected guard={!!user}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
           <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />  
        </Stack.Protected>

        <Stack.Protected guard={!user}>
           <Stack.Screen name="(auth)" options={{headerShown: false}} />  
        </Stack.Protected>
        
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
