class Shape {
    constructor(text, color, background) {
      this.text = text;
      this.color = color;
      this.background = background;
    }
  
    generateSvgContent() {
      throw new Error('Method not implemented.');
    }
  }
  
  class Circle extends Shape {
    generateSvgContent() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50%" cy="50%" r="40%" fill="${this.background}" /><text x="50%" y="50%" fill="${this.color}" text-anchor="middle">${this.text}</text></svg>`;
    }
  }
  
  class Triangle extends Shape {
    generateSvgContent() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50,0 100,100 0,100" fill="${this.background}" /><text x="50" y="66" fill="${this.color}" text-anchor="middle">${this.text}</text></svg>`;
    }
  }
  
  class Square extends Shape {
    generateSvgContent() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="80%" height="80%" x="10%" y="10%" fill="${this.background}" /><text x="50%" y="50%" fill="${this.color}" text-anchor="middle">${this.text}</text></svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  