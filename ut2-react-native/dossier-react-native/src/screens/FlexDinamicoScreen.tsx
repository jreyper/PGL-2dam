import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CajaFlex from '../components/CajaFlex';

export default function FlexDinamicoScreen() {
  const [flexA, setFlexA] = useState(1);
  const [flexB, setFlexB] = useState(1);
  const [flexC, setFlexC] = useState(1);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.header}>Reparto dinámico de Flex</Text>
      <View style={styles.escenario}>
        <CajaFlex
          nombre="Caja A"
          bg="#3949ab"
          valorFlex={flexA}
          onIncrementar={() => setFlexA(n => n + 1)}
          onDecrementar={() => setFlexA(n => Math.max(0, n - 1))}
        />
        <CajaFlex
          nombre="Caja B"
          bg="#00897b"
          valorFlex={flexB}
          onIncrementar={() => setFlexB(n => n + 1)}
          onDecrementar={() => setFlexB(n => Math.max(0, n - 1))}
          style={{ borderRadius: 20, borderWidth: 5, borderColor: '#004d40' }}
        />
        <CajaFlex
          nombre="Caja C"
          bg="#f4511e"
          valorFlex={flexC}
          onIncrementar={() => setFlexC(n => n + 1)}
          onDecrementar={() => setFlexC(n => Math.max(0, n - 1))}
          style={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  escenario: {
    flex: 1,
    gap: 8,
  },
});
