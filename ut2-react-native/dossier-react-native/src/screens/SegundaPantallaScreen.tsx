import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SegundaPantallaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Segunda Pantalla</Text>
      <Button
        title="Ir a Tercera (como invitado)"
        onPress={() => router.push('/stack/p21/tercera')}
      />
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 14, backgroundColor: '#fff' },
  titulo: { fontSize: 20, fontWeight: 'bold' },
});
