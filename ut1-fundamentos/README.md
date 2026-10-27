# Documentación: Uso de Axios en React

## 1. ¿Cómo se importa Axios en TypeScript?

Primero instalamos Axios con `npm install axios` y después lo importamos en el archivo donde lo vayamos a utilizar.

```typescript
import axios from "axios";
```

Axios sirve para hacer peticiones a una API y obtener sus datos.

## 2. ¿Cómo se hace una petición GET?

Utilizamos `axios.get()` indicando la URL de la API y con `await` esperamos a recibir la respuesta.

```typescript
const respuesta = await axios.get("https://ejemplo.com/api/juegos");
```

## 3. ¿Dónde están los datos de la respuesta?

Los datos q devuelve la API se encuentran en la propiedad `data`.

```typescript
const juegos = respuesta.data;
```

## 4. ¿Qué son las promesas, `async` y `await`?

Una operación asíncrona puede tardar en completarse, como cuando pedimos datos a una API.

- **Promise:** es el resultado de una operación que todavía puede estar pendiente
- **async:** permite declarar una función asíncrona
- **await:** espera el resultado de una promesa antes de continuar

```typescript
async function obtenerJuegos() {
    const respuesta = await axios.get("https://ejemplo.com/api/juegos");
    return respuesta.data;
}
```

## 5. ¿Cómo guarda React los datos?

Usamos `useState` para guardar los videojuegos y cuando actualizamos el estado, React vuelve a mostrar la información actualizada.

```typescript
const [juegos, setJuegos] = useState<Juego[]>([]);
```

Para guardar los datos recibidos, utilizamos `setJuegos(respuesta.data)`.

## 6. ¿Cómo se cargan los datos al mostrar un componente?

Con `useEffect` podemos hacer la petición cuando se muestra el componente por primera vez.

```typescript
useEffect(() => {
    async function cargarJuegos() {
        const respuesta = await axios.get("https://ejemplo.com/api/juegos");
        setJuegos(respuesta.data);
    }

    cargarJuegos();
}, []);
```

El array vacío indica q el efecto se ejecuta al montarse el componente, aunque en modo Strict Mode puede ejecutarse más de una vez durante el desarrollo.

## 7. ¿Cómo se muestran los videojuegos?

Con `map()` recorremos la lista y mostramos un elemento por cada videojuego. La propiedad `key` permite a React q identifique a cada uno.

```tsx
{juegos.map((juego) => (
    <div key={juego.id}>
        <h2>{juego.name}</h2>
    </div>
))}
```

## 8. ¿Para qué sirve la interfaz `Juego`?

En TypeScript usamos una interfaz para definir qué datos tiene cada videojuego y qué tipo de valor contiene cada propiedad.

```typescript
interface Juego {
    id: number;
    name: string;
    background_image: string | null;
    rating: number;
}
```

Los campos deben coincidir con los datos reales de la API. TypeScript nos ayuda a detectar errores y trabajar con los datos de forma más segura.

## 9. ¿Cómo mostramos solo algunos videojuegos?

Con `slice()` podemos limitar la cantidad de videojuegos q aparecen en pantalla. Por ejemplo para mostrar los primeros 10:

```tsx
{juegos.slice(0, 10).map((juego) => (
    <div key={juego.id}>
        <h2>{juego.name}</h2>
    </div>
))}
```

Esto muestra solo los primeros 10 videojuegos sin modificar la lista original.
