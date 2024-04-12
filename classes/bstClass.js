import Node from "./nodeClass.js"
import mergeSort from "../mergeSort/mergeSort.js";

class Tree {

    constructor(startingArray = []){
        this.root = this.buildTree([...new Set(mergeSort(startingArray))])

    }

    buildTree(sortedArray) {

        // const sortedArray = [...new Set(mergeSort(startingArray))] //removes duplicates after mergeSorting the array
        const startIndex = 0
        const endIndex = sortedArray.length - 1

        if (startIndex > endIndex) {return null}

        const mid = Math.floor(sortedArray.length/2)
        const root = new Node(sortedArray[mid])
        // console.log(root)

        root.left = this.buildTree(sortedArray.slice(0, mid))
        root.right = this.buildTree(sortedArray.slice(mid+1, sortedArray.length))

        return root


        
    }
}

export default Tree