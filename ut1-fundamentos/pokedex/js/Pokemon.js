class Pokemon {
  constructor(datos) {
    this.id = datos.id;
    this.nombre = datos.name;
    this.imagenFrontal = datos.sprites.front_default;
    this.imagenTrasera = datos.sprites.back_default;
    this.altura = datos.height;
    this.peso = datos.weight;
    this.tipos = datos.types.map(({ type }) => type.name);
    this.experiencia = datos.base_experience;
    this.habilidades = datos.abilities.map(({ ability }) => ability.name);
    this.estadisticas = datos.stats.map(({ base_stat, stat }) => ({
      nombre: stat.name,
      valor: base_stat
    }));
  }
}