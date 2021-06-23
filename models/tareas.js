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

  borrarTareas(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
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

  listarPendientesCompletadas(completadas = true) {
    let indice = 0;
    this.listadoArray.forEach((tarea) => {
      const { desc, completadoEn } = tarea;

      if (completadas) {
        if (completadoEn) {
          indice += 1;
          console.log(
            `${indice.toString().blue}. ${desc} :: ${'COMPLETADO'.green} :: ${
              tarea.completadoEn
            }`
          );
        }
      } else {
        if (!completadoEn) {
          indice += 1;
          console.log(
            `${indice.toString().blue}. ${desc} :: ${'PENDIENTE'.red}`
          );
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];

      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArray.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
