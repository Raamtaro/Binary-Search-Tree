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

    //Inserting Values******* */
    #insertRec(root, value) {

        if (!root) {
            
            return new Node(value)
        }

        if (value < root.data) {

            root.left = this.#insertRec(root.left, value)
        }
        else if (value > root.data) {

            root.right = this.#insertRec(root.right, value)
        }

        return root
    }

    insert(value) {

        this.root = this.#insertRec(this.root, value)
        return this.root
    }
    //*********************** */

    //Deleting Values******** */
    delete(value) {
        
        this.root = this.#deleteRec(this.root, value)
        return this.root
    }

    #deleteRec(root, value) {

        //Recursion
        //Exit Condition(s)?:
        //1. value = root.data (where root is the current node that we're recursing through)
        //2. !root - this means that the the value we want to delete doesn't exist and so we can return

        //Otherwise, kind of similar to the insertRec fn
        //is the value < the root.data? If so, root.left = #deleteRec(root.left, value)
        //likewise, root.right = #deleteRec(root.right, value)

        //Once the values are equal - we've hit it
        //Three cases:
        //1. The node has no children
        //2. The node has one children
        //3. The node has both children
        //---- Do the children have children?

        //End up returning root
    }
    /************************ */
}

export default Tree