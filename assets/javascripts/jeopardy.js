(function(){

  let CurrentQuestion = "";
  let CurrentAnswer = "";
  // let pointValue = "";

  $(function(){
    loadData()

    function loadData(){
    $.get("http://jservice.io/api/random/", function(data){
      $("#question").html(data[0].question)
        CurrentQuestion = data[0].question
          console.log(CurrentQuestion)
      $("#category").html(data[0].category.title)
      $("#pointValue").html(data[0].value)
      $("#answer").html(data[0].answer)
        CurrentAnswer = data[0].answer
          console.log(CurrentAnswer)
          $("#inputAnswer").val("")
      })
    }

  let guessButton = document.querySelector("#guessButton");
  let score = document.querySelector("#score");
  let userAnswer = document.querySelector("#userAnswer");

  guessButton.addEventListener("click", function(){
    console.log("button clicked");


  let userAnswer = $("#inputAnswer").val()
    console.log(userAnswer);
    console.log(CurrentAnswer);
    if (userAnswer.toLowerCase() === CurrentAnswer.toLowerCase()){
      alert ("You are correct!");
      // console.log(score.innerHTML)
      console.log(pointValue)
        score.innerHTML = parseInt(pointValue.innerHTML) + parseInt(score.innerHTML)
      } else {
      alert ("Try again!")

      };
      loadData()
    });


  })


})()
