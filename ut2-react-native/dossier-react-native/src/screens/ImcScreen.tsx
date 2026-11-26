import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardPersona from '../components/CardPersona';

export default function ImcScreen() {
  const [tarjetas, setTarjetas] = useState<string[]>(['1']);
  const [siguienteId, setSiguienteId] = useState(2);

  const agregarTarjeta = () => {
    setTarjetas(actual => [...actual, String(siguienteId)]);
    setSiguienteId(id => id + 1);
  };

  const eliminarTarjeta = (id: string) => {
    setTarjetas(actual => actual.filter(item => item !== id));
  };

  return (
    <View style={styles.pantalla}>
      <View style={styles.cabecera}>
        <Text style={styles.titulo}>Cálculo de IMC</Text>
        <Button title="+" onPress={agregarTarjeta} />
      </View>

      <ScrollView contentContainerStyle={styles.lista}>
        {tarjetas.map(id => (
          <CardPersona key={id} id={id} onEliminar={eliminarTarjeta} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 20, paddingTop: 48, gap: 12 },
  cabecera: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  lista: { gap: 12, paddingBottom: 20 },
});
