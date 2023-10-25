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
        li.addEventListener('click', () => displayMultipleChoiceAnswers(result));
        questions.appendChild(li)

}
}
function displayMultipleChoiceAnswers(result){
    const answers = document.getElementById('triviaAnswers')
    answers.innerHTML=`<ol>${result.multiple_choice_answers}<ol>`
    answers.addEventListener('click', () => displayCorrectAnswer(result));
    

    
}
function displayCorrectAnswer(answers){
    if (answers.answers= answers.correct_answer){
        alert("correct")
}else{
    console.log("false")
}
}


