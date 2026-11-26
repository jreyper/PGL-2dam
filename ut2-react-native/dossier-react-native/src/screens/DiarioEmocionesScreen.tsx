import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

interface Entrada {
  id: string;
  texto: string;
  fecha: string;
  emocion: 'happy' | 'sad' | 'neutral';
}

export default function DiarioEmocionesScreen() {
  const [texto, setTexto] = useState('');
  const [entradas, setEntradas] = useState<Entrada[]>([]);

  const agregarEntrada = () => {
    if (!texto.trim()) return;

    let emocion: 'happy' | 'sad' | 'neutral' = 'neutral';
    if (texto.includes(':-)')) {
      emocion = 'happy';
    } else if (texto.includes(':-(')) {
      emocion = 'sad';
    }

    const ahora = new Date();
    const fechaFormateada = `${ahora.toLocaleDateString()} ${ahora.toLocaleTimeString()}`;

    const nuevaEntrada: Entrada = {
      id: Date.now().toString(),
      texto,
      fecha: fechaFormateada,
      emocion,
    };

    setEntradas((actuales) => [nuevaEntrada, ...actuales]);
    setTexto('');
  };

  const renderIcono = (emocion: Entrada['emocion']) => {
    if (emocion === 'happy') return <Text style={styles.icono}>😊</Text>;
    if (emocion === 'sad') return <Text style={styles.icono}>😢</Text>;
    return <Text style={styles.icono}>😐</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diario de Emociones</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe cómo te sientes (usa :-) o :-()..."
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Guardar entrada" onPress={agregarEntrada} />

      <FlatList
        data={entradas}
        keyExtractor={(item) => item.id}
        style={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.fecha}>{item.fecha}</Text>
              {renderIcono(item.emocion)}
            </View>
            <Text style={styles.textoEntrada}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 10 },
  lista: { marginTop: 20 },
  card: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#eee' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  fecha: { fontSize: 12, color: '#666' },
  icono: { fontSize: 24 },
  textoEntrada: { fontSize: 16, color: '#333' },
});
