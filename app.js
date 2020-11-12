const readline = require("readline");
const gretaString = "My message is that we'll be watching you. This is all wrong. I shouldn't be up here. I should be back in school on the other side of the ocean. Yet you all come to us young people for hope. How dare you! You have stolen my dreams and my childhood with your empty words. And yet I'm one of the lucky ones. People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you! For more than 30 years, the science has been crystal clear. How dare you continue to look away and come here saying that you're doing enough, when the politics and solutions needed are still nowhere in sight. You say you hear us and that you understand the urgency. But no matter how sad and angry I am, I do not want to believe that. Because if you really understood the situation and still kept on failing to act, then you would be evil. And that I refuse to believe. The popular idea of cutting our emissions in half in 10 years only gives us a 50% chance of staying below 1.5 degrees [Celsius], and the risk of setting off irreversible chain reactions beyond human control. Fifty percent may be acceptable to you. But those numbers do not include tipping points, most feedback loops, additional warming hidden by toxic air pollution or the aspects of equity and climate justice. They also rely on my generation sucking hundreds of billions of tons of your CO2 out of the air with technologies that barely exist. So a 50% risk is simply not acceptable to us — we who have to live with the consequences. To have a 67% chance of staying below a 1.5 degrees global temperature rise – the best odds given by the [Intergovernmental Panel on Climate Change] – the world had 420 gigatons of CO2 left to emit back on Jan. 1st, 2018. Today that figure is already down to less than 350 gigatons. How dare you pretend that this can be solved with just 'business as usual' and some technical solutions? With today's emissions levels, that remaining CO2 budget will be entirely gone within less than 8 1/2 years. There will not be any solutions or plans presented in line with these figures here today, because these numbers are too uncomfortable. And you are still not mature enough to tell it like it is. You are failing us. But the young people are starting to understand your betrayal. The eyes of all future generations are upon you. And if you choose to fail us, I say: We will never forgive you. We will not let you get away with this. Right here, right now is where we draw the line. The world is waking up. And change is coming, whether you like it or not. Thank you."
let word, remainingBlankLetters, guessCount, answerArray = [];

const randomWordFromStr = (string) => {
    const punc = /[0123456789!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let words = string.toLowerCase().replace(punc, '').split(' ');
    return words[Math.floor(Math.random() * words.length)]
}

const createWord = () => {
    word = randomWordFromStr(gretaString).split('')
    answerArray = word.map(index => index = "_")
    guessCount = 0;
    remainingBlankLetters = word.length
    return word
}

const buildPage = () => {
    createWord()
    console.log(word)
    document.getElementById('wordDiv').innerHTML = 'hello'
}

buildPage()

// const startGame = () => {
//     console.log('Initializing new game...')
//     createWord()
//     setTimeout(function(){
//     console.log('New game!')
//             //USE THIS TO CHEAT:
//             console.log('answer: ', word.join(''))
//     console.log(answerArray.join(' '))
//     getPrompt()
//     }, 2000)
// }

const checkGuess = (guess) => {
    if(!checkForEnd()){
        if(guess.length !==1){
            console.log('Please return a single letter...')
        } else{
            let currentRemainingLetters = remainingBlankLetters
            for(let i = 0; i < word.length; i ++) {
                if(word[i] === guess) {
                    answerArray[i] = guess
                    remainingBlankLetters --
                }
            }
            if(currentRemainingLetters === remainingBlankLetters) {
                guessCount++
            }
        }
    } 
}

const checkForEnd = () => {
    if(remainingBlankLetters === 0){
        console.clear()
        console.log(`You win! The answer was "${word.join('')}"`)
        startGame()
        return true
    } else if (guessCount === 7) {
        console.clear()
        console.log(`You lose! The answer was "${word.join('')}"`)
        startGame()
        return true
    }
}

const snowMan = (guess) => {
    checkGuess(guess)
    console.log('remaining guesses: ', (7 - guessCount))
    console.log(answerArray.join(' '))
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getPrompt = () =>  {  
    rl.question('guess: ', (guess) => {   
        snowMan(guess);
        if(!checkForEnd()){
            getPrompt();  
        }
     });
}

startGame()


// ---------------------------------------------------
// let word, remainingBlankLetters, guessCount;
// let answerArray = []

// const gretaString = "My message is that we'll be watching you. This is all wrong. I shouldn't be up here. I should be back in school on the other side of the ocean. Yet you all come to us young people for hope. How dare you! You have stolen my dreams and my childhood with your empty words. And yet I'm one of the lucky ones. People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you! For more than 30 years, the science has been crystal clear. How dare you continue to look away and come here saying that you're doing enough, when the politics and solutions needed are still nowhere in sight. You say you hear us and that you understand the urgency. But no matter how sad and angry I am, I do not want to believe that. Because if you really understood the situation and still kept on failing to act, then you would be evil. And that I refuse to believe. The popular idea of cutting our emissions in half in 10 years only gives us a 50% chance of staying below 1.5 degrees [Celsius], and the risk of setting off irreversible chain reactions beyond human control. Fifty percent may be acceptable to you. But those numbers do not include tipping points, most feedback loops, additional warming hidden by toxic air pollution or the aspects of equity and climate justice. They also rely on my generation sucking hundreds of billions of tons of your CO2 out of the air with technologies that barely exist. So a 50% risk is simply not acceptable to us — we who have to live with the consequences. To have a 67% chance of staying below a 1.5 degrees global temperature rise – the best odds given by the [Intergovernmental Panel on Climate Change] – the world had 420 gigatons of CO2 left to emit back on Jan. 1st, 2018. Today that figure is already down to less than 350 gigatons. How dare you pretend that this can be solved with just 'business as usual' and some technical solutions? With today's emissions levels, that remaining CO2 budget will be entirely gone within less than 8 1/2 years. There will not be any solutions or plans presented in line with these figures here today, because these numbers are too uncomfortable. And you are still not mature enough to tell it like it is. You are failing us. But the young people are starting to understand your betrayal. The eyes of all future generations are upon you. And if you choose to fail us, I say: We will never forgive you. We will not let you get away with this. Right here, right now is where we draw the line. The world is waking up. And change is coming, whether you like it or not. Thank you."

//remove puncuation & make lowercase
//split string into array 
//pull random word from array
//split word into array of letters


// const randomWordFromStr = (string) => {
//     const punc = /[0123456789!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//     let words = string.toLowerCase().replace(punc, '').split(' ');
//     return words[Math.floor(Math.random() * words.length)]
// }

// const createWord = () => {
//     word = randomWordFromStr(gretaString).split('')
//     answerArray = word.map(index => index = "_")
//     guessCount = 0;
//     remainingBlankLetters = word.length
//     return word
// }



console.log(word)
console.log('remaining blank letters: ', remainingBlankLetters)


const checkGuess = (guess) => {
    guess = document.getElementById('user-guess').value
    let currentRemainingLetters = remainingBlankLetters
    for(let i = 0; i < word.length; i ++) {
        if(word[i] === guess) {
            answerArray[i] = guess
            remainingBlankLetters --
            console.log(answerArray)
            console.log(remainingBlankLetters)
        }
    }
    if(currentRemainingLetters === remainingBlankLetters) {
        guessCount++
    }
    // return guessCount
}

// console.log('guesses: ', guessCount)

const checkForWin = () => {
    if(remainingBlankLetters === 0){
        console.log('You win')
        return 'You win'
    } else if (guessCount === 7) {
        console.log('You lose')
        return 'You lose'
    }
    //if remaining letters = 0 win
    // else if guess count = 7 then loss
}

const snowMan = () => {
    // guess = document.getElementById('user-guess').value
    // console.log(guess)
    // createWord()
    checkGuess()
    checkForWin()
    console.log('guesses: ', guessCount)

}




// wordArr.forEach(let => answerArray[let] = '_')







// while((remainingBlankLetters > 0) && (guessCount <= 7)){
    
//     alert(`Word: ${answerArray.join(' ')}`)
    
//     let guess = prompt('Guess a letter')

//     if(guess.length !== 1) {
//         alert('Please enter a single letter...')
//     } else if (guessCount.length !== 7)  {
//         for (let j=0; j<word.length; j++){
//             if (word[j] === guess){
//                 answerArray[j] = guess
//                 remainingBlankLetters--
//             } 
            
//         }
//     } else {
//         guessCount++
//     }
//     console.log(guessCount)
// }






        // }
   

        // {
        //     alert('You dead')
        //     remainingBlankLetters = 0
        // } else if



    // alert('Nice work, you win!')
