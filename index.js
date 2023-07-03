const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./utils/generateSVG.js');

const runLogoGenerator = async () => {
  const logoInfo = await inquirer.prompt(userQuestions);

  let selectedShape;

  switch (logoInfo.shape) {
    case 'triangle':
      selectedShape = new Triangle(logoInfo.text, logoInfo.color, logoInfo.background);
      break;
    case 'circle':
      selectedShape = new Circle(logoInfo.text, logoInfo.color, logoInfo.background);
      break;
    case 'square':
      selectedShape = new Square(logoInfo.text, logoInfo.color, logoInfo.background);
      break;
    default:
      console.error('Invalid shape.');
      return;
  }

  const svgContent = selectedShape.generateSvgContent();

  fs.writeFile('./Assets/logo.svg', svgContent, err => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('SVG file generated successfully!');
    }
  });
};

const userQuestions = [
  {
    type: 'input',
    message: 'Please enter 3 characters.',
    name: 'text'
  },
  {
    type: 'input',
    message: 'Please enter a color for your characters.',
    name: 'color'
  },
  {
    type: 'list',
    message: 'Select a shape for your logo?',
    name: 'shape',
    choices: ['triangle', 'circle', 'square']
  },
  {
    type: 'input',
    message: 'Please enter a color for the background of your logo.',
    name: 'background'
  }
];

runLogoGenerator();
