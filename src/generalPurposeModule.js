export function returnRandomElementIndexFromArray(array) {
    const arrayLength = array.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    
    return randomIndex;
}