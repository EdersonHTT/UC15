import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppTabs from './navigation/AppTabs';
import AppDrawer from './navigation/AppDrawer';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}