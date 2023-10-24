
const apiURL = 'http://localhost:3000/results'
function getTriviaInformation(){
    fetch(apiURL)
    .then((response) => response.json())
    .then(data => {
        displayTriviaQuestions(data),
        console.log(data)
    })
}
function displayTriviaQuestions(){

}
