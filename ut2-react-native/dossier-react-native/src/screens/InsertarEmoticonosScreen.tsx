import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function InsertarEmoticonosScreen() {
  const [texto, setTexto] = useState('');

  const insertarEmoji = (emoji: string) => {
    setTexto((actual) => actual + emoji);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insertar Emoticonos</Text>

      <View style={styles.barraIconos}>
        <TouchableOpacity style={styles.botonIcono} onPress={() => insertarEmoji(' 😊')}>
          <Text style={styles.emoji}>😊</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonIcono} onPress={() => insertarEmoji(' 😢')}>
          <Text style={styles.emoji}>😢</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonIcono} onPress={() => insertarEmoji(' 😉')}>
          <Text style={styles.emoji}>😉</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonIcono} onPress={() => insertarEmoji(' ❤️')}>
          <Text style={styles.emoji}>❤️</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Pulsa un emoji o escribe aquí..."
        value={texto}
        onChangeText={setTexto}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  barraIconos: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
  botonIcono: { alignItems: 'center', padding: 12, backgroundColor: '#f2f2f2', borderRadius: 10 },
  emoji: { fontSize: 30 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, minHeight: 100, textAlignVertical: 'top', fontSize: 16 },
});
