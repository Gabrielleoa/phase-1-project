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
    const triviaAnswers=document.getElementById("triviaAnswers");
    const nextQuestion= document.getElementById("nextButton")
    for(const result of results) {
        console.log(result)
        let questions = document.getElementById("listOfQuestions")
        let li = document.createElement('li')
        li.textContent= result.question
        li.addEventListener('click', () => getQuestion(result));
        questions.appendChild(li)
    }

}
function displayMultipleChoiceAnswers(results){
    const triviaAnswers= document.getElementById("triviaAnswers");
    for(const result of results) {
        console.log(result)
        let answers = document.getElementById("listOfAnswers")
        let li = document.createElement('li')
        li.textContent= result.correct_answer
        li.addEventListener('click', () => getAnswers(result));
        answers.appendChild(li)
    }   
}
