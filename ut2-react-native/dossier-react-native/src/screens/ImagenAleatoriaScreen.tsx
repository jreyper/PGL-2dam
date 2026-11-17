import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const imagenes = [
  { nombre: 'Cristiano Ronaldo', source: require('../../assets/img/cristianoRonaldo.jpeg') },
  { nombre: 'Antonio Recio', source: require('../../assets/img/antonioRecio.jpeg') },
  { nombre: 'Slenderman', source: require('../../assets/img/slenderman.jpeg') },
];

export default function ImagenAleatoriaScreen() {
  const [indice, setIndice] = useState(0);

  const elegirAleatoria = () => {
    const nuevoIndice = Math.floor(Math.random() * imagenes.length);
    setIndice(nuevoIndice);
  };

  const elegida = imagenes[indice];

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{elegida.nombre}</Text>
      <Image source={elegida.source} style={styles.imagen} resizeMode="contain" />

      <TouchableOpacity style={styles.boton} onPress={elegirAleatoria}>
        <Text style={styles.textoBoton}>Mostrar imagen aleatoria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagen: {
    width: 150,
    height: 150,
  },
  boton: {
    backgroundColor: '#673ab7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
