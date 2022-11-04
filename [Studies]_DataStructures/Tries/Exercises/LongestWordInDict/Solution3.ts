class TrieNode {
  key? : string
  parent?: TrieNode
  children : TrieNode[] = []
  isWordEnd : boolean
  word?: string

  /**
   *
   */
  constructor(key : string | null) {
    this.key = key || undefined
    this.isWordEnd = false
  }

  getWord() {
    let output : string[] = []
    let node : TrieNode = this
    
    while (node !== null) {
      output.unshift(node.key!)
      node = node.parent as TrieNode
    } 

    return output.join('')
  }
}

class Trie {
  root : TrieNode

  /**
   *
   */
  constructor() {
    this.root = new TrieNode(null)
  }

  insertWord(word : string) {
    var currentNode = this.root

    for (let i = 0; i < word.length; i += 1) {
      const currentChar = word[i]

      if (!currentNode.children[currentChar]) {
        currentNode.children[currentChar] = new TrieNode(currentChar)
        currentNode.children[currentChar].parent = currentNode
      }

      currentNode = currentNode.children[currentChar]

      if (i === word.length - 1) {
        currentNode.isWordEnd = true
        currentNode.word = word
      }
    }
  }

  insertWords(words : string[]) {
    for(var word of words) {
      this.insertWord(word)
    }
  }

  printNodes(currentNode : TrieNode = this.root, layer : number = 1) {
    if (currentNode.isWordEnd && !!!Object.keys(currentNode.children).length) {
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

function longestWord3(words : string[]) {
  const trie = new Trie()

  trie.insertWords(words)

  trie.printNodes()

  const dfs = (source : TrieNode, originalTrie : Trie) => {
    const stack = [source]

    let wordsSoFar : string[] = []

    while(!!stack.length) {
      const current = stack.pop()

      if ((current?.isWordEnd || !current!.key)) {
        const children = Object.values(current!.children)

        if (!!!children.length) {
          const maxLength = Math.max(...wordsSoFar.map(x => x.length))

          if (maxLength < current!.word!.length) {
            wordsSoFar = [current!.word!]
          } else if (maxLength > current!.word!.length) {
            // nothin
          } else {
            wordsSoFar.push(current!.word!)
          }
        }

        stack.push(...children)
      }
    }

    return wordsSoFar
  }

  const wordsSoFar = dfs(trie.root, trie)

  console.log(wordsSoFar)


  function lexiCompare (a : string, b : string) {
    if(a === b) {
      return 0;
   }

    if (a > b) {
      return 1;
    }

    return -1;
  }

  let biggest = [...wordsSoFar][0]

  wordsSoFar.forEach(w => {
    const result = lexiCompare(biggest, w)

    if (result === 1) {
      biggest = w
    }
  })

  return biggest
}

const words = ['a', 'banana', 'app', 'apply', 'ap', 'appl', 'appla', 'apple', 'apple']

longestWord3(words)