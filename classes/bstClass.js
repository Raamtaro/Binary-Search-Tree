import Node from "./nodeClass.js"
import mergeSort from "../mergeSort/mergeSort.js";

class Tree {

    constructor(startingArray = []){
        this.root = this.buildTree([...new Set(mergeSort(startingArray))])

    }

    buildTree(sortedArray) {

        const startIndex = 0
        const endIndex = sortedArray.length - 1

        if (startIndex > endIndex) {return null}

        const mid = Math.floor(sortedArray.length/2)
        const root = new Node(sortedArray[mid])
        
        root.left = this.buildTree(sortedArray.slice(0, mid))
        root.right = this.buildTree(sortedArray.slice(mid+1, sortedArray.length))

        return root  
    }


    insertRec(root, value) {

        if (!root) {
            
            return new Node(value)
        }

        //If the value is less than the root/current node.... then recurse down the left path
        //If the value is greater than the root/current node... then recurse down the right path

        if (value < root.data) {
            root.left = this.insertRec(root.left, value)
        }
        else if (value > root.data) {
            root.right = this.insertRec(root.right, value)
        }
        console.log(root)


        return root
    }

    insert(value) {

        this.root = this.insertRec(this.root, value)
        return this.root
    }

    delete(value) {

    }
}

export default Tree