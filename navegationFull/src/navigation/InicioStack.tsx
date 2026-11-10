import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

import AnimeScreen from '../screens/AnimeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import type { InicioStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator initialRouteName="Anime">
      <Stack.Screen
        name="Anime"
        component={AnimeScreen}
        options={{
          title: 'Minha Loja',
          headerLeft: () => <DrawerToggleButton tintColor="#1454BD" />,
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