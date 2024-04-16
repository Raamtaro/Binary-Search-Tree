import Tree from "./classes/bstClass.js";
import prettyPrint from "./misc/prettyPrint.js";


const ogArray = [7,21,35,3,6,8,90,1,12,15,35, 31, 67, 420, 519, 534, 356, 266, 532, 83, 6]


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




// console.log(myTree.levelOrder())
// console.log(myTree.inOrder())
// console.log(myTree.preOrder())
// console.log(myTree.postOrder())
// console.log(myTree.find(100000000))

// const newTree = new Tree(myTree.levelOrder())


console.log("*******************NEW TREE*******************")
prettyPrint(myTree.root)
console.log(myTree.isBalanced())
console.log(myTree.depth(57))
console.log("*******************POST BALANCE*******************")

myTree.reBalance()
prettyPrint(myTree.root)
console.log(myTree.height(532))
console.log(myTree.depth(57))



// console.log(mergeSort([]))