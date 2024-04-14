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
        //1. value = root.data (where root is the current node that we're recursing through) --- ACTUALLY DON'T PUT THIS AS AN EXIT CONDITION
        //2. !root - this means that the the value we want to delete doesn't exist and so we can return

        if (!root) {return root}

        //Otherwise, kind of similar to the insertRec fn
        //is the value < the root.data? If so, root.left = #deleteRec(root.left, value)
        //likewise, root.right = #deleteRec(root.right, value)

        if (value < root.data) { //Recur down the left if the value is less than the current node

            root.left = this.#deleteRec(root.left, value)
            return root
        }

        else if (value > root.data) {//Likewise for the right if the value is greater

            root.right = this.#deleteRec(root.right, value)
            return root
        }

        //At this point in the function, the recursive call has hit a point where root.data ==== value

        
        //Three cases:
        
        //1 and 2. The node has just one child (or no children) - so at least one child is null

        if (root.left === null || root.right === null) {return root.left === null ? root.right : root.left}
        
        //3. The node has both children
        //---- Do the children have children?
        let succParent = root;
        let succ = root.right;

        while (succ.left !== null) {

            succParent = succ
            succ = succ.left //Traverse down the left in case there are still descendants on the left side
        }

        if (succParent !== root) {

            succParent.left = succ.right
        }
        else {

            succParent.right = succ.right
        }

        root.data = succ.data

        return root //End up returning root
    }
    /************************ */
}

export default Tree