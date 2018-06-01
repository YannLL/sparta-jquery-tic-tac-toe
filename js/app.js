$(document).ready(function(){

  //===== RESOURCES =====
  var activePlayer = true;
  var playerX = "X";
  var playerO = "O";
  var boxesX = [];
  var boxesO = [];
  var horWin = [[0,1,2],[3,4,5],[6,7,8]];
  var vertWin = [[0,3,6],[1,4,7],[2,5,8]];
  var diagWin = [[0,4,8],[2,4,6]];

  //=====================

  // ===== FUNCTIONS =====

  $("td").click(function(event){

    // ===== TURN MECHANICS =====
    switch (activePlayer) {
      //PLAYER O's TURN
      case (false):
        $(".playerTurn").html("It is X's turn"); //indicates next player
        $(this).text("O");
        $(this).addClass("O");
        boxesO.push($(this).data().num);
        winCheck(boxesO);
        activePlayer = true;
        break;

      //PLAYER X's TURN
      case (true):
        $(".playerTurn").html("It is O's turn") //indicates next player
        $(this).text("X");
        $(this).addClass("X");
        boxesX.push($(this).data().num);
        winCheck(boxesX);
        activePlayer = false;
        break;

    }; // END TURN MECHANICS ===========

    // WIN MECHANICS ========
    function winCheck(arr1){
      console.log(diagWin);
      //Cycles through winning arrays first index
      for (var i = 0; i <= 2; i++) {
        var indexA = i;
        var horCorrect = [];
        var vertCorrect = [];
        var diagCorrect = [];
        // cycle through winning arrays second index
        for (var j = 0; j <= 2; j++){
          var indexB = j;
          // check vert / horizontal winning values against player's blocks
          for (var k = 0; k <= arr1.length; k++){
            if(horWin[indexA][indexB] == arr1[k]){
              horCorrect.push("x");
            };
            if(vertWin[indexA][indexB] == arr1[k]){
              vertCorrect.push("x");

            //=== DIAGONAL WIN MECHANICS
            };if(i<2 && diagWin[indexA][indexB] == arr1[k]){
              diagCorrect.push("x");
            };
          };
        };
        if (horCorrect.length == 3){
          alert("WOOHOO");
        }if (vertCorrect.length == 3){
          alert("WOOHOO");
        };if (diagCorrect.length == 3){
          alert("WOOHOO");
        };
      };

    }; // END WIN MECHANICS =============

  }); // END FUNCTIONS ==============
});
