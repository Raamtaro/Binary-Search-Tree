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

        // if (!root) {return null}

        // if (value < root.data) {return this.#findRec(root.left, value)}
        // if (value > root.data) {return this.#findRec(root.right, value)}

        // return root

        return !root ? null : (value < root.data ? this.#findRec(root.left, value) : (value > root.data ? this.#findRec(root.right, value) : root)) //Equivalent to the above commented code
    }
    //********************** */

    //*************LEVEL ORDER */
    levelOrder(callback = (nodeData) => {}) {

        let results = []
        this.#levelOrderIteration(this.root, node => {

            results.push(node.data) 
            callback(node) 
        })

        return results
    }

    #levelOrderIteration(root, callback) {

        if (!root) {return}

        const queue = [root]
        while (queue.length > 0) {

            let current = queue.shift() //grab the next in line
            callback(current) //Process the next in line info - via the callback that is provided in the levelOrder fn

            //Add the left child of the current node, along with the right child of the current node if they exist
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        return //not necessary, readability
    }
    //**************************************/

    //*************IN ORDER *************/
    inOrder(callback = (nodeData) => {}) {

        let results = []
        this.#inOrderRec(this.root, node => {

            results.push(node.data)
            callback(node)
        })

        return results
    }

    #inOrderRec(root, callback) {

        if (!root) {return}

        this.#inOrderRec(root.left, callback)
        callback(root)
        this.#inOrderRec(root.right, callback)

        return
    }
    //**************************************/

    //*************PRE ORDER *************/
    preOrder(callback = (nodeData) => {}){

        let results = []
        this.#preOrderRec(this.root, node => {

            results.push(node.data)
            callback(node)
        })

        return results
    }

    #preOrderRec(root, callback){

        if (!root) {return}

        callback(root)
        this.#preOrderRec(root.left, callback)
        this.#preOrderRec(root.right, callback)

        return
    }
    //**************************************/

    //*************POST ORDER *************/
    postOrder(callback = (nodeData) => {}){

        let results = []
        this.#postOrderRec(this.root, node => {

            results.push(node.data)
            callback(node)
        })

        return results
    }

    #postOrderRec(root, callback){

        if (!root) return

        this.#postOrderRec(root.left, callback)
        this.#postOrderRec(root.right, callback)
        callback(root)

        return
    }
    //**************************************/


}

export default Tree