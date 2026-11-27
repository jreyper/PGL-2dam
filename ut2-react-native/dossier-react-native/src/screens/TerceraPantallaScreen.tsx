import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TerceraPantallaScreen() {
  const { userName } = useLocalSearchParams<{ userName?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola, {userName || 'invitado'}</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 14, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold' },
});
