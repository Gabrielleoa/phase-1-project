const apiURL = "https://opentdb.com/api.php?amount=20&category=11&difficulty=easy&type=multiple"

getTriviaInformation()
function getTriviaInformation(){
    fetch(apiURL)
    .then((response) => response.json())
    .then(data => {
        displayTriviaQuestions(data),
        console.log(data);
    })
}
function displayTriviaQuestions(){

}