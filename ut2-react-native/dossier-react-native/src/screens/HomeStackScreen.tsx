import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeStackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pantalla Principal (HomeScreen)</Text>
      <Link href="/stack/p20/detalle" style={styles.boton}>
        Ir a detalle
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: '#fff' },
  texto: { fontSize: 20, fontWeight: 'bold' },
  boton: { backgroundColor: '#0066cc', color: '#fff', padding: 12, borderRadius: 8 },
});
