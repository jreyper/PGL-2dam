const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
const botonBuscar = formulario.querySelector("button");
const filtroTipo = document.querySelector("#filtro-tipo");

let pokemons = [];

//Aqui obtengo un Pokémon de la API
async function obtenerPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error("No se ha podido encontrar el Pokémon.");
  }

  const datos = await respuesta.json();

  return new Pokemon(datos);
}

// Aqui obtengo los 151 Pokémon
async function cargarPokemons() {
  mensaje.textContent = "Cargando Pokémon...";
  resultado.innerHTML = "";

  botonBuscar.disabled = true;
  filtroTipo.disabled = true;

  try {
    for (let id = 1; id <= 151; id++) {
      const pokemon = await obtenerPokemon(id);
      pokemons.push(pokemon);
    }

    crearFiltroTipos();
    mostrarPokemons(pokemons);

    mensaje.textContent = "¡Los 151 Pokémon se han cargado correctamente!";
    filtroTipo.disabled = false;

  } catch (error) {
    mensaje.textContent =
      "Error al cargar los Pokémon. Inténtalo de nuevo.";

    resultado.innerHTML = "";

    const botonReintentar = document.createElement("button");

    botonReintentar.textContent = "Reintentar";
    botonReintentar.className = "boton-reintentar";

    botonReintentar.addEventListener("click", () => {
      pokemons = [];
      cargarPokemons();
    });

    resultado.appendChild(botonReintentar);

  } finally {
    botonBuscar.disabled = false;
  }
}

// Esto es para que salga el numero con tres cifras
function formatearId(id) {
  return String(id).padStart(3, "0");
}

// Esto es para poner la primera letra en mayúscula
function formatearNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

// Esto muestra los Pokémon en la tarjeta
function mostrarPokemons(lista) {
  resultado.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    const pokemon = lista[i];

    const tarjeta = document.createElement("article");
    tarjeta.className = "pokemon";

    let tiposHTML = "";

    for (let j = 0; j < pokemon.tipos.length; j++) {
      const tipo = pokemon.tipos[j];

      tiposHTML += `
        <span class="tipo tipo-${tipo}">
          ${formatearNombre(tipo)}
        </span>
      `;
    }

    tarjeta.innerHTML = `
      <p class="pokemon__numero">
        N.º ${formatearId(pokemon.id)}
      </p>

      <div class="pokemon__imagen-contenedor">
        <img
          class="pokemon__imagen"
          src="${pokemon.imagenTrasera}"
          alt="Imagen de ${pokemon.nombre}"
        >
      </div>

      <h2 class="pokemon__nombre">
        ${formatearNombre(pokemon.nombre)}
      </h2>

      <div class="pokemon__datos">

        <p>
          <strong>Altura</strong><br>
          ${pokemon.altura / 10} m
        </p>

        <p>
          <strong>Peso</strong><br>
          ${pokemon.peso / 10} kg
        </p>

      </div>

      <div class="pokemon__tipos">
        ${tiposHTML}
      </div>

      <button class="boton-detalles">
        Ver detalles
      </button>
    `;

    // Esto es para cambiar al sprite de delante
    tarjeta.addEventListener("mouseenter", function () {
      const imagen = tarjeta.querySelector(".pokemon__imagen");

      imagen.src = pokemon.imagenFrontal;
    });

    // y esto para volver al sprite de atras
    tarjeta.addEventListener("mouseleave", function () {
      const imagen = tarjeta.querySelector(".pokemon__imagen");

      imagen.src = pokemon.imagenTrasera;
    });

    // El boton de ver detalles
    const botonDetalles = tarjeta.querySelector(".boton-detalles");

    botonDetalles.addEventListener("click", function () {
      mostrarDetalles(pokemon);
    });

    resultado.appendChild(tarjeta);
  }
}

// Aqui creo las opciones para seleccionar del filtro para buscar
function crearFiltroTipos() {
  const tipos = [];

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];

    for (let j = 0; j < pokemon.tipos.length; j++) {
      const tipo = pokemon.tipos[j];

      if (!tipos.includes(tipo)) {
        tipos.push(tipo);
      }
    }
  }

  tipos.sort();

  filtroTipo.innerHTML = `
    <option value="">Todos los tipos</option>
  `;

  for (let i = 0; i < tipos.length; i++) {
    const tipo = tipos[i];

    const opcion = document.createElement("option");

    opcion.value = tipo;
    opcion.textContent = formatearNombre(tipo);

    filtroTipo.appendChild(opcion);
  }
}

// Aqui filtro los pokemons
function filtrarPokemons() {
  const texto = inputBusqueda.value.trim().toLowerCase();
  const tipo = filtroTipo.value;

  const resultados = [];

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];

    const coincideNombre = pokemon.nombre.includes(texto);

    const coincideNumero =
      String(pokemon.id) === texto;

    let coincideTipo = true;

    if (tipo !== "") {
      coincideTipo = pokemon.tipos.includes(tipo);
    }

    if (
      (coincideNombre || coincideNumero) &&
      coincideTipo
    ) {
      resultados.push(pokemon);
    }
  }

  mostrarPokemons(resultados);

  if (resultados.length === 0) {
    mensaje.textContent =
      "No se ha encontrado el Pokémon.";
  } else {
    mensaje.textContent =
      `Se han encontrado ${resultados.length} Pokémon.`;
  }
}

// Esto es para mostrar la información más detallada
function mostrarDetalles(pokemon) {
  let habilidadesHTML = "";

  for (let i = 0; i < pokemon.habilidades.length; i++) {
    habilidadesHTML += `
      <li>
        ${formatearNombre(pokemon.habilidades[i].replace("-", " "))}
      </li>
    `;
  }

  let estadisticasHTML = "";

  for (let i = 0; i < pokemon.estadisticas.length; i++) {
    const estadistica = pokemon.estadisticas[i];

    estadisticasHTML += `
      <li>
        <span>
          ${formatearNombre(
            estadistica.nombre.replace("-", " ")
          )}
        </span>

        <strong>
          ${estadistica.valor}
        </strong>
      </li>
    `;
  }

  let tiposHTML = "";

  for (let i = 0; i < pokemon.tipos.length; i++) {
    tiposHTML += `
      <span class="tipo tipo-${pokemon.tipos[i]}">
        ${formatearNombre(pokemon.tipos[i])}
      </span>
    `;
  }

  const modal = document.createElement("div");

  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal__contenido">

      <button class="modal__cerrar">
        ×
      </button>

      <p class="pokemon__numero">
        N.º ${formatearId(pokemon.id)}
      </p>

      <h2>
        ${formatearNombre(pokemon.nombre)}
      </h2>

      <img
        class="modal__imagen"
        src="${pokemon.imagenFrontal}"
        alt="Imagen de ${pokemon.nombre}"
      >

      <div class="pokemon__tipos">
        ${tiposHTML}
      </div>

      <div class="modal__datos">

        <p>
          <strong>Altura</strong><br>
          ${pokemon.altura / 10} m
        </p>

        <p>
          <strong>Peso</strong><br>
          ${pokemon.peso / 10} kg
        </p>

        <p>
          <strong>Experiencia base</strong><br>
          ${pokemon.experiencia}
        </p>

      </div>

      <h3>Habilidades</h3>

      <ul class="lista">
        ${habilidadesHTML}
      </ul>

      <h3>Estadísticas base</h3>

      <ul class="estadisticas">
        ${estadisticasHTML}
      </ul>

    </div>
  `;

  document.body.appendChild(modal);

  const botonCerrar = modal.querySelector(".modal__cerrar");

  botonCerrar.addEventListener("click", function () {
    modal.remove();
  });

  modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
      modal.remove();
    }
  });
}

// Esto es para el buscar al enviar el formulario
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (pokemoes.length === 0) {
    mensaje.textContent =
      "Espera a que se carguen los Pokémon.";
    return;
  }

  filtrarPokemons();
});

// Buscar mientras escribimos
inputBusqueda.addEventListener("input", function () {
  if (pokemons.length > 0) {
    filtrarPokemons();
  }
});

// Filtra por tipo
filtroTipo.addEventListener("change", function () {
  if (pokemons.length > 0) {
    filtrarPokemons();
  }
});

// Carga los Pokémon al abrir la página
cargarPokemons();