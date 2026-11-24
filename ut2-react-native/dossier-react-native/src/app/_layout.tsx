import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Índice de Prácticas' }} />
      <Stack.Screen name="practica01" options={{ title: 'Práctica 1 · Hola Mundo' }} />
      <Stack.Screen name="practica02" options={{ title: 'Práctica 2 · Contador' }} />
      <Stack.Screen name="practica03" options={{ title: 'Práctica 3 · InicioScreen' }} />
      <Stack.Screen name="practica04" options={{ title: 'Práctica 4 · Tres Cajas' }} />
      <Stack.Screen name="practica05" options={{ title: 'Práctica 5 · Flex Dinámico' }} />
      <Stack.Screen name="practica06" options={{ title: 'Práctica 6 · Touchables' }} />
      <Stack.Screen name="practica07" options={{ title: 'Práctica 7 · Estilos por Props' }} />
      <Stack.Screen name="practica08" options={{ title: 'Práctica 8 · Círculos Dinámicos' }} />
      <Stack.Screen name="practica09" options={{ title: 'Práctica 9 · Alineación e Imágenes' }} />
      <Stack.Screen name="practica09_1" options={{ title: 'Práctica 9.1 · Imagen Aleatoria' }} />
      <Stack.Screen name="practica10" options={{ title: 'Práctica 10 · Calculadora' }} />
      <Stack.Screen name="practica11" options={{ title: 'Práctica 11 · Hook personalizado calculadora' }} />
      <Stack.Screen name="practica12" options={{ title: 'Práctica 12 · Color aleatorio' }} />
      <Stack.Screen name="practica13" options={{ title: 'Práctica 13 · Introducir el color' }} />
    </Stack>
  );
}
