(function() {    var questions = [{
question: "Consider the following code segment. <br><br>for (int k = 0; k < 20; k = k + 2)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;if (k % 3 == 1)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(k + '' '');<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><br>What is printed as a result of executing the code segment?",
choices: ["4&nbsp;&nbsp;&nbsp;&nbsp;16", "4&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;16<br>", "0&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;18", "1&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;&nbsp;19", "0&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp;&nbsp;"],
correctAnswer: 1
}, {
question: "Consider the following code segment.<br><br>List<String> animals = new ArrayList<String>();<br>animals.add(''dog'');<br>animals.add(''cat'');<br>animals.add(''snake'');<br>animals.set(2, ''lizard'');<br>animals.add(1, ''fish'');<br>animals.remove(3);<br>System.out.println(animals);<br><br>What is printed as a result of executing the code segment?",
choices: ["[dog, fish, cat]", "[dog, fish, lizard]", "[dog, lizard, fish]", "[fish, dog, cat]", "The code throws an ArrayIndexOutOfBoundsException exception."],
correctAnswer: 0
}, {
question: "Consider the following method.<br>public static void mystery(List<Integer> nums) <br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 0; k < nums.size(); k++)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (nums.get(k).intValue() == 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums.remove(k);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br>Assume that a List<Integer> values initially contains the following Integer values.<br><br>[0, 0, 4, 2, 5, 0, 3, 0] <br><br>What will values contain as a result of executing mystery(values)?",
choices: ["[0, 0, 4, 2, 5, 0, 3, 0]", "[4, 2, 5, 3]", "[0, 0, 0, 0, 4, 2, 5, 3]", "[0, 4, 2, 5, 3]", "The code throws an ArrayIndexOutOfBoundsException exception."],
correctAnswer: 3
}, {
question: "At a certain high school, students receive letter grades based on the following scale.<br><br>Integer Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Letter Grade<br>93 or above&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A<br>From 84 to 92 inclusive&nbsp;&nbsp;&nbsp;&nbsp;B<br>From 75 to 83 inclusive&nbsp;&nbsp;&nbsp;&nbsp;C<br>Below 75&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F<br><br>Which of the following code segments will assign the correct string to grade for a given integer score?<br><br>I. <br>if (score >= 93) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''A''; <br>if (score >= 84 && score <= 92) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''B''; <br>if (score >= 75 && score <= 83) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''C''; <br>if (score < 75) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''F'';<br><br>II.<br>if (score >= 93) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''A''; <br>if (84 <= score <= 92) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''B''; <br>if (75 <= score <= 83) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''C''; <br>if (score < 75) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''F'';<br><br>III.<br>if (score >= 93)<br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''A''; <br>else if (score >=&nbsp;&nbsp;&nbsp;&nbsp;84) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''B''; <br>else if (score >= 75) <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''C''; <br>else <br>&nbsp;&nbsp;&nbsp;&nbsp;grade = ''F'';",
choices: ["II only", "III only", "I and II only", "I and III only", "I, II, and III"],
correctAnswer: 3
}, {
question: "Consider the following output.<br>1 1 1 1 1<br>2 2 2 2<br>3 3 3<br>4 4<br>5<br><br>Which of the following code segments will produce this output?",
choices: ["for (int j = 1; j <= 5; j++) <br>{ <br>&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 1; k <= 5; k++) <br>&nbsp;&nbsp;&nbsp;&nbsp;{ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j + '' ''); <br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>}", "for (int j = 1; j <= 5; j++) <br>{ <br>&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 1; k <= j; k++) <br>&nbsp;&nbsp;&nbsp;&nbsp;{ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j + '' ''); <br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>}", "for (int j = 1; j <= 5; j++) <br>{ <br>&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 5; k >= 1; k--) <br>&nbsp;&nbsp;&nbsp;&nbsp;{ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j + '' ''); <br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>}", "for (int j = 1; j <= 5; j++) <br>{ <br>&nbsp;&nbsp;&nbsp;&nbsp;for (int k = 5; k >= j; k--) <br>&nbsp;&nbsp;&nbsp;&nbsp;{ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j + '' ''); <br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>}", "for (int j = 1; j <= 5; j++) <br>{ <br>&nbsp;&nbsp;&nbsp;&nbsp;for (int k = j; k <= 5; k++) <br>&nbsp;&nbsp;&nbsp;&nbsp;{ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(k + '' ''); <br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>} "],
correctAnswer: 3
}];
    var questionCounter = 0;   var selections = [];  var quiz = $('#quiz');    displayNext();    $('#next').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {              return false;    }    choose();        if (isNaN(selections[questionCounter])) {      alert('Please make a selection!');    } else {      questionCounter++;      displayNext();    }  });    $('#prev').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {      return false;    }    choose();    questionCounter--;    displayNext();  });    $('#start').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {      return false;    }    questionCounter = 0;    selections = [];    displayNext();    $('#start').hide();  });    $('.button').on('mouseenter', function () {    $(this).addClass('active');  });  $('.button').on('mouseleave', function () {    $(this).removeClass('active');  });    function createQuestionElement(index) {    var qElement = $('<div>', {      id: 'question'    });        var header = $('<h2>Question ' + (index + 1) + ':</h2>');    qElement.append(header);        var question = $('<p>').append(questions[index].question);    qElement.append(question);        var radioButtons = createRadios(index);    qElement.append(radioButtons);        return qElement;  }    function createRadios(index) {    var radioList = $('<ul>');    var item;    var input = '';    for (var i = 0; i < questions[index].choices.length; i++) {      item = $('<li>');      input = '<input type="radio" name="answer" value=' + i + ' />';	  input += convertToLetter(i) + ':<br>';      input += questions[index].choices[i];      input += '<hr size=2>';      item.append(input);      radioList.append(item);    }    return radioList;  }  function choose() {    selections[questionCounter] = +$('input[name="answer"]:checked').val();  }    function displayNext() {    quiz.fadeOut(function() {      $('#question').remove();            if(questionCounter < questions.length){        var nextQuestion = createQuestionElement(questionCounter);        quiz.append(nextQuestion).fadeIn();        if (!(isNaN(selections[questionCounter]))) {          $('input[value='+selections[questionCounter]+']').prop('checked', true);        }                if(questionCounter === 1){          $('#prev').show();        } else if(questionCounter === 0){                    $('#prev').hide();          $('#next').show();        }      }else {        var scoreElem = displayScore();        quiz.append(scoreElem).fadeIn();        $('#next').hide();        $('#prev').hide();        $('#start').show();      }    });  }  function displayScore() {    var score = $('<p>',{id: 'question'});    var numCorrect = 0;    for (var i = 0; i < selections.length; i++) {      if (selections[i] === questions[i].correctAnswer) {        numCorrect++;      }    }	score.append('<br>You got ' + numCorrect + ' questions out of ' + questions.length + ' correct.<hr size=2>');    	for(var i = 0; i < questions.length; i++){				score.append('<br> Question: ' + (i + 1) + '<br>');		score.append('<br>' + questions[i].question + '<br>');				for(var j = 0; j < questions[i].choices.length; j++){			score.append(convertToLetter(j) + ":<br>" + questions[i].choices[j] + '<br>');		}				score.append('<br> Your Answer: ' + convertToLetter(selections[i]) + '<br>');		score.append('<br> Correct Answer: ' + convertToLetter(questions[i].correctAnswer) + "<hr size=2>");	}    return score;  }})();function convertToLetter(i){		var letter;		switch(i){			case 0: letter = 'A';					break; 			case 1: letter = 'B';					break;			case 2: letter = 'C';					break;			case 3: letter = 'D';					break;			case 4: letter = 'E';					break;		}		return letter;	}
