import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.pantalla}>
      <View style={styles.caja}>
        <Text style={styles.texto}>Contador: {contador}</Text>
        <View style={styles.botones}>
          <Button
            title="Decrementar"
            color="#d9534f"
            onPress={() => setContador(n => n - 1)}
          />
          <Button
            title="Incrementar"
            color="#5cb85c"
            onPress={() => setContador(n => n + 1)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    flex: 1,
    justifyContent: 'center',
  },
  caja: {
    alignItems: 'center',
    backgroundColor: '#e0f2fe',
    borderColor: '#0284c7',
    borderRadius: 20,
    borderWidth: 3,
    padding: 25,
    gap: 15,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  botones: {
    flexDirection: 'row',
    gap: 15,
  },
});