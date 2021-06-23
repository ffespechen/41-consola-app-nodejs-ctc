const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  get listadoArray() {
    // const listado = [];
    // Object.keys(this._listado).forEach((key) => {
    //   listado.push(this._listado[key]);
    // });

    // return listado;

    const listado = Object.values(this._listado);
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
