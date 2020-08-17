//Objective is to flip a binary tree upside down. In our binary tree,
//all right nodes are either empty or have a sibling.
//When flipping, we make every right-left node into a left-leaf node.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 3)
tree.addLeftNode(tree.root.left, 4)
tree.addRightNode(tree.root.left, 5)


//O(n) solution where n is the number of nodes in the binary tree
//We do a DFS traversal down the tree, then build the new tree backwards

function upsideDownBinaryTree(root) {
    if (!root || !root.left && !root.right) {
        return root
    }
    
    //Returns 4 as newNode
    let newNode = upsideDownBinaryTree(root.left)
    
    //Root is now 2 from call stack
    //Make 4.left = 5 (make all right-leaf nodes into left-leaf nodes)
    //Make 4.right = 2
    root.left.left = root.right
    root.left.right = root
    
    //Make left and right pointers of 2 null
    root.left = null
    root.right = null
    
    return newNode
}
return upsideDownBinaryTree(tree.root)