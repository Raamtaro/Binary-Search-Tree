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

        if (!root) {return root}

        if (value < root.data) { 

            root.left = this.#deleteRec(root.left, value)
            return root
        }

        else if (value > root.data) {

            root.right = this.#deleteRec(root.right, value)
            return root
        }

        if (root.left === null || root.right === null) {return root.left === null ? root.right : root.left}
        
        let succParent = root;
        let succ = root.right;

        while (succ.left !== null) {

            succParent = succ
            succ = succ.left 
        }

        if (succParent !== root) {

            succParent.left = succ.right
        }
        else {

            succParent.right = succ.right
        }

        root.data = succ.data

        return root 
    }
    /************************ */


    // Find(value) code
    find(value) {return this.#findRec(this.root, value)}

    #findRec(root, value) {

        //Exit Condition - the root is null
        if (!root) {return null}

        //If the script is running at this point, then the 'root' of the current (sub)tree contains something

        //In this case, we'd need to check for - is the value < or > root.data?
        if (value < root.data) {
            root = this.#findRec(root.left, value) 
            return root
            
        }
        else if (value > root.data) {

            //likewise, traverse the right side
            root = this.#findRec(root.right, value) 
            return root
        }

        return root

    }
    //********************** */

}

export default Tree