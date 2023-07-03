const { Circle, Square, Triangle } = require('../utils/generateSVG.js');

// Testing SVG file for Circle
describe('Circle SVG file', () => {
  // Test for color
  describe('color', () => {
    it('should generate an SVG file with a circle tag and color set to blue', () => {
      const shape = new Circle('RRR', 'red', 'blue');
      const expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50%" cy="50%" r="40%" fill="blue"/><text x="50%" y="50%" fill="red" text-anchor="middle">RRR</text></svg>';

      expect(shape.generateSvgContent().replace(/\s+/g, '')).toEqual(expectedSvg.replace(/\s+/g, ''));
    });
  });
});

// Testing SVG file for Square
describe('Square SVG file', () => {
  // Test for color
  describe('color', () => {
    it('should generate an SVG file with a square tag and color set to pink', () => {
      const shape = new Square('LOL', 'red', 'pink');
      const expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="80%" height="80%" x="10%" y="10%" fill="pink"/><text x="50%" y="50%" fill="red" text-anchor="middle">LOL</text></svg>';

      expect(shape.generateSvgContent().replace(/\s+/g, '')).toEqual(expectedSvg.replace(/\s+/g, ''));
    });
  });
});

// Testing SVG file for Triangle
describe('Triangle SVG file', () => {
  // Test for color
  describe('color', () => {
    it('should generate an SVG file with a triangle tag and color set to red', () => {
      const shape = new Triangle('TTT', 'pink', 'red');
      const expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50,0 100,100 0,100" fill="red"/><text x="50" y="66" fill="pink" text-anchor="middle">TTT</text></svg>';

      expect(shape.generateSvgContent().replace(/\s+/g, '')).toEqual(expectedSvg.replace(/\s+/g, ''));
    });
  });
});
