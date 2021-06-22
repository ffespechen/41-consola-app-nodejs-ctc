const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `1. Crear Tarea`,
      },
      {
        value: "2",
        name: `2. Listar Tareas`,
      },
      {
        value: "3",
        name: `3. Listar Tareas completadas`,
      },
      {
        value: "4",
        name: `4. Listar Tareas pendientes`,
      },
      {
        value: "5",
        name: `5. Completar Tareas`,
      },
      {
        value: "6",
        name: `6. Borrar tarea`,
      },
      {
        value: "0",
        name: `0. Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("*******************************".cyan);
  console.log("     Seleccione una opción".cyan);
  console.log("*******************************".cyan);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  await inquirer.prompt([
    {
      type: "input",
      name: "ok",
      message: `Presione ${"ENTER".blue} para continuar`,
    },
  ]);
};

module.exports = {
  inquirerMenu,
  pausa,
};
