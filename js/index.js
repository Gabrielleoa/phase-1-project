const baseURL= 'https://my-json-server.typicode.com/gabrielleoa/phase-1-project/results'
getTriviaInformation()
function getTriviaInformation(){
    fetch(baseURL)
    .then((response) => response.json())
    .then(data => {
        displayTriviaQuestions(data),
    console.log(data)
    })
}
function displayTriviaQuestions(results){
    const triviaQuestions= document.getElementById("triviaQuestions");
    const nextQuestion= document.getElementById("nextButton")
    for(const result of results) {
        console.log(result)
        let questions = document.getElementById("listOfQuestions")
        let li = document.createElement('li')
        li.textContent= result.question
        li.addEventListener('click', () => questions(result));
        questions.appendChild(li)
        /*let answers = document.getElementById('triviaAnswers')
        let lis= document.createElement('lis')
        li.textContent= result.multiple_choice_answers
        li.addEventListener('click', () => getAnswer(result));
        answers.appendChild(li)
        if(result.multiple_choice_answers === result.correct_answer){
            return true
        }else {
            return false 


    
    }*/

}
}
function displayMultipleChoiceAnswers(result){
    const answers = document.getElementById('triviaAnswers')
        let ul= document.createElement('ul')
        ul.textContent= result.multiple_choice_answers
        ul.addEventListener('click', () => answers(result));
        answers.appendChild(li)
       /* if(results.multiple_choice_answers === results.correct_answer){
            return true
        }else {
            return false */

    
}
//}
