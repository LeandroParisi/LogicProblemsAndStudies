function StringChallenge(str) { 
    const asciiStr = ""
    console.log("A".charCodeAt(0))
    for (let i = 0; i < str.length; i += 1) {
      const asciiCode = str.charCodeAt(i)
      console.log(asciiCode)
      console.log(asciiCode)

    }
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge("teste"));