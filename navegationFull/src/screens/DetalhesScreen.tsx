import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { animes } from '../data/animes';
import type { InicioStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList, 'Detalhes'>;

export default function DetalhesScreen({ navigation, route }: Props) {
  const { animeId } = route.params;
  const anime = animes.find((item) => item.id === animeId);

  if (!anime) {
    return (
      <View style={styles.container}>
        <Text>Anime não encontrado.</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{anime.title}</Text>
      <Text style={styles.preco}>
        R$ {anime.price.toFixed(2).replace('.', ',')}
      </Text>
      <Text>{anime.description}</Text>
      <Button title="Voltar para a lista" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 20,
    backgroundColor: '#FFFFFF',
  },
  titulo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  preco: { fontSize: 22, color: '#1454BD', fontWeight: 'bold' },
});