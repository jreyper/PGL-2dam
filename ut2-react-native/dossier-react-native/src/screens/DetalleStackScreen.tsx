import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetalleStackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Estás en la pantalla de Detalle</Text>
      <Button title="Volver atrás" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: '#fff' },
  texto: { fontSize: 18 },
});
