export function returnRandomElementIndexFromArray(array) {
    const arrayLength = array.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    
    return randomIndex;
}

export function areArraysEqual(firstArray, secondArray) {
    for (let i = 0, length = firstArray.length; i<=length; i++) {
        if (firstArray[i] === secondArray[i]) {
            continue;
        } else {
            return false
        }
    }

    return true;
}