import merge from "./merge.js";

const mergeSort = (unsortedArray) => {

    if (!unsortedArray) return "Cannot sort an empty array";
    if (unsortedArray.length === 1) return unsortedArray;

    const midpoint = Math.floor(unsortedArray.length/2);

    return [...merge(mergeSort(unsortedArray.slice(0, midpoint)), mergeSort(unsortedArray.slice(midpoint, unsortedArray.length)))]
}

export default mergeSort