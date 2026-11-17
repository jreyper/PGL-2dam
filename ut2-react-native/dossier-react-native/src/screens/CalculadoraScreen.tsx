import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeclaCalculadora from '../components/TeclaCalculadora';

export default function CalculadoraScreen() {
  const [pantalla, setPantalla] = useState('0');
  const [anterior, setAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);
  const [reiniciarPantalla, setReiniciarPantalla] = useState(false);

  const pulsarNumero = (num: string) => {
    if (pantalla === '0' || reiniciarPantalla) {
      setPantalla(num);
      setReiniciarPantalla(false);
    } else {
      setPantalla(pantalla + num);
    }
  };

  const pulsarPunto = () => {
    if (reiniciarPantalla) {
      setPantalla('0.');
      setReiniciarPantalla(false);
      return;
    }
    if (!pantalla.includes('.')) {
      setPantalla(pantalla + '.');
    }
  };

  const limpiar = () => {
    setPantalla('0');
    setAnterior(null);
    setOperacion(null);
    setReiniciarPantalla(false);
  };

  const seleccionarOperacion = (op: string) => {
    setAnterior(parseFloat(pantalla));
    setOperacion(op);
    setReiniciarPantalla(true);
  };

  const calcularResultado = () => {
    if (anterior === null || operacion === null) return;
    const actual = parseFloat(pantalla);
    let resultado = 0;

    switch (operacion) {
      case '+':
        resultado = anterior + actual;
        break;
      case '-':
        resultado = anterior - actual;
        break;
      case '×':
        resultado = anterior * actual;
        break;
      case '÷':
        resultado = actual === 0 ? NaN : anterior / actual;
        break;
    }

    setPantalla(isNaN(resultado) ? 'Error' : String(Number(resultado.toFixed(6))));
    setAnterior(null);
    setOperacion(null);
    setReiniciarPantalla(true);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.visor}>
        <Text style={styles.textoVisor} numberOfLines={1} adjustsFontSizeToFit>
          {pantalla}
        </Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.fila}>
          <TeclaCalculadora etiqueta="C" colorFondo="#a5a5a5" colorTexto="#000" onPress={limpiar} />
          <TeclaCalculadora
            etiqueta="⌫"
            colorFondo="#a5a5a5"
            colorTexto="#000"
            onPress={() => setPantalla(p => (p.length > 1 ? p.slice(0, -1) : '0'))}
          />
          <TeclaCalculadora etiqueta="÷" colorFondo="#ff9f0a" onPress={seleccionarOperacion} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora etiqueta="7" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="8" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="9" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="×" colorFondo="#ff9f0a" onPress={seleccionarOperacion} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora etiqueta="4" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="5" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="6" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="-" colorFondo="#ff9f0a" onPress={seleccionarOperacion} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora etiqueta="1" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="2" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="3" onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="+" colorFondo="#ff9f0a" onPress={seleccionarOperacion} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora etiqueta="0" dobleAncho onPress={pulsarNumero} />
          <TeclaCalculadora etiqueta="." onPress={pulsarPunto} />
          <TeclaCalculadora etiqueta="=" colorFondo="#ff9f0a" onPress={calcularResultado} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#000',
    padding: 12,
    justifyContent: 'flex-end',
  },
  visor: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  textoVisor: {
    color: '#fff',
    fontSize: 64,
    fontWeight: '300',
  },
  teclado: {
    gap: 4,
  },
  fila: {
    flexDirection: 'row',
  },
});
