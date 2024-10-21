
const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 1;
let showingTerm = true;
let theFlashcard = document.getElementById("flashcard"); 
let previousButton = document.getElementById("prev-btn");
let nextButton = document.getElementById("next-btn");

let termInput = document.getElementById("new-term"); 
let definitionInput = document.getElementById("new-definition"); 
let addButton = document.getElementById("add-card-btn"); 

// Start with this function to simply display the card
function displayCard() {

    //basically want to display text of the current index
    let textOnCard = ""; 

    if(showingTerm)
        textOnCard = flashcards[currentIndex].term; 
    else
        textOnCard = flashcards[currentIndex].definition; 

    theFlashcard.innerText = textOnCard; 
    
}

// The rest of the code you will write is apart of event listeners

theFlashcard.addEventListener("click", function(){
    showingTerm = !showingTerm; 
    displayCard(); 
}); 

previousButton.addEventListener("click", function(){
    
    if(currentIndex > 0)
        currentIndex--; 
    else
        currentIndex = flashcards.length-1; 
    displayCard(); 

}); 

nextButton.addEventListener("click", function(){

    if(currentIndex < flashcards.length-1)
        currentIndex++; 
    else
        currentIndex = 0; 
    
    displayCard(); 

}); 

addButton.addEventListener("click", function(){
    let termText = termInput.value; 
    let defText = definitionInput.value; 

    if(termText !== "" && defText != "")
        flashcards.push({term: termText, definition: defText}); 

    currentIndex = flashcards.length-1; 
    displayCard(); 

}); 


// This line will display the card when the page is refreshed
window.onload = displayCard;
