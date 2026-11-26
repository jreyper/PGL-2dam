import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.titulo}>Prácticas de React Native con Expo</Text>
      
      <Link href="/practica01" style={styles.enlace}>Práctica 1 · Hola mundo</Link>
      <Link href="/practica02" style={styles.enlace}>Práctica 2 · Contador con dos botones</Link>
      <Link href="/practica03" style={styles.enlace}>Práctica 3 · InicioScreen</Link>
      <Link href="/practica04" style={styles.enlace}>Práctica 4 · Tres cajas</Link>
      <Link href="/practica05" style={styles.enlace}>Práctica 5 · Modificar flex</Link>
      <Link href="/practica06" style={styles.enlace}>Práctica 6 · Touchables</Link>
      <Link href="/practica07" style={styles.enlace}>Práctica 7 · Estilos personalizados</Link>
      <Link href="/practica08" style={styles.enlace}>Práctica 8 · Círculos dinámicos</Link>
      <Link href="/practica09" style={styles.enlace}>Práctica 9 · Alineación e imágenes</Link>
      <Link href="/practica09.1" style={styles.enlace}>Práctica 9.1 · Imagen aleatoria</Link>
      <Link href="/practica10" style={styles.enlace}>Práctica 10 · Calculadora</Link>
      <Link href="/practica11" style={styles.enlace}>Práctica 11 · CalculadoraHook</Link>
      <Link href="/practica12" style={styles.enlace}>Práctica 12 · Color aleatorio</Link>
      <Link href="/practica13" style={styles.enlace}>Práctica 13 · Introducir el color</Link>
      <Link href="/practica14" style={styles.enlace}>Práctica 14 · Borde activado por switch</Link>
      <Link href="/practica15" style={styles.enlace}>Práctica 15 · Completar formulario</Link>
      <Link href="/practica16" style={styles.enlace}>Práctica 16 · Lista de productos</Link>
      <Link href="/practica17" style={styles.enlace}>Práctica 17 · Tarjetas para calcular el IMC</Link>
      <Link href="/practica18" style={styles.enlace}>Práctica 18 · Diario de emociones</Link>
      <Link href="/practica19" style={styles.enlace}>Práctica 19 · Insertar emoticonos</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    gap: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  enlace: {
    backgroundColor: '#e3f2fd',
    color: '#0d47a1',
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});
