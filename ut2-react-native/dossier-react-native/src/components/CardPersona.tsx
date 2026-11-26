import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  id: string;
  onEliminar: (id: string) => void;
};

export default function CardPersona({ id, onEliminar }: Props) {
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const p = Number(peso);
  const a = Number(altura);
  const imcValido =
    peso.trim() !== '' &&
    altura.trim() !== '' &&
    !Number.isNaN(p) &&
    !Number.isNaN(a) &&
    a > 0;
  const imc = imcValido ? (p / (a * a)).toFixed(2) : '--';

  return (
    <View style={styles.card}>
      <View style={styles.fila}>
        <Text style={styles.titulo}>Tarjeta #{id}</Text>
        <Button title="Eliminar" color="crimson" onPress={() => onEliminar(id)} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={styles.imc}>
        {nombre.trim() ? `${nombre.trim()} - ` : ''}IMC: {imc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    gap: 8,
    backgroundColor: '#fff',
  },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titulo: { fontWeight: 'bold', fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 },
  imc: { fontWeight: 'bold', marginTop: 4 },
});
