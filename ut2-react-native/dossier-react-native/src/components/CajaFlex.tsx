import { Alert, StyleProp, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
  nombre: string;
  bg?: string;
  valorFlex: number;
  onIncrementar: () => void;
  onDecrementar: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function CajaFlex({
  nombre,
  bg = '#607d8b',
  valorFlex,
  onIncrementar,
  onDecrementar,
  style,
}: Props) {
  const manejarIncremento = () => {
    Alert.alert('Flex aumentado', `${nombre} ahora tiene flex: ${valorFlex + 1}`);
    onIncrementar();
  };

  return (
    <View style={[styles.cajaBase, { backgroundColor: bg, flex: valorFlex }, style]}>
      <Text style={styles.titulo}>
        {nombre} (flex: {valorFlex})
      </Text>

      <View style={styles.filaBotones}>
        <TouchableHighlight
          style={styles.botonHighlight}
          underlayColor="#b2dfdb"
          onPress={manejarIncremento}
        >
          <Text style={styles.textoBoton}>Flex + 1</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.botonOpacity} onPress={onDecrementar}>
          <Text style={styles.textoBoton}>Flex - 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cajaBase: {
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filaBotones: {
    flexDirection: 'row',
    gap: 12,
  },
  botonHighlight: {
    backgroundColor: '#004d40',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  botonOpacity: {
    backgroundColor: '#b71c1c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
  },
});
