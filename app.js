"use strict"

(function(){
  angular
  .module("CAH", []) //match data-ng-app
  .controller('CAHctrl', [ //match data-ng-controller
    "$scope",
    CAHctrlFunction
  ])

  function CAHctrlFunction(){
    var vm = this;
    vm.TALKTOME = "PAY ATTENTION TO MEEEEEEEEEE?!?!"
    console.log("hello world, meet controller");
  }

}());
