// class TrieNode {
//   key? : string
//   parent?: TrieNode
//   children : TrieNode[] = []
//   isWordEnd : boolean

//   /**
//    *
//    */
//   constructor(key : string | null) {
//     this.key = key || undefined
//     this.isWordEnd = false
//   }

//   getWord() {
//     let output : string[] = []
//     let node : TrieNode = this
    
//     while (node !== null) {
//       output.unshift(node.key!)
//       node = node.parent as TrieNode
//     } 

//     return output.join('')
//   }
// }

// class Trie {
//   root : TrieNode

//   /**
//    *
//    */
//   constructor() {
//     this.root = new TrieNode(null)
//   }

//   insertWord(word : string) {
//     var currentNode = this.root

//     for (let i = 0; i < word.length; i += 1) {
//       const currentChar = word[i]

//       if (!currentNode.children[currentChar]) {
//         currentNode.children[currentChar] = new TrieNode(currentChar)
//         currentNode.children[currentChar].parent = currentNode
//       }

//       currentNode = currentNode.children[currentChar]

//       if (i === word.length - 1) {
//         currentNode.isWordEnd = true
//       }
//     }
//   }

//   insertWords(words : string[]) {
//     for(var word of words) {
//       this.insertWord(word)
//     }
//   }

//   printNodes(currentNode : TrieNode = this.root, layer : number = 1) {
//     if (currentNode.isWordEnd && !!!Object.keys(currentNode.children).length) {
//       console.log({currentNode, layer})
//       console.log("[ End Node ]")
//     } else {
//       console.log({ currentNode, layer })
//       for (let node of Object.values(currentNode.children)) {
//         this.printNodes(node, layer + 1)
//       }
//     }
    
//   }
// }

// const words = ['a', 'banana', 'app', 'ap', 'appl', 'apply', 'apple']

// const trie = new Trie()

// trie.insertWords(words)

// trie.printNodes()

