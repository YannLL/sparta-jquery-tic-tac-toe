$(document).ready(function(){

  //===== RESOURCES =====
  var activePlayer = true;
  var playerX = "X";
  var playerO = "O";
  var boxesX = [];
  var tickedX = [];
  var tickedO = [];
  var boxesO = [];
  var horWin = [[0,1,2],[3,4,5],[6,7,8]];
  var vertWin = [[1,4,7],[2,5,8],[3,6,9]];
  var diagWin = [[1,5,9],[3,5,7]];

  //=====================

  // ===== FUNCTIONS =====

  $("td").click(function(event){

    // ===== TURN MECHANICS =====
    switch (activePlayer) {
      //PLAYER O's TURN
      case (false):
        $(".playerTurn").html("It is X's turn"); //indicates next player
        $(this).text("O");
        boxesO.push($(this).data().num);
        winCheck(boxesO);
        activePlayer = true;
        break;

      //PLAYER X's TURN
      case (true):
        $(".playerTurn").html("It is O's turn") //indicates next player
        $(this).text("X");
        boxesX.push($(this).data().num);
        activePlayer = false;
        break;

    }; // END TURN MECHANICS ===========

  // ===== WIN MECHANICS =====

    // HORIZONTAL & VERTICAL WIN MECHANICS ========
    function winCheck(arr1){
      console.log("kiwi");
      //Cycles through winning arrays first index
      for (var i = 0; i <= 2; i++) {
        var indexA = i;
        horCorrect = [];
        vertCorrect = [];
        // cycle through winning arrays second index
        for (var j = 0; j <= 2; j++){
          var indexB = j;

          for (var k = 0; k <= arr1.length; k++){
            if(horWin[indexA][indexB] == arr1[k]){
              horCorrect.push("x");
            };
            if(vertWin[indexA][indexB] == arr1[k]){
              vertCorrect.push("x");
            };
          };
        };
        if (horCorrect.length == 3){
          alert("WOOHOO");
        }if (vertCorrect.length == 3){
          alert("WOOHOO");
        };
      };

    }; // END WIN MECHANICS =============

  }); // END FUNCTIONS ==============
});
