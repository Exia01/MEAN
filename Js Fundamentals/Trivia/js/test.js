function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
$(document).ready(function() {
  $("#content").on("click", "input", function() {
    if ($(this).attr("class") == "correct") {
      $(this)
        .parent()
        .parent()
        .css("background-color", "green");
    } else {
      $(this)
        .parent()
        .parent()
        .css("background-color", "red");
    }
  });
  var get = $.get(
    "https://opentdb.com/api.php?amount=8&difficulty=easy&type=multiple",
    function(data) {
      console.log(data);
      var questions = "",
      for (let i = 0; i < data.results; i++) {}
      for (let i = 0; i < data.results.length; i++) {
        questions += '<div class="sub">';
        questions += '<div class="category">';
        questions += "<p>" + data.results[i].category + "</p>";
        questions += "</div>";
        questions += '<div class="question">';
        questions += "<p>" + data.results[i].question + "</p>";
        questions += "<form>";
        questionsArr = data.results[i].incorrect_answers;
        questionsArr[3] = data.results[i].correct_answer;
        questionsArr = shuffle(questionsArr);
        for (let j = 0; j < questionsArr.length; j++) {
          if (data.results[i].correct_answer == questionsArr[j]) {
            questions +=
              '<input type="radio" class="correct">' + questionsArr[j] + "<br>";
          } else {
            questions += '<input type="radio">' + questionsArr[j] + "<br>";
          }
        }
        questions += "</form></div>";
        questions += "</div>";
      }
      $("#content").html(questions);
    }
  );
});
