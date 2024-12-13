import './styles-gameUi.css'

export const colors = {
    green: {
        name: 'green',
        hexCode: '#33cc33'
    },
    red: {
        name: 'red',
        hexCode: '#ff0000'
    },
    blue: {
        name: 'blue',
        hexCode: '#3333ff'
    },
    yellow: {
        name: 'yellow',
        hexCode: '#ffd633'
    }
}

export function generateSquare(squareColor, colorHexcode) {
    const square = document.createElement('div');
    square.className = 'square';
    square.id = squareColor;
    square.style.backgroundColor = colorHexcode;

    return square;
}