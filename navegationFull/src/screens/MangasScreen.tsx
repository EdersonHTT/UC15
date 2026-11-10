import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { InicioStackParamList } from '../types/navigation';
import { useState } from 'react';
import { animes } from '../data/animes';

type Props = NativeStackScreenProps<InicioStackParamList, 'Mangas'>;

export default function MangasScreen({ navigation }: Props) {
    

    
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mangas Atuais</Text>
      <Text>Toque em um manga para ver os detalhes.</Text>

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
            <Text style={styles.nome}>{item.title}</Text>
            <Text>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.link}>Ver detalhes →</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F4F6F8' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  lista: { paddingVertical: 16, gap: 12 },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E5EA',
    gap: 8,
  },
  nome: { fontSize: 18, fontWeight: 'bold' },
  link: { color: '#1454BD', fontWeight: 'bold' },
});