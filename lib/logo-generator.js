const fs = require('fs');
const { create } = require('text-to-svg');
const inquirer = require('inquirer');




function generateLogo(text, textColor, shape, shapeColor) {
  const textToSvg = create();

  const options = {
    x: 0,
    y: 0,
    fontSize: 24,
    anchor: 'left top',
    attributes: { fill: textColor },
  };

  const textSvg = textToSvg.getSVG(text, options);

  let shapeSvg = '';
  if (shape === 'circle') {
    shapeSvg = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
  } else if (shape === 'triangle') {
    shapeSvg = `<polygon points="150,50 250,150 50,150" fill="${shapeColor}" />`;
  } else if (shape === 'square') {
    shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSvg}${textSvg}</svg>`;

  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

async function main() {
  console.log('--- Logo Generator ---\n');

  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color as a color keyword or hexadecimal number:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color as a color keyword or hexadecimal number:',
    },
  ];

  const answers = await inquirer.prompt(questions);

  generateLogo(
    answers.text,
    answers.textColor,
    answers.shape,
    answers.shapeColor
  );
}

main();
