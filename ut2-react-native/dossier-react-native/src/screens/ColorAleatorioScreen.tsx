import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const COLORES = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lavender', 'peachpuff'];

export default function ColorAleatorioScreen() {
  const [fondo, setFondo] = useState('white');

  const proponerColor = () => {
    const indice = Math.floor(Math.random() * COLORES.length);
    const colorPropuesto = COLORES[indice];

    Alert.alert(
      'Cambiar color',
      `¿Quieres aplicar el color "${colorPropuesto}" al fondo?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Aceptar', onPress: () => setFondo(colorPropuesto) },
      ]
    );
  };

  return (
    <View style={[styles.pantalla, { backgroundColor: fondo }]}>
      <Text style={styles.texto}>Color actual: {fondo}</Text>
      <Button title="Cambiar de color" onPress={proponerColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  texto: { fontSize: 18, fontWeight: 'bold' },
});
