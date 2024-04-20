import prettyPrint from "./misc/prettyPrint.js";
import Tree from "./classes/bstClass.js";

import { randomArray, cryptoRandomArray, cryptoRandomAdditions } from "./misc/randomArray.js"; //Two different methods of generating random numbers


let ogTree = new Tree(cryptoRandomArray()) //A new Balanced Tree from a cryptoRandom 25 numbers
let treeInsertions = cryptoRandomArray(4)

console.log(ogTree.levelOrder())

console.log("PreOrder:", ogTree.preOrder())
console.log("InOrder:", ogTree.inOrder())
console.log("PostOrder:", ogTree.postOrder())

let newTree = ogTree.insert(500)
let newerTree = newTree.insert(502)
let evenNewerTree = newerTree.insert(501)

let theLastTree = evenNewerTree.delete(evenNewerTree.root.data)

prettyPrint(evenNewerTree.root)
prettyPrint(theLastTree.root)

prettyPrint(ogTree.root)
