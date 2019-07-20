const getHtmlForQuestionSection = (questionObject) =>{
    let htmlForAnswers = questionObject.answerOptions.map((answer,index)=>`
    <div class="radioQuestion">
        <input id="answer-${index}" type="radio" value="${answer}" name="answer" required>
        <label for="answer-${index}">${answer}</label> 
    </div>
    `)
    return `
        <section role="region" class="question">
            <h2>
                ${questionObject.question}
            </h2>
            <form id="quizForm">
                ${htmlForAnswers.join("")}
                    <!-- <button id="back-button" class="button" type="button">Back</button> -->
                    <button id="submit-button" class="button"type="submit">Submit Answer</button>    
            </form>
        </section>
    `
}
   



// }
function getCurrentQuestionNumber(){
    // debugger
    let currentQestionIndex = getCurrentQuestionIndex()
    return currentQestionIndex +1;
};
function getCurrentQuestionIndex(){
    return CurrentQuesion
    //  return store.findIndex(function(question) {
        // return !question.selectedAnswer;
    // });
}

        
// };
//this update the .score span 
function scoreKeeper (scoreincrament){
// read value form current score span
// add value of the current score to score incrament
// update the .score span with new score

};



// display positive user feedback 
function displayPositiveFeedback(){
    let currentQestionIndex = getCurrentQuestionIndex();
    let correctAnswer = `${store[currentQestionIndex].correctAnswer}`
   return  `<section role="region" class="correct">
            <h2>You got it!</h2>
            <img src="https://bit.ly/2XfWWSU">
            <button id="next-button" class="button" type="submit">Next Question</button>
        </section>`

};

// display negitive user feedback 
function displayNegitiveFeedback (){
    let currentQestionIndex = getCurrentQuestionIndex();
    let correctAnswer = `${store[currentQestionIndex].correctAnswer}`
   return  `<section role="region" class="incorrect">
   <h2>You didn't get it</h2>
   <img src="https://bit.ly/30YjwS4" alt="person looking away in shame">
   <p>The correct answer was</p>
   <p class="correct-answer">${correctAnswer}</p>
   <button id="next-button" class"button" type="submit">Next Question</button>
</section>`
};


// display final quiz results 

//  What happens when the user is done with the quiz
        


$(function documentReady(){
    $("#start-button").on('click',function(){
        let htmlForQuestion = getHtmlForQuestionSection(store[0])
        $("main").html(htmlForQuestion);
        //get current question number[array index of quesitonObject +1]
        let currentQuestionNumber = getCurrentQuestionNumber();
        $('.current-question-number').text(currentQuestionNumber);
    
    });
        
    $('main').on('submit','#quizForm',function(event){
       
        event.preventDefault();
        let selectedAnswer = $('input:checked');
        let answer = selectedAnswer.val();
        let currentQestionIndex = getCurrentQuestionIndex();
        let correctAnswer = `${store[currentQestionIndex].correctAnswer}`;
        console.log(correctAnswer,answer)
        if (answer === correctAnswer) {
            Score++;
            $('main').html(displayPositiveFeedback());
        } else { 
             $('main').html(displayNegitiveFeedback());
        }

         $('.score').text(Score);
         CurrentQuesion++;

        // $('.current-question-number').text(getCurrentQuestionNumber());
   }); 
   $("main").on('click','#next-button',function(){
    let htmlForQuestion = getHtmlForQuestionSection(store[CurrentQuesion])
    $("main").html(htmlForQuestion);
    //get current question number[array index of quesitonObject +1]
    let currentQuestionNumber = getCurrentQuestionNumber();
    $('.current-question-number').text(currentQuestionNumber);

   });
});
