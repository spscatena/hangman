const guesses = document.querySelector("#guesses")

const playButton = document.querySelector("#playButton")
playButton.addEventListener("click", async function () {
  const response = await axios.get('https://wordsapiv1.p.mashape.com/words/?random=true&lettersMax=8&partOfSpeech=verb', {
    'headers': {
      "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
    }
  })

  playButton.hidden = true;




  const randomWord = response.data.word
  console.log("original word: " + randomWord)
  const underlineArray = []
  for (let i = 0; i < randomWord.length; i++) {
    underlineArray.push("__")
  }
  const underlineWord = underlineArray.join("  ") //
  console.log(underlineWord)
  document.querySelector("#randomWordPlacement").innerHTML = underlineWord
  let wrongGuesses = 0


  document.addEventListener("keydown", function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (randomWord.includes(e.key)) {
        for (let i = 0; i < randomWord.length; i++) {
          if (e.key === randomWord[i]) {
            console.log("it's a match")
            underlineArray[i] = e.key //wherever i is in the _, set that to the key pressed so that appears instead of the underscore
            let underlineWord = underlineArray.join("  ") //this is going from an array to a string
            document.querySelector("#randomWordPlacement").innerHTML = underlineWord
          }
        }
      } else {
        guesses.innerHTML += e.key
        wrongGuesses += 1
        if (wrongGuesses === 1) {
          document.querySelector("#hangman").innerHTML = `<img id="hang1" src="hangman1.png"><img>`
        } else if (wrongGuesses === 2) {
          document.querySelector("#hangman").innerHTML = `<img id="hang2" src="hangman2.png"><img>`
        } else if (wrongGuesses === 3) {
          document.querySelector("#hangman").innerHTML = `<img id="hang3" src="hangman3.png"><img>`
        } else if (wrongGuesses === 4) {
          document.querySelector("#hangman").innerHTML = `<img id="hang4" src="hangman4.png"><img>`
        } else if (wrongGuesses === 5) {
          document.querySelector("#hangman").innerHTML = `<img id="hang5" src="hangman5.png"><img>`
        } else if (wrongGuesses === 6) {
          document.querySelector("#hangman").innerHTML = `<img id="hang1" src="hangman6.png"><img>`
        } else if (wrongGuesses === 7) {
          document.querySelector("#hangman").innerHTML = `<img id="hang1" src="hangman7.png"><img>`
        }



      }

      if (underlineArray.join("") === randomWord) {
        alert("you win!")
      } else if (guesses.innerHTML.length === 7) {
        alert("you lose!")
      }

    }
  })

  // document.addEventListener("DOMContentLoaded", function () {
  //   document.getElementById("#playButton").disabled = true;
});

  //document.getElementById("#playButton").disabled = true;
  //document.getElementById("#playButton").style.display = "none";


  //playButton.document.style 


  //still need to do: 
  //1. add the hangman images 
  //
  //2. bug: hitting the enter key = the play button which makes things buggy
  //3. Hint to add a letter




  // const randomLetter = math.random(randomLetter)
  // const hintButton = document.querySelector("#hintButton")
  // //hintButton.addEventListener("click", function () {

  // function hint() {
  //   if (hintButton.addEventListener("click")) {
  //     const randomLetter = underlineArray[(Math.floor(Math.random() * underlineArray.length))];
  //     document.querySelector("#randomWordPlacement").innerHTML = randomLetter

  //   }
  // }






