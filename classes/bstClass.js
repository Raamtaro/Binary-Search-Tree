import Node from "./nodeClass.js"
import mergeSort from "../mergeSort/mergeSort.js";
/**
 * THIS CODE IS REFACTORED IN THIS BRANCH TO FOLLOW AN IMMUTABILITY PATTERN.
 * 
 * This means that a new Tree() object will be returned instead of modifications to this.root
 */
class Tree {

    constructor(input = null){

        // this.root = Tree.buildTree([...new Set(mergeSort(startingArray))])
        //If the input is an array, then sort it and build a new Tree
        //Else, this.root = input
        this.root = Array.isArray(input) ? Tree.buildTree([...new Set(mergeSort(input))]) : input
    }

    static buildTree(sortedArray) {

        const startIndex = 0
        const endIndex = sortedArray.length - 1

        if (startIndex > endIndex) {return null}

        const mid = Math.floor(sortedArray.length/2)
        const root = new Node(sortedArray[mid])
        
        root.left = Tree.buildTree(sortedArray.slice(0, mid))
        root.right = Tree.buildTree(sortedArray.slice(mid+1, sortedArray.length))

        return root  
    }

    //Inserting Values******* */
    #insertRec(root, value) {

        if (!root) {
            
            return new Node(value)
        }

        if (value < root.data) {

            // root.left = this.#insertRec(root.left, value)
            //accounting for immutability:
            return new Node(root.data, this.#insertRec(root.left, value), root.right)
        }
        else if (value > root.data) {

            // root.right = this.#insertRec(root.right, value)
            //accounting for immutability
            return new Node(root.data, root.left, this.#insertRec(root.right, value))
        }

        return root
    }

    insert(value) {

        // this.root = this.#insertRec(this.root, value)
        let immutableRoot = this.#insertRec(this.root, value) //replacing above line with this one (and similarly for all other helper fns) to follow immutable pattern
        return new Tree(immutableRoot)
    }
    //*********************** */

    //Deleting Values******** */
    delete(value) {
        
        // this.root = this.#deleteRec(this.root, value)
        let immutableRoot = this.#deleteRec(this.root, value)
        return new Tree(immutableRoot)
    }

    #deleteRec(root, value) {

        if (!root) {return root}

        if (value < root.data) { 

            // root.left = this.#deleteRec(root.left, value)
            // return root
            //Accounting for immutability and recurring left
            return new Node(root.data, this.#deleteRec(root.left, value), root.right)
        }

        else if (value > root.data) {

            // root.right = this.#deleteRec(root.right, value)
            // return root
            //Account for immutability and recurring right
            return new Node(root.data, root.left, this.#deleteRec(root.right, value))
        }

        if (root.left === null || root.right === null) {return root.left === null ? root.right : root.left}
        
        // let succParent = root;
        let succ = root.right;

        while (succ.left) {
            succ = succ.left 
        }

        return new Node(successor.data, root.left, this.#deleteRec(root.right, succ.data))
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

    //Find the height of a given node ********/
    height(node) {
        //height of a given node is the number of edges from the given node to the nearest leaf node
        let heightLeft = 0;
        let heightRight = 0;

        const parent = this.find(node) //Find the subTree, which becomes the new root
        const leftChild = parent.left
        const rightChild = parent.right

        if (!parent) return -1 

        if (leftChild) heightLeft = (this.height(leftChild.data) + 1)
        if (rightChild) heightRight = (this.height(rightChild.data) + 1)

        
        return heightRight > heightLeft ? heightRight : heightLeft
    }

    depth(node) {
        //depth of the given node - distance between the node and the root
        return this.#depthRec(this.root, node)
    }

    #depthRec(root, value) {

        let depth = 0
        const node = this.find(value)

        if (!node) return `Node with data: ${value} does not exist`

        if (root === node) {
            return 0
        }

        if (value < root.data) {
            //Traverse down the left
            depth = this.#depthRec(root.left, value) + 1
        }

        if (value > root.data) {
            //traverse down the right
            depth = this.#depthRec(root.right, value) + 1
        }

        return depth


    }

    isBalanced() {

        const root = this.root
        const leftSubTree = root.left
        const rightSubTree = root.right

        const delta = Math.abs(this.height(leftSubTree.data) - this.height(rightSubTree.data))

        return delta > 1 ? false : true
    }

    reBalance() {

        // if (!this.isBalanced()) this.root = Tree.buildTree(this.inOrder())
        // return this.root

        //immutable pattern:
        // Is the tree unbalanced? if so, new Tree.buildTree(this.inOrder()) else, null

        return !this.isBalanced() ? new Tree(this.inOrder()) : null
    }


}

export default Tree