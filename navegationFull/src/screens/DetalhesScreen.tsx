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
        <Text style={styles.emptyText}>Anime não encontrado.</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{anime.title.romaji}</Text>
      <Text style={styles.preco}>{anime.title.english}</Text>
      <Text style={styles.descricao}>{anime.description}</Text>
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
    backgroundColor: '#0F172A',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: '#F8FAFC',
  },
  preco: {
    fontSize: 20,
    color: '#A78BFA',
    fontWeight: '700',
  },
  descricao: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: '#E2E8F0',
  },
  emptyText: {
    color: '#F8FAFC',
    fontSize: 18,
  },
});