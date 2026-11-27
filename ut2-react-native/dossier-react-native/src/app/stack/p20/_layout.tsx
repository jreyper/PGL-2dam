import { Stack } from 'expo-router';

export default function LayoutP20() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Inicio P20' }} />
      <Stack.Screen name="detalle" options={{ title: 'Detalle P20' }} />
    </Stack>
  );
}
