import { FlatList, StyleSheet, Text, View } from 'react-native';

const PRODUCTOS = [
  { id: '1', nombre: 'Teclado', precio: 29.99, stock: 15 },
  { id: '2', nombre: 'Ratón', precio: 14.50, stock: 32 },
  { id: '3', nombre: 'Monitor', precio: 189.00, stock: 7 },
  { id: '4', nombre: 'Webcam', precio: 45.00, stock: 12 },
  { id: '5', nombre: 'Altavoces', precio: 34.95, stock: 20 },
];

export default function ListaProductosScreen() {
  return (
    <FlatList
      data={PRODUCTOS}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Text style={styles.cabecera}>Lista Productos</Text>}
      renderItem={({ item, index }) => (
        <View style={[styles.item, { backgroundColor: index % 2 ? '#eee' : '#fff' }]}>
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text>Precio: {item.precio} €</Text>
          <Text>Stock: {item.stock}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cabecera: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', padding: 16 },
  item: { padding: 12, gap: 4 },
  nombre: { fontWeight: 'bold' },
});
