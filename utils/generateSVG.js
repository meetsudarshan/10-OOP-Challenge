class Shape {
  constructor(text, color, background) {
    this.text = text;
    this.color = color;
    this.background = background;
  }

  generateSvgContent() {
    throw new Error('Method not implemented.'); // Placeholder method that should be implemented in subclasses
  }
}

class Circle extends Shape {
  generateSvgContent() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="50%" cy="50%" r="40%" fill="${this.background}" /> <!-- Circle shape with specified attributes -->
      <text x="50%" y="50%" fill="${this.color}" text-anchor="middle" font-size="80">${this.text}</text> <!-- Text positioned at the center of the circle -->
    </svg>`;
  }
}

class Triangle extends Shape {
  generateSvgContent() {
    const svgWidth = 300;
    const svgHeight = 200;
    const triangleHeight = svgHeight * 0.866; // Height of an equilateral triangle

    const centerX = svgWidth / 2;
    const textY = (svgHeight - triangleHeight) / 2 + triangleHeight * 0.75; // Adjusted y position for the text

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <polygon points="${centerX},${(svgHeight - triangleHeight) / 2} ${svgWidth},${svgHeight} 0,${svgHeight}" fill="${this.background}" /> <!-- Triangle shape with specified points -->
      <text x="${centerX}" y="${textY}" fill="${this.color}" text-anchor="middle" font-size="80">${this.text}</text> <!-- Text positioned at the center of the triangle -->
    </svg>`;
  }
}

class Square extends Shape {
  generateSvgContent() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="80%" height="80%" x="10%" y="10%" fill="${this.background}" /> <!-- Square shape with specified attributes -->
      <text x="50%" y="55%" fill="${this.color}" text-anchor="middle" font-size="80">${this.text}</text> <!-- Text positioned at the center of the square -->
    </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
