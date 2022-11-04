// Explanation:
// https://leetcode.com/problems/search-suggestions-system/discuss/1024115/Lessons-learned



// Solutions 1:
// class TrieNode {
//   key? : string
//   parent?: TrieNode
//   children : Record<string, TrieNode>
//   isTerminal : boolean
//   word : string

//   /**
//    *
//    */
//   constructor(key : string | null) {
//     this.key = key || undefined
//     this.isTerminal = false
//     this.children = {}
//     this.word = ""
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
//         currentNode.isTerminal = true
//         currentNode.word = word
//       }
//     }
//   }

  insertWords(words : string[]) {
    for(var word of words) {
      this.insertWord(word)
    }
  }

  printNodes(currentNode : TrieNode = this.root, layer : number = 1) {
    if (currentNode.isTerminal && !!!Object.keys(currentNode.children).length) {
      console.log({currentNode, layer})
      console.log("[ End Node ]")
    } else {
      console.log({ currentNode, layer })
      for (let node of Object.values(currentNode.children)) {
        this.printNodes(node, layer + 1)
      }
    }
    
  }
}




// O(n * m)
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products : string[], searchWord : string) {
  const trie = new Trie()
  trie.insertWords(products)
  trie.printNodes()

  let prefix = '';
  const answer : string[][] = []
  const numberOfWords = 3

  for (const char of searchWord) {
    prefix += char
    const bestOptions = findBestOptions(prefix, trie, numberOfWords)
  }

  function findBestOptions(prefix : string, trie : Trie, numberOfWords : number) {
    const bestOptions = []

    while (bestOptions.length < numberOfWords) {
      dfs()
    }


    function dfs(currentNode : TrieNode) {
      if (currentNode.isTerminal) bestOptions.push(currentNode.word)
    }
  }
};

const products = ["mobile","mouse","moneypot","monitor","mousepad"]
const searchWord = "mouse"

suggestedProducts(products, searchWord)

// Solutions 2:
