require('colors');
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  listadoTareasCompletar,
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const descripcion = await leerInput('Ingrese una nueva tarea');
        tareas.crearTarea(descripcion);
        break;
      case '2':
        tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarPendientesCompletadas();
        break;
      case '4':
        tareas.listarPendientesCompletadas(false);
        break;

      case '5':
        const ids = await listadoTareasCompletar(tareas.listadoArray);
        tareas.toggleCompletadas(ids);
        break;

      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArray);
        if (id !== '0') {
          const ok = await confirmar('Está seguro?');
          if (ok) tareas.borrarTareas(id);
          console.log('Tarea borrada.');
        }
        break;
    }

    guardarDB(tareas.listadoArray);
    await pausa();
  } while (opt !== '0');
};

main();
