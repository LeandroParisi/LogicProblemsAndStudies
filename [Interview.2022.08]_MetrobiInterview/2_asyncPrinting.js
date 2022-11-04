function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solution2(array) {
  let counter = 1

  for (let item of array) {
    await sleep(counter * 1000)
    console.log(item, Date.now())
    counter *= 2
  }
}

async function solution2Alternative(array) {
  let counter = 1

  for (let item of array) {
    setTimeout(() => {
      console.log(item, Date.now())
    }, counter * 1000)

    counter *= 2
  }
}

solution2Alternative([1, 2, 3]).then()