import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { InicioStackParamList } from '../types/navigation';
import { animes } from '../data/animes';
import Card from '../components/Card';

type Props = NativeStackScreenProps<InicioStackParamList, 'Mangas'>;

export default function MangasScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mangas Atuais</Text>
      <Text style={styles.subtitulo}>Toque em um manga para ver os detalhes.</Text>

      <FlatList
        data={animes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('Detalhes', { animeId: item.id })
            }
          >
            <Card anime={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0F172A',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
    color: '#F8FAFC',
  },
  subtitulo: {
    color: '#CBD5E1',
    marginBottom: 10,
    fontSize: 14,
  },
  lista: {
    paddingVertical: 16,
    gap: 12,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
  },
});