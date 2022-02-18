//Magic8ball final project 
//*Create input field for users to ask a question
const answer = document.getElementById("answer");
const questionB = document.getElementById("questionB");
//Create a label for your input field telling your user to “Ask me anything!”
questionB.addEventListener("click", function(){
            const ask = prompt("You can ask me anything");
            //Create an “ask” button (this will run the function that you will insert the images into using javascript)
            let magicball = getRandomIntInclusive(1, 20);
            console.log(magicball);
            answer.src= `../img/magic8ball_${magicball}.png`;
            });

function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

/*Create a div with an id of “answers” that you will insert the images into using js

Creat an “ask” function that when clicked, will choose as random 8ball image and insert it into your “answers” div
Replace the input field with the user’s question when displaying the answer

Style your page any way you like
Activate Github Pages for your project */
