const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1'.red} . Crear Tarea`,
      },
      {
        value: '2',
        name: `${'2'.red} . Listar Tareas`,
      },
      {
        value: '3',
        name: `${'3'.red} . Listar Tareas completadas`,
      },
      {
        value: '4',
        name: `${'4'.red} . Listar Tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5'.red} . Completar Tareas`,
      },
      {
        value: '6',
        name: `${'6'.red} . Borrar tarea`,
      },
      {
        value: '0',
        name: `${'0'.red} . Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('*******************************'.cyan);
  console.log('     Seleccione una opción'.cyan);
  console.log('*******************************'.cyan);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'ok',
      message: `Presione ${'ENTER'.blue} para continuar`,
    },
  ]);
};

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor, ingrese un valor';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
