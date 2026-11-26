import { useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

type DatosPersona = {
  nombre: string;
  edad: string;
  casado: boolean;
  jubilado: boolean;
};

export default function FormularioPersonaScreen() {
  const [datos, setDatos] = useState<DatosPersona>({
    nombre: '',
    edad: '',
    casado: false,
    jubilado: false,
  });
  const [enviado, setEnviado] = useState(false);

  function cambiarCampo<K extends keyof DatosPersona>(campo: K, valor: DatosPersona[K]) {
    setDatos(actual => ({ ...actual, [campo]: valor }));
    setEnviado(false);
  }

  const enviar = () => {
    const edadNum = Number(datos.edad);
    if (datos.nombre.trim() === '') {
      Alert.alert('Error', 'El nombre no puede estar vacío.');
      return;
    }
    if (datos.edad.trim() === '' || Number.isNaN(edadNum)) {
      Alert.alert('Error', 'La edad debe ser un número válido.');
      return;
    }
    setEnviado(true);
  };

  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Formulario Persona</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={datos.nombre}
        onChangeText={v => cambiarCampo('nombre', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={datos.edad}
        onChangeText={v => cambiarCampo('edad', v)}
      />

      <View style={styles.fila}>
        <Text>Casado</Text>
        <Switch value={datos.casado} onValueChange={v => cambiarCampo('casado', v)} />
      </View>

      <View style={styles.fila}>
        <Text>Jubilado</Text>
        <Switch value={datos.jubilado} onValueChange={v => cambiarCampo('jubilado', v)} />
      </View>

      <Button title="Enviar" onPress={enviar} />

      {enviado && (
        <View style={styles.resumen}>
          <Text style={styles.titulo}>Resumen</Text>
          <Text>Nombre: {datos.nombre.trim()}</Text>
          <Text>Edad: {Number(datos.edad)}</Text>
          <Text>Casado: {datos.casado ? 'Sí' : 'No'}</Text>
          <Text>Jubilado: {datos.jubilado ? 'Sí' : 'No'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, justifyContent: 'center', padding: 24, gap: 12 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  resumen: { padding: 14, backgroundColor: '#f0f0f0', borderRadius: 8, gap: 4, marginTop: 8 },
});
