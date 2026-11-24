import { useState } from 'react';
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  processColor,
} from 'react-native';

export default function IntroducirColorScreen() {
  const [fondo, setFondo] = useState('white');
  const [visible, setVisible] = useState(false);
  const [colorEscrito, setColorEscrito] = useState('lightblue');

  const aceptarColor = () => {
    const color = colorEscrito.trim().toLowerCase();

    if (color !== '' && processColor(color) != null) {
      setFondo(color);
      setVisible(false);
    } else {
      Alert.alert('Color no válido', 'Introduce un color CSS o código HEX válido.');
    }
  };

  return (
    <View style={[styles.pantalla, { backgroundColor: fondo }]}>
      <Text style={styles.texto}>Color actual: {fondo}</Text>
      <Button title="Cambiar de color" onPress={() => setVisible(true)} />

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.dialogo}>
            <TextInput
              style={styles.input}
              value={colorEscrito}
              onChangeText={setColorEscrito}
              placeholder="Color CSS"
              autoCapitalize="none"
            />
            <Button title="Cancelar" onPress={() => setVisible(false)} />
            <Button title="Aceptar" onPress={aceptarColor} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  texto: { fontSize: 18, fontWeight: 'bold' },
  overlay: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0008' },
  dialogo: { padding: 20, backgroundColor: 'white', borderRadius: 12, gap: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 },
});
