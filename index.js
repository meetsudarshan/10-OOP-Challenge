const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./utils/generateSVG.js');

// Function to run the logo generator
const runLogoGenerator = async () => {
  // Prompt the user with questions to gather logo information
  const logoInfo = await inquirer.prompt(userQuestions);

  let selectedShape; // Variable to store the selected shape object

  switch (logoInfo.shape) {
    case 'triangle':
      // Create a new Triangle object with user-provided information
      selectedShape = new Triangle(logoInfo.text, logoInfo.color, logoInfo.background);
      break;
    case 'circle':
      // Create a new Circle object with user-provided information
      selectedShape = new Circle(logoInfo.text, logoInfo.color, logoInfo.background);
      break;
    case 'square':
      // Create a new Square object with user-provided information
      selectedShape = new Square(logoInfo.text, logoInfo.color, logoInfo.background);
      break;
    default:
      console.error('Invalid shape.');
      return;
  }

  // Generate SVG content for the selected shape
  const svgContent = selectedShape.generateSvgContent();

  // Write the SVG content to a file
  fs.writeFile('./Assets/logo.svg', svgContent, err => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('SVG file generated successfully!');
    }
  });
};

// Questions to prompt the user for logo information
const userQuestions = [
  {
    type: 'input',
    message: 'Please enter 3 characters for your logo:',
    name: 'text'
  },
  {
    type: 'input',
    message: 'Please enter a color for the characters:',
    name: 'color'
  },
  {
    type: 'list',
    message: 'Select a shape for your logo:',
    name: 'shape',
    choices: ['triangle', 'circle', 'square']
  },
  {
    type: 'input',
    message: 'Please enter a background color for your logo:',
    name: 'background'
  }
];

// Run the logo generator
runLogoGenerator();
