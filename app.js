"use strict";

(function(){
  angular
  .module("CAH", []) //match data-ng-app
  .controller('CAHctrl', [ //match data-ng-controller
    "$scope",
    CAHctrlFunction
  ])

  function CAHctrlFunction($scope){
    var vm = this;
    vm.TALKTOME = "PAY ATTENTION TO MEEEEEEEEEE?!?!"
    console.log("hello world, meet controller");

    //data lives here
    var cardData = [
      {question: "question1", answer: "answer1"}, {question: "question2", answer: "answer2"}, {question: "question3", answer: "answer3"}
    ]
    //randomly fetch a data object, separate into Q variable and A variable
    var currentCard = cardData[Math.floor(Math.random()*cardData.length)]
    vm.currentQuestion = currentCard["question"];
    vm.currentAnswer = currentCard["answer"];
    vm.guesses = [];
    vm.newGuess = '';
    vm.sendGuess = function(){
      // console.log($scope.vm.newGuess);
      vm.guesses.push($scope.vm.newGuess);
    }
  }

}());
