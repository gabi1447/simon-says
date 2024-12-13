import './styles.css';

import { generateSquare, colors } from './gameUi';

const GAMECONTAINER = document.querySelector('#content'); 

function main() {
    const greenSquare = generateSquare(colors.green.name, colors.green.hexCode);

    GAMECONTAINER.appendChild(greenSquare);
}

main();