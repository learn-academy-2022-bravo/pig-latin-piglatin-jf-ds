import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component {
  constructor(props) {
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)
      // PigLatin Rules:
      // 3: Words that begin with a vowel
      //Add "way" to the end
      // 6: Words that start with "qu" move "qu" to the end and add "ay"
      
      // Things to do: 
      // 1: Words that begin with a constanent
            //Move the first letter to the end and suffix "ay"
      // 2: Words that start with a constanent cluster
            //Move the constanent cluster for ex: "pl" add suffix "ay"
            // 4: Compound words
              //Seperate the compound words into individual words. Apply apprioate rule for each word
            // 5: Special case words
              // Words that start with "y" use the rule that begin with the constanent "you" = "ouyay".
              // Words that has "y" as a second letter treat it as the first letter as a constanent
            //Example: 
              //1/5: "Can you help me?" = "Ancay ouyay elphay emay" 
              // 3: "Am I winning?" = "Amyay Iyay inningway?"
              // 2/4: "Playing baseball is fun." = "Ayingplay asebayallbay isyay unfay."


      
      // Psuedo Code:
      // Find the first vowel in a string and set it to a variable firstVowel
      // If that current words first index is === vowel return the currentWord with a "ay" to the end 
      
      // Create a variable called qFinder to hold "q" 
      // Create variable locationOfFirstVowel to equal currentWord.indexOf(firstVowel)
      // If the first letter is a "q" and the first vowel is a "u"
      //       // currentWords.substring(0)
      // Rebuild the string 
// Yellow
// Color

      // 
      
      // 
        // your code here!
      let firstVowel = vowelsArray[0]

      let locationOfFirstVowel = currentWord.indexOf(firstVowel)
      let qFinder = currentWord[locationOfFirstVowel - 1]

      if(currentWord[0] === firstVowel) {
        return `${currentWord}way`
      } else if(qFinder === "q" && firstVowel === "u") {
        let firstHalf = currentWord.substring(0, locationOfFirstVowel + 1)
        let lastHalf = currentWord.substring(locationOfFirstVowel + 1)
        console.log(lastHalf)
        return `${lastHalf}${firstHalf}ay`
      } else if(locationOfFirstVowel === -1) {
        let y = currentWord.indexOf("y")
        let firstHalf = currentWord.substring(0, y)
        let lastHalf = currentWord.substring(y)
        return `${lastHalf}${firstHalf}ay`
      }


      // console.log(firstVowel)
      // Remember: console.log is your friend :)
      

      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by ~your name here~</footer>
      </>
    )
  }
}

export default App
