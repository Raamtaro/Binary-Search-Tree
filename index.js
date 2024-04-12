import Tree from "./classes/bstClass.js";

// import mergeSort from "./mergeSort/mergeSort.js";

// const mergedArray = mergeSort([7,21,35,3,6,8,90,1,12,15,35, 31, 69, 420, 519, 534, 356, 266, 532, 83, 6])
// console.log(mergedArray)

// const undupedArray = [...new Set(mergedArray)]
// console.log(undupedArray)



console.log([7,21,35,3,6,8,90,1,12,15,35, 31, 67, 420, 519, 534, 356, 266, 532, 83, 6].length)
const myTree = new Tree([7,21,35,3,6,8,90,1,12,15,35, 31, 67, 420, 519, 534, 356, 266, 532, 83, 6])
// const myTree = new Tree([])
console.log(myTree.root)