import { Stack } from 'expo-router';

export default function LayoutP21() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Primera Pantalla' }} />
      <Stack.Screen name="segunda" options={{ title: 'Segunda Pantalla' }} />
      <Stack.Screen name="tercera" options={{ title: 'Tercera Pantalla' }} />
    </Stack>
  );
}
