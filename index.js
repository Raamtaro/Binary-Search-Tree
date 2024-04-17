import Tree from "./classes/bstClass.js";
import prettyPrint from "./misc/prettyPrint.js";
import { randomArray, cryptoRandomArray, cryptoRandomAdditions } from "./misc/randomArray.js"; //Two different methods of generating random numbers

const myTree = new Tree(cryptoRandomArray()) //Creating Tree out of 25 random numbers that are less than 100
const checkBalance = bsTree => {return bsTree.isBalanced() ? "Balanced" : "Unbalanced" } //A little redundant, but just a helper
const treeAdditions = cryptoRandomAdditions(7) //Preparing an array of 7 random numbers greater than 100 to later unbalance the tree


console.log("*******************STARTING TREE***************************")

prettyPrint(myTree.root)
console.log(checkBalance(myTree))

console.log("*******************BFS and DFS Analysis***************************")

console.log("Breadth First Search")
console.log(myTree.levelOrder())

console.log("Depth First Search")
console.log("PreOrder:", myTree.preOrder())
console.log("InOrder:", myTree.inOrder())
console.log("PostOrder:", myTree.postOrder())

console.log("*******************UNBALANCING TREES***************************")

treeAdditions.forEach(num => {

    console.log(`inserting: ${num}`)
    myTree.insert(num)
})

prettyPrint(myTree.root)

console.log(`Following these insertions, this BST is currently: ${checkBalance(myTree)}`)


console.log("*******************REBALANCED TREE***************************")
prettyPrint(myTree.reBalance())

console.log(`Tree is now ${checkBalance(myTree)}`)

console.log("*******************FINAL BFS & DFS RESULTS***************************")

console.log("Breadth First Search")
console.log(myTree.levelOrder())

console.log("Depth First Search")
console.log("PreOrder:", myTree.preOrder())
console.log("InOrder:", myTree.inOrder())
console.log("PostOrder:", myTree.postOrder())