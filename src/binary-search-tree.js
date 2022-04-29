const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

 add(data) {
    let insertNode = new Node(data);
   if(!this.rootNode) {
      this.rootNode = insertNode;
      return;
    }
    let currentNode = this.rootNode;
    while(currentNode) {
      if(insertNode.data < currentNode.data) {
          if(!currentNode.left) {
            currentNode.left = insertNode;
            return;
          }
          currentNode = currentNode.left;
        }
        
        else {
          if(!currentNode.right) {
            currentNode.right = insertNode;
            return;
          }
        currentNode = currentNode.right;
        }
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
  let currentNode = this.rootNode;
  
  function reccursiveSearch(node, data) {
    if(node === null)
        return null;

    else if(data < node.data)
        return reccursiveSearch(node.left, data);
 
    else if(data > node.data)
        return reccursiveSearch(node.right, data);
 
    else
        return node;
}
  return reccursiveSearch(currentNode,data);
  }

 remove(data) {
    

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let tmp = node.right;
        while (tmp.left) {
          tmp = tmp.left;
        }
        node.data = tmp.data;

        node.right = removeNode(node.right, tmp.data);

        return node;
      }
    }
    this.rootNode = removeNode(this.root(), data);
  }

  min(node = this.rootNode) {
  if (node == null)
            return Number.MAX_SAFE_INTEGER;
        return Math.min(node.data, this.min(node.left),this.min(node.right));
  }

  max(node = this.rootNode) {
    if (node == null)
            return null;
        return Math.max(node.data, this.max(node.left),this.max(node.right));
  }

}

module.exports = {
  BinarySearchTree
};