import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

import AnimeScreen from '../screens/AnimeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import type { InicioStackParamList } from '../types/navigation';
import MangasScreen from '../screens/MangasScreen';

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0F172A',
        },
        headerTintColor: '#F8FAFC',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 20,
        },
        contentStyle: {
          backgroundColor: '#0F172A',
        },
      }}
    >
      <Stack.Screen
        name="Anime"
        component={AnimeScreen}
        options={{
          title: 'Meus Animes',
          headerLeft: () => <DrawerToggleButton tintColor="#F8FAFC" />,
        }}
      />
      <Stack.Screen
        name="Mangas"
        component={MangasScreen}
        options={{
          title: 'Meus Mangas',
          headerLeft: () => <DrawerToggleButton tintColor="#F8FAFC" />,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{ title: 'Detalhes do Anime' }}
      />
    </Stack.Navigator>
  );
}