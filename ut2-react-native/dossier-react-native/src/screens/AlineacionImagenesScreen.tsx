import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type JustifyTipo = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignTipo = 'flex-start' | 'flex-end' | 'center' | 'stretch';

const VALORES_JUSTIFY: JustifyTipo[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

export default function AlineacionImagenesScreen() {
  const [textoInput, setTextoInput] = useState('center');
  const [justify, setJustify] = useState<JustifyTipo>('center');
  const [align, setAlign] = useState<AlignTipo>('center');

  const manejarCambioJustify = (texto: string) => {
    setTextoInput(texto);
    const limpio = texto.trim().toLowerCase() as JustifyTipo;
    if (VALORES_JUSTIFY.includes(limpio)) {
      setJustify(limpio);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Escribe justifyContent válido:</Text>
      <TextInput
        style={styles.input}
        placeholder="center, space-between, space-around..."
        value={textoInput}
        onChangeText={manejarCambioJustify}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Selecciona alignItems:</Text>
      <View style={styles.filaBotones}>
        {(['flex-start', 'center', 'flex-end'] as AlignTipo[]).map(opcion => (
          <TouchableOpacity
            key={opcion}
            style={[styles.boton, align === opcion && styles.botonActivo]}
            onPress={() => setAlign(opcion)}
          >
            <Text style={styles.textoBoton}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.estado}>
        Activo → justify: <Text style={styles.bold}>{justify}</Text> | align: <Text style={styles.bold}>{align}</Text>
      </Text>

      <View
        style={[
          styles.escenario,
          {
            justifyContent: justify,
            alignItems: align,
            flexWrap: 'nowrap',
          },
        ]}
      >
        <Image source={require('../../assets/img/castor.jpg')} style={styles.imagen} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoXddWp7mhAU0eIGdLG4tyeSSfI5X8gt_u4KKDL9ySTj_Knw8I9JnmiX-&s=10' }} style={styles.imagen} />
        <Image source={{ uri: 'https://www.worldanimalprotection.org/cdn-cgi/image/width=1280,format=auto/contentassets/eabadb4cc42f4ead94ad58cd187af23b/1024896.jpeg' }} style={styles.imagen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  filaBotones: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  boton: {
    flex: 1,
    backgroundColor: '#78909c',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#0288d1',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  estado: {
    backgroundColor: '#eceff1',
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  escenario: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#37474f',
    borderRadius: 10,
    padding: 8,
  },
  imagen: {
    width: 65,
    height: 65,
    borderRadius: 8,
  },
});
