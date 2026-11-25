// Model de um troféu da coleção (RF 08).
// "tipo" define o desenho: taca, estrela ou louros.
export default class Trofeu {
  constructor({ id, tipo, conquistado }) {
    this.id = id;
    this.tipo = tipo;
    this.conquistado = conquistado;
  }
}
