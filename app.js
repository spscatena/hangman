// 1. First fetch a word, start with getting a word to be presented - game logic - even get the word on the screen. //dont worry about hiding the word yet
// 2. Keep track of the guesses. -figure out how to get the letters to cross 
// const letters = word.split(" ")

// Letters === ["s" "o" "l"]
// Css to get the strike through 
//Fetch a hint
// -figure out how to get the letters to cross 
// const letters = word.split(" ")

// Letters === ["s" "o" "l"]
// Css to get the strike through 

//Gets a random word when the play button is clicked
const playButton = document.querySelector("#playButton")
playButton.addEventListener("click", async function () {
  const response = await axios.get('https://wordsapiv1.p.mashape.com/words/?random=true&lettersMax=8&partOfSpeech=verb', {
    'headers': {
      "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
    }
  })

  const randomWord = response.data.word
  console.log("original word: " + randomWord)
  // const displayWord = ["_"] // need this to display with underscores ['_', 'A', '_'] 
  // for (let i = 0; i < spacedRandomWord.length; i++) {
  //   console.log(displayWord.length)

  // }

  document.getElementById("randomWordPlacement").innerHTML = randomWord.replace(/[a-z]/g, '_')
  const spacedRandomWord = randomWord.split("")


  //takes the chosen letter and loops through the display word. 

  // const chosenLetter = document.querySelector("alphabet")
  // chosenLetter.addEventListener("click", function () {
  //   const letterActivity = 
  //   for (let i = 0; i < spacedRandomWord.length; i++) {
  //     if (chosenLetter === spacedRandomWord[i]) {
  //       displayWord[i] = chosenLetter
  //     }
  //   }



})













//})


//insert random word into the html
// let insertRandomWord = document.querySelector("#randomWordPlacement")
// insertRandomWord.innerHTML =
//   `<p> Random Word: ${randomWord} </p>`

  //Prints to the page but it's a sting? 
  // let insertRandomWord = document.querySelector("#randomWordPlacement")
  // insertRandomWord.innerHTML =
  //   `<p> Random Word: ${displayWord.join(" ")} </p>`


//Below is all safe code

// const playButton = document.querySelector("#playButton")
// playButton.addEventListener("click", async function () {
//   const response = await axios.get('https://wordsapiv1.p.mashape.com/words/soliloquy', {
//     'headers': {
//       "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
//     }
//   })
//   console.log(response)
// })

// const hintButton = document.querySelector("#hintButton")
// hintButton.addEventListener("click", async function () {
//   const response = await axios.get('https://wordsapiv1.p.mashape.com/words/soliloquy', {
//     'headers': {
//       "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
//     }
//   })
//   console.log(response)
// })


//  
// This code works to get soliloquy in the console.
// const button = document.querySelector("button")
// button.addEventListener("click", async function () {
//   const response = await axios.get('https://wordsapiv1.p.mashape.com/words/soliloquy', {
//     'headers': {
//       "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
//     }
//   })

//   console.log(response)
// })


// I dont need this: 
// let response2 = await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${randomWord}/synonyms`, {
//   'headers': {
//     "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
//   }
// })
// const synonym = response2.data.synonyms[0]
// console.log("synonym: " + synonym)

// if (synonym === undefined) {
//   console.log("test")
//   response2 = await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${randomWord}/definitions`, {
//     'headers': {
//       "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
//     }
//   })
//   console.log(response2)
//   const definition = response2.data.definitions[0].definition
//   console.log(response2.data.definitions[0].definition)
//   console.log("second word def: " + definition)
// }