import { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  const [notificacoes, setNotificacoes] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <View style={styles.row}>
        <Text style={styles.texto}>
          Notificações: {notificacoes ? 'Ativadas' : 'Desativadas'}
        </Text>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
          trackColor={{ false: '#475569', true: '#A78BFA' }}
          thumbColor={notificacoes ? '#F8FAFC' : '#E2E8F0'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#0F172A',
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  texto: {
    color: '#E2E8F0',
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
});