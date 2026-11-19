import { StyleSheet, Text, View } from 'react-native';
import TeclaCalculadora from '../components/TeclaCalculadora';
import { useCalculadora } from '../hooks/useCalculadora';

export default function CalculadoraHookScreen() {
  const { pantalla, pulsarNumero, pulsarOperacion, calcularResultado, limpiar } = useCalculadora();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.resultado}>{pantalla}</Text>
      <View style={styles.fila}>
        <TeclaCalculadora etiqueta="7" onPress={() => pulsarNumero('7')} />
        <TeclaCalculadora etiqueta="8" onPress={() => pulsarNumero('8')} />
        <TeclaCalculadora etiqueta="9" onPress={() => pulsarNumero('9')} />
        <TeclaCalculadora etiqueta="/" onPress={() => pulsarOperacion('/')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora etiqueta="4" onPress={() => pulsarNumero('4')} />
        <TeclaCalculadora etiqueta="5" onPress={() => pulsarNumero('5')} />
        <TeclaCalculadora etiqueta="6" onPress={() => pulsarNumero('6')} />
        <TeclaCalculadora etiqueta="*" onPress={() => pulsarOperacion('*')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora etiqueta="1" onPress={() => pulsarNumero('1')} />
        <TeclaCalculadora etiqueta="2" onPress={() => pulsarNumero('2')} />
        <TeclaCalculadora etiqueta="3" onPress={() => pulsarNumero('3')} />
        <TeclaCalculadora etiqueta="-" onPress={() => pulsarOperacion('-')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora etiqueta="C" onPress={limpiar} />
        <TeclaCalculadora etiqueta="0" onPress={() => pulsarNumero('0')} />
        <TeclaCalculadora etiqueta="=" onPress={calcularResultado} />
        <TeclaCalculadora etiqueta="+" onPress={() => pulsarOperacion('+')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', padding: 20, gap: 10 },
  resultado: { fontSize: 40, textAlign: 'right', marginBottom: 20, padding: 10, backgroundColor: '#eee' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
});
