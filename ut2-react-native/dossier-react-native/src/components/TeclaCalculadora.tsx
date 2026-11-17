import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  etiqueta: string;
  onPress: (valor: string) => void;
  colorFondo?: string;
  colorTexto?: string;
  dobleAncho?: boolean;
};

export default function TeclaCalculadora({
  etiqueta,
  onPress,
  colorFondo = '#333333',
  colorTexto = '#ffffff',
  dobleAncho = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.tecla,
        { backgroundColor: colorFondo, flex: dobleAncho ? 2 : 1 },
      ]}
      onPress={() => onPress(etiqueta)}
    >
      <Text style={[styles.texto, { color: colorTexto }]}>{etiqueta}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tecla: {
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  texto: {
    fontSize: 26,
    fontWeight: '600',
  },
});
