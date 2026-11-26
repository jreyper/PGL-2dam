import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function BordeSwitchScreen() {
  const [activo, setActivo] = useState(false);

  return (
    <View style={[styles.pantalla, activo && styles.bordeRojo]}>
      <Text style={styles.texto}>
        Borde: {activo ? 'Activado' : 'Desactivado'}
      </Text>
      <Switch
        value={activo}
        onValueChange={setActivo}
        thumbColor={activo ? 'orange' : 'brown'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  bordeRojo: { borderWidth: 6, borderColor: 'red' },
  texto: { fontSize: 18, fontWeight: 'bold' },
});
