require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const descripcion = await leerInput('Ingrese una nueva tarea');
        tareas.crearTarea(descripcion);
        break;
      case '2':
        console.log('Tareas: ', tareas._listado);
        break;
      default:
        console.log(opt);
        break;
    }
  } while (opt !== '0');

  await pausa();
};

main();
