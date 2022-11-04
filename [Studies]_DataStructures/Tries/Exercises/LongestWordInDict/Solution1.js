function longestWord(words) {
  const dictionary = new Set([...words])
  const validWords = new Set()

  for (let word of words) {
    if (word.length === 1) {
      validWords.add(word)
      continue
    }
    const shortenedWord = word
    shortenedWord.slice(0, -1)

    if (dictionary.has(shortenedWord) && validWords.has(shortenedWord)) {
      validWords.add(word)
    }
  }
}

longestWord(['a', 'banana', 'app', 'ap', 'appl', 'apply', 'apple'])