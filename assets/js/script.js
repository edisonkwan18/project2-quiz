//Array of quiz questions
let quizData = [
    //each element in the array has the question in postion[0]. The possible answers to the question is stored in a nested array in postion[1] with the correct answer located in position[0] of the nested array.
    [
      "What does URL stand for?",
      ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Locator", "Unique Resource Locator"]
    ],
    [
      "Which tag is used to create an unordered list in HTML?",
      ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;dl&gt;"]
    ],
    [
      "What does CSS stand for?",
      ["Cascading Style Sheet", "Counter Style Sheet", "Computer Style Sheet", "Creative Style Sheet"]
    ],
    [
      "In CSS, what property is used to set the background color of an element?",
      ["background-color", "color", "text-color", "bgcolor"]
    ],
    [
      "Which symbol is commonly used as a selector in CSS to target classes?",
      ["&period;", "&dollar;", "&num;", "&commat;"]
    ],
    [
      "What does the acronym DOM stand for in JavaScript?",
      ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Oriented Model"]
    ],
    [
      "Which HTML tag is used to embed JavaScript code in an HTML document?",
      ["&lt;script&gt;", "&lt;javascript&gt;", "&lt;code&gt;", "&lt;js&gt;"]
    ],
    [
      "What is the purpose of the CSS property 'flex'?",
      ["To create a flexible box layout", "To make an element vertically centered", "To increase the font size of an element", "To change the text color of an element"]
    ],
    [
      "Which event is triggered when a user clicks on an HTML element?",
      ["onclick", "onhover", "onpress", "onsubmit"]
    ],
    [
      "What is the default positioning property in CSS?",
      ["static", "relative", "absolute", "fixed"]
    ],
    [
      "How do you comment out multiple lines in JavaScript?",
      ["/* This is a comment */", "// This is a comment //", "&lt;!-- This is a comment --&gt;", "# This is a comment #"]
    ],
    [
      "Which HTML tag is used to create a hyperlink?",
      ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;hyperlink&gt;"]
    ],
    [
      "What does the '++' operator do in JavaScript?",
      ["Adds 1 to a variable", "Decrements a variable by 1", "Multiplies a variable by 2", "Divides a variable by 2"]
    ],
    [
      "Which CSS property is used to change the text color of an element?",
      ["color", "text-color", "font-color", "text-style"]
    ],
    [
      "What does the acronym API stand for?",
      ["Application Programming Interface", "Advanced Program Integration", "Automated Program Interface", "Application Program Interface"]
    ],
    [
      "How do you include an external JavaScript file in an HTML document?",
      ["&lt;script src='script.js'&gt;", "&lt;js file='script.js'&gt;", "&lt;include script='script.js'&gt;", "&lt;javascript file='script.js'&gt;"]
    ],
    [
      "Which CSS property is used to control the spacing between elements' margins?",
      ["margin", "padding", "spacing", "gap"]
    ],
    [
      "What is the purpose of the HTML &lt;meta&gt; tag?",
      ["To provide metadata about the document", "To define a paragraph", "To create a navigation menu", "To include external scripts"]
    ],
    [
      "What is the purpose of the JavaScript function 'parseInt()'?",
      ["To convert a string to an integer", "To round a number to the nearest integer", "To find the square root of a number", "To generate a random number"]
    ],
    [
      "Which CSS property is used to control the font size of an element?",
      ["font-size", "text-size", "size", "text-font"]
    ]
  ];
  
  // Setup global variables
  let question, i, userChoice, choices, y, correctAnswer, username;
  let counter = 1;
  let score = 0;
  
  // Element to link with HTML ID
  let qCount = document.getElementById("q-counter");
  let response = document.getElementById("response");
  let submitButton = document.getElementById("submit-btn");
  let nextQButton = document.getElementById("next-q");
  let playAgainBtn = document.getElementById("play-again");
  let quitGameBtn = document.getElementById("quit-game");
  let quizForm = document.getElementById("quiz-form"); //Triggers 'quit game' listener
  
  // Assign innerHTML content to element
  qCount.innerHTML = counter + " of 10";
  
  //Set up of Functions
  
  /**
   * Game starts here with a 'Enter name' user prompt
   */
  function gameStart() {
    username = prompt("Please enter your name : ");
    askQuestion(); // function call for displaying randomised questions / choices
  }
  
  /**
   * Displays a randomised question with corresponding choices. 
   */
  function askQuestion() {
    question = document.getElementById("question");
    i = Math.floor(Math.random() * quizData.length);
    question.innerHTML = quizData[i][0];
    correctAnswer = quizData[i][1][0]; // Correct answer is stored here before it is randomised

    displayChoice(); // callback function for displaying choices.
  }
  
  //this function src is from https://bost.ocks.org/mike/shuffle/
  function shuffle(array) {
    var m = array.length,
      t,
      i;
  
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  
  /**
   * Displays randomised array of choices so answer is not always in first position
   */
  function displayChoice() {
    shuffle(quizData[i][1]); // shuffle function referenced above
  
    // label tag variables
    let a1 = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let a3 = document.getElementById("a3");
    let a4 = document.getElementById("a4");

    resetChoiceLabel(); // Overwrite the color of border
  
    // choices are displayed within the label tags (post shuffle)
    a1.innerHTML = quizData[i][1][0];
    a2.innerHTML = quizData[i][1][1];
    a3.innerHTML = quizData[i][1][2];
    a4.innerHTML = quizData[i][1][3];
  }
  
  function resetChoiceLabel(){
    a1.style.border = "solid 0.5rem #FFA500";
    a2.style.border = "solid 0.5rem #FFA500";
    a3.style.border = "solid 0.5rem #FFA500";
    a4.style.border = "solid 0.5rem #FFA500";
  }

  /**
   * Event listener for retrieving user selected option and checks it against the correct answer. Is triggered when the form is submitted by clicking the 'submit answer' button
   */
  function getUserInput(event) {
    event.preventDefault(); // prevents default form submission answer
  
    // radio 'input' tag variables
    let ans1 = document.getElementById("ans1");
    let ans2 = document.getElementById("ans2");
    let ans3 = document.getElementById("ans3");
    let ans4 = document.getElementById("ans4");
  
    // Add value attribute to input tags
    ans1.value = quizData[i][1][0];
    ans2.value = quizData[i][1][1];
    ans3.value = quizData[i][1][2];
    ans4.value = quizData[i][1][3];
 
    choices = document.getElementsByName("choice"); // retrives array of input tags by common 'name' attribute value 'choice'
    
    // for loop for checking each element in the array to find the user selected radio button.
    for (y = 0; y < choices.length; y++) {
      if (choices[y].checked) {
        userChoice = choices[y].value; // value of selected option is stored here
      }
    }
    checkAnswer(userChoice); // call back function to capture 'userChoice' variable as a parameter for the 'checkAnswer' function
  }
      
  /**
   * Checks selected option against the correct answer and indicates correct/incorrect response
   */
  function checkAnswer(selectedOption) {
    console.log("User answer: " + selectedOption);
  //Prevents user from selecting 'next question' and 'submit' buttons after the last question is displayed.
    if (quizData.length === 11) {
      nextQButton.style.display = "none";
      playAgainBtn.style.display = "block"; // option to play game again
      submitButton.style.display = "none";
      quitGameBtn.style.display = "none";
    }
  
  //Will run if user chooses correct option and displays a 'tick' mark against the chosen answer
    if (selectedOption === correctAnswer) {
      for (x = 0; x < choices.length; x++) {
        if (choices[x].checked) { // nested if condition for finding the 'checked' radio button
          let radioId = choices[x].id; // the selected radio button's id is used to identify the corresponding label tag (line 185 below)
          let theLabel = document.querySelector('label[for="' + radioId + '"]'); // 
          theLabel.style.border = "solid 1.5rem #39CF11";
        }
      }
      console.log("User inputted correct answer");
      keepScore(); // score is added if chosen option is correct
    }
    // Similar to above 'if' block but only runs if the selected option is incorrect
      else{
      for (x = 0; x < choices.length; x++) {
        if (choices[x].checked) {
          let radioId = choices[x].id;
          let theLabel = document.querySelector('label[for="' + radioId + '"]');
          theLabel.style.border = "solid 1.5rem #DC143C";
        }
      }
    }
  
    //Applies to both if conditions above (within the checkAnswer function) - displays the final score after the last question has been answered and checked for correct/incorrect response.
    if (quizData.length === 11) {
      response.innerHTML = `Congratulations, ${username}! <span class="em-font">Your Final Score is &emsp; ${score} </span>`
      document.getElementById("q-heading").innerHTML = "Quiz complete!"; //counter heading text changes to indicate end of game.
      response.style.color = "red";
    }
  }
  
  /**
   * Tracks user score increments by 1 when user answer is correct
   */
  function keepScore() {
    score++;
    response.innerHTML = `Current score:  <span class="em-font">&emsp; ${score}</span>`;
  }
  
  /**
   * counter for the 'number of questions left' heading on top of page
   */
  function qCounter() {
    counter++;
    qCount.textContent = counter + " of 10";
  }
  
  /**
   * Event listener function triggered by the 'next question' button.
   */
  function getNextQ() {
    removeQuestion(); // removes answered question from array
    console.log(quizData);
    quizForm.reset(); // resets form to deselect the selected radio button from the previous question
    resetChoiceLabel();
    askQuestion(); // asks the next question
    qCounter(); // increments quiz counter heading by 1
  }
  
  /**
   * Removes the answered question from the array so that the same questions does not reappear during the current game. 
   */
  function removeQuestion() {
    quizData.splice(i, 1); // the 'i' variable indicates the current position of the question to be removed, in the array
  }
  
  /**
   *Stops 'submit' button from displaying and presents user with 'next question' button instead - prevents user from accidentally submitting the answer more than once.
   */
  function removeSubmitBtn() {
    if (quizData.length === 11) {
      
    } else {
      submitButton.style.display = "none";
      nextQButton.style.display = "block";
    }
  }
  
  /**
   * Prevents user jumping head to next question before submission. Hides 'next q' button and makes 'submit' button reappear.
   */
  function removeNextQBtn() {
    nextQButton.style.display = "none";
    submitButton.style.display = "block";
   }
  
  // option for playing game again after quiz is completed by the user
  function playAgain() {
    location.reload(true);
  }
  
  /**
   * option for quitting the game (depicted as a FontAwesome 'refresh' icon)
   */
  function quitGame() {
    location.reload(true); // page hard refresh
  }
  
  //List of event listener triggers
  nextQButton.addEventListener("click", getNextQ); //Triggers 'next question' listener
  
  nextQButton.addEventListener("click", removeNextQBtn); //Triggers 'remove next q button' listener after user clicks on 'next question' button
  
  quizForm.addEventListener("submit", getUserInput); // Triggers the 'user input' listener when user clicks on 'submit answer' button
  
  quizForm.addEventListener("submit", removeSubmitBtn); //Triggers 'remove submit button' listener after user clicks on the 'submit answer' button
  
  playAgainBtn.addEventListener("click", playAgain);//Triggers 'play again' listener
  
  quitGameBtn.addEventListener("click", quitGame);//Triggers 'quit game' listener
  
  //The start of the game
  gameStart();