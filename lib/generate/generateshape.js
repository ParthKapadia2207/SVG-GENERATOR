
const { Circle, Triangle, Square } = require('../classes/shapes.js')

function generateSvg(data) {
    let svg;
    switch (data.shape) {
        case 'square':
            svg = new Square(data.text, data.textColor, data.color)
            svg.setColor(data.color)
            break;
        case 'circle':
            svg = new Circle(data.text, data.textColor, data.color)
            svg.setColor(data.color)
            break;
        case 'triangle':
            svg = new Triangle(data.text, data.textColor, data.color)
            svg.setColor(data.color)
            break;
        default: 
            svg = ''
            break;
    }
        newSvg = svg.render()
        console.log(newSvg)
        return newSvg
}

module.exports = generateSvg;
