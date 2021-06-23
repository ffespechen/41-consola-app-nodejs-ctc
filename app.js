require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    // Establecer las tareas
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const descripcion = await leerInput('Ingrese una nueva tarea');
        tareas.crearTarea(descripcion);
        break;
      case '2':
        console.log('Tareas: ', tareas.listadoArray);

        break;
      default:
        console.log(opt);
        break;
    }

    // guardarDB(tareas.listadoArray);
    await pausa();
  } while (opt !== '0');
};

main();
