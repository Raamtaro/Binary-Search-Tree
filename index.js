import Tree from "./classes/bstClass.js";
import prettyPrint from "./misc/prettyPrint.js";
// import mergeSort from "./mergeSort/mergeSort.js";

const ogArray = [7,21,35,3,6,8,90,1,12,15,35, 31, 67, 420, 519, 534, 356, 266, 532, 83, 6]
const smallArray = [7,21,35,3]

const myTree = new Tree(ogArray)

prettyPrint(myTree.root)

console.log("*******************POST CHANGE*******************")

myTree.insert(17)
myTree.insert(52)
myTree.insert(420)
myTree.insert(112)
myTree.insert(1)
myTree.insert(311)
myTree.insert(57)

prettyPrint(myTree.root)

myTree.delete(90)

console.log("*******************POST CHANGE*******************")

prettyPrint(myTree.root)


// console.log(mergeSort([]))