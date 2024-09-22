import { getWord } from './words.js'

function main() {
  const img = document.querySelector('.game img')
  const words = document.querySelector('.words')
  const clue = document.querySelector('.clue')
  const letters = document.querySelector('.letters')
  const newGameBtn = document.querySelector('.new-game-btn')

  let score = 0
  let attempts = 1
  const maxAttempts = 7

  const checkLetter = (option, letterChar) => {
    return ({ target }) => {
      const word = option.word.toUpperCase()
      const existsChar = word.includes(letterChar)
      const optionWordSplited = word.split('')

      target.setAttribute('disabled', true)

      if (existsChar) {
        const charsEl = document.querySelectorAll(`[data-word='${letterChar}']`)

        console.log(charsEl)

        charsEl.forEach((el) => {
          el.innerHTML = letterChar
          score += 1
        })

        if (score === optionWordSplited.length) {
          attempts = 1
          score = 0
          initGame()

          setTimeout(() => {
            alert(`Parabéns! Você venceu! 🎉🎉 A palavra era: ${word}`)
            img.setAttribute('src', `./img/img${attempts}.png`)
          }, 200)
        }
        return
      }

      attempts += 1
      img.setAttribute('src', `./img/img${attempts}.png`)

      if (attempts === maxAttempts) {
        attempts = 1
        initGame()

        setTimeout(() => {
          alert(`Poxa! Você perdeu 😢. A palavra era: ${word}`)
          img.setAttribute('src', `./img/img${attempts}.png`)
        }, 200)
      }
    }
  }

  const showElements = () => {
    const hideElements = document.querySelectorAll('.hide')
    hideElements.forEach((el) => el.classList.remove('hide'))
  }

  const createLetters = (option) => {
    letters.innerHTML = ''
    for (let i = 97; i < 123; i++) {
      const letterChar = String.fromCharCode(i).toUpperCase()

      const letterNodeEl = document.createElement('button')
      letterNodeEl.classList.add('letter')
      letterNodeEl.innerText = letterChar
      letterNodeEl.addEventListener('click', checkLetter(option, letterChar))

      letters.appendChild(letterNodeEl)
    }
  }

  const addRandomWord = (option) => {
    const wordSplited = option.word.split('')

    const wordEl = wordSplited.reduce(
      (acc, curr) =>
        acc + `<div data-word="${curr.toUpperCase()}" class="word"></div>`,
      ''
    )

    words.innerHTML = wordEl
    clue.innerHTML = `<span>💡 Dica: ${option.clue}</span>`
  }

  const initGame = () => {
    const option = getWord()
    showElements()
    createLetters(option)
    addRandomWord(option)
  }

  newGameBtn.addEventListener('click', initGame)
}

main()