import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CirculosScreen() {
  const [colores, setColores] = useState<string[]>([]);
  const [esWrap, setEsWrap] = useState(true);
  const [esRow, setEsRow] = useState(true);

  const agregarCirculo = () => {
    const r = Math.min(255, Math.floor(Math.random() * 256));
    const g = Math.min(255, Math.floor(Math.random() * 256));
    const b = Math.min(255, Math.floor(Math.random() * 256));
    setColores(prev => [...prev, `rgb(${r}, ${g}, ${b})`]);
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.controles}>
        <TouchableOpacity style={styles.botonAgregar} onPress={agregarCirculo}>
          <Text style={styles.textoBoton}>AGREGAR CÍRCULO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonWrap} onPress={() => setEsWrap(w => !w)}>
          <Text style={styles.textoBoton}>
            {esWrap ? 'wrap. Pulse para cambiar' : 'nowrap. Pulse para cambiar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonRow} onPress={() => setEsRow(r => !r)}>
          <Text style={styles.textoBoton}>
            {esRow ? 'row. Pulse para cambiar' : 'column. Pulse para cambiar'}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.escenario,
          {
            flexDirection: esRow ? 'row' : 'column',
            flexWrap: esWrap ? 'wrap' : 'nowrap',
          },
        ]}
      >
        {colores.map((color, index) => (
          <View key={index} style={[styles.circulo, { backgroundColor: color }]}>
            <Text style={styles.textoCirculo}>C {index + 1}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#b0b0b0',
  },
  controles: {
    gap: 6,
    marginBottom: 12,
  },
  botonAgregar: {
    backgroundColor: '#2196f3',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  botonWrap: {
    backgroundColor: '#a52a2a',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  botonRow: {
    backgroundColor: '#ffa000',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  escenario: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 12,
    gap: 10,
  },
  circulo: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    borderWidth: 2,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCirculo: {
    color: '#444',
    fontSize: 12,
    fontWeight: '600',
  },
});
