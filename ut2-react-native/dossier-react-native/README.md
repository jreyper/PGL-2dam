# Dossier de React Native con Expo y Android Studio

### Práctica 1. Hola mundo
Creación del proyecto inicial con Expo y desarrollo de una pantalla básica utilizando `View` y `Text` centrados con Flexbox sobre fondo rosa.

![cap1](assets/img/cap1.png)

### Práctica 2. Contador con dos botones
Implemento un estado con `useState` para un contador con dos botones (`Button`) para incrementar y decrementar su valor dentro de un contenedor.

![cap2](assets/img/cap2.png)
![cap3](assets/img/cap3.png)

### Práctica 3. InicioScreen y estilos separados
Separo las pantallas en la carpeta `src/screens/` (`HolaMundoScreen.tsx` e `InicioScreen.tsx`) y extraigo todos los estilos mediante `StyleSheet.create()`.

![cap4](assets/img/cap4.png)

### Práctica 4. Tres cajas
Creo el componente `Caja.tsx` en TypeScript y renderizo tres cajas de 100×100 dentro de un contenedor con `flex: 1`.

![cap5](assets/img/cap5.png)

### Práctica 5. Modificar flex dinámicamente
Uso los estados independientes para modificar la propiedad `flex` de cada caja con botones de incremento y decremento, repartiendo el espacio disponible en la pantalla.

![cap6](assets/img/cap6.png)

### Práctica 6. Sustituir los botones
Sustituyo los botones por `TouchableHighlight` (mostrando una alerta al incrementar) y `TouchableOpacity` (al decrementar) para mejorar el aspecto visual.

![cap7](assets/img/cap7.png)

### Práctica 7. Nombre y estilos personalizados
Amplío el componente de caja para recibir estilos externos mediante `StyleProp<ViewStyle>` y aplico bordes y esquinas personalizadas a las cajas.

![cap8](assets/img/cap8.png)

### Práctica 8. Círculos dinámicos
Genero círculos con colores RGB aleatorios y controles táctiles para alternar entre `flexWrap` (`wrap`/`nowrap`) y `flexDirection` (`row`/`column`).
Añado circulos:
![cap9](assets/img/cap9.png)
Con nowrap:
![cap10](assets/img/cap10.png)
En Column:
![cap11](assets/img/cap11.png)


### Práctica 9. Distribución, alineación e imágenes
Tengo control dinámico de `justifyContent` mediante un `TextInput` validado y de `alignItems` con botones, distribuyendo tres imágenes.

![cap12](assets/img/cap12.png)

### Práctica 9.1. Imagen aleatoria
Se eligen imagenes aleatorias locales definidas en una colección estática mediante `Math.random()` y se actualiza en pantalla usando `useState`.

![cap13](assets/img/cap13.png)
![cap14](assets/img/cap14.png)
![cap15](assets/img/cap15.png)

### Práctica 10. Calculadora
Desarrollo una calculadora funcional utilizando `SafeAreaView`, botones (`TeclaCalculadora.tsx`), distribución por filas con Flexbox y operaciones gestionadas mediante estados sin usar `eval()`.

![cap16](assets/img/cap16.png)

### Práctica 11. Hook personalizado para la calculadora
Extraigo las variables y toda la lógica de la calculadora a un hook (`src/hooks/useCalculadora.ts`) y separo el funcionamiento interno de la interfaz gráfica y reutilizo `TeclaCalculadora.tsx`.

![cap17](assets/img/cap17.png)

### Práctica 12. Color aleatorio con confirmación
Creo una pantalla con un botón que selecciona un color aleatorio de un array y solicita confirmación mediante `Alert.alert()`. Si el usuario pulsa «Aceptar», se actualiza el estado del color de fondo y si cancela, se mantiene el anterior.

![cap18](assets/img/cap18.png)
![cap19](assets/img/cap19.png)

### Práctica 13. Introducir el color
Creo una pantalla en la que puedes escribir un color. Si el usuario pulsa «Aceptar» y el valor es válido (comprobado con `processColor()`), se actualiza el fondo de la pantalla; si cancela o el color no es válido, se mantiene el anterior.

![cap20](assets/img/cap20.png)
![cap21](assets/img/cap21.png)

### Práctica 14. Borde activado por Switch
Creo una pantalla con un control `Switch` y el indicador (`thumbColor`) es marrón cuando está desactivado y naranja cuando está activado. Al activarlo aparece un borde rojo alrededor de la pantalla, y al desactivarlo desaparece.

![cap22](assets/img/cap22.png)
![cap23](assets/img/cap23.png)

### Práctica 15. Completar el formulario
Creo un formulario controlado con `useState` para recoger el nombre, la edad, si está casado y si está jubilado, actualizo cada campo mediante la función `cambiarCampo`. Al pulsar «Enviar», se valida que el nombre no esté vacío y que la edad sea numérica antes de mostrar el resumen final en pantalla.

![cap24](assets/img/cap24.png)

### Práctica 16. Lista de productos
Creo una pantalla que utiliza `FlatList` para mostrar un listado de productos con su nombre, precio y stock, sin separadores entre elementos. Se emplea el índice (`index % 2`) en `renderItem` para alternar el color de fondo entre filas pares e impares, junto con una cabecera centrada y de mayor tamaño («Lista Productos»).

![cap25](assets/img/cap25.png)

### Práctica 17. Tarjetas para calcular el IMC
Creo el componente `CardPersona.tsx` con los campos de nombre, altura y peso para calcular automáticamente el IMC validando que no se divida entre cero. En la pantalla se gestiona una lista de identificadores con un botón «+» para añadir nuevas tarjetas y un botón en cada tarjeta para eliminarla mediante una función recibida por `props`.

![cap26](assets/img/cap26.png)