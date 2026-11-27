import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PrimeraPantallaScreen() {
  const [nombre, setNombre] = useState('Aquilino');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Primera Pantalla</Text>

      <Button title="Ir a Segunda" onPress={() => router.push('/stack/p21/segunda')} />

      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre de usuario"
      />
      <Button
        title="Ir a Tercera con parámetro"
        onPress={() =>
          router.push({
            pathname: '/stack/p21/tercera',
            params: { userName: nombre },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, gap: 14, backgroundColor: '#fff' },
  titulo: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
});
