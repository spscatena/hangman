
const button = document.querySelector("button")
button.addEventListener("click", async function () {
  const response = await axios.get('https://wordsapiv1.p.mashape.com/words/soliloquy', {
    'headers': {
      "X-Mashape-Key": "51dca4278fmsh6c701f259ac22d4p1274dajsn501e7e39e747",
    }
  })

  console.log(response)
})


