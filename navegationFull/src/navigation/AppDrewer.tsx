import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import AppTabs from './AppTabs';
import type { AppDrawerParamList } from '../types/navigation';
import MangasScreen from '../screens/MangasScreen';
import ConfigurationsScreen from '../screens/ConfigurationsScreen';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Animes"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Animes"
        component={AppTabs}
        options={{
          title: 'Minha Loja',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mangas"
        component={MangasScreen}
        options={{
          title: 'Mangas',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurations"
        component={ConfigurationsScreen}
        options={{
          title: 'Configurações',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}