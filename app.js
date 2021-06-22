require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();
    await pausa();

    switch (opt)) {
        case '1':
            // Todo 
            break;
            case '2':
            console.log(tareas._listado) 
            break;
        default:
            break;
    }
  } while (opt !== "0");
};

main();
