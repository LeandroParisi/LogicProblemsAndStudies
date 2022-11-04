function formingMagicSquare(s) {
  const magicSquareSum = 15
  
  const [line1, line2, line3] = s
  
  const line1Sum = line1.reduce((p, c) => p + c)
  const line2Sum = line2.reduce((p, c) => p + c)
  const line3Sum = line3.reduce((p, c) => p + c)

  let stop = false

  while (line1Sum )

  return line1Sum
}

console.log(formingMagicSquare([
  [5, 3, 4], 
  [1, 5, 8], 
  [6, 4, 2]
]))