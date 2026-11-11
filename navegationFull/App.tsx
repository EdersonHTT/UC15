import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppDrawer from './src/navigation/AppDrewer';

const appTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8B5CF6',
    background: '#0F172A',
    card: '#111827',
    text: '#F8FAFC',
    border: '#1F2937',
    notification: '#8B5CF6',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#111827" animated />
      <NavigationContainer theme={appTheme}>
        <AppDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
