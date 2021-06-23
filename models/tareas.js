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

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    Object.keys(this._listado).forEach((key, i) => {
      let estado = '';
      const tarea = this._listado[key];
      const indice = `${i + 1}`.blue;

      if (tarea.completadoEn) {
        estado = `${'COMPLETADO'.green}`;
      } else {
        estado = `${'PENDIENTE'.red}`;
      }

      console.log(`${indice}. ${tarea.desc} :: ${estado}`);
    });
  }
}

module.exports = Tareas;
