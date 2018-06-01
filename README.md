# JQuery Tic-Tac-Toe


## Description
A web-based rendition of the classic game, built with JQuery  

## Installation 
Downloading via a zip file and cloning the Repo from Github

## Challenges
The most challenging parts of building this game were:  
a) finding a logical win condition; applicable for horizontal, vertical and diagonal combinations.  
  
b) Generally keeping the JS code dry.
  
        
### Images and links (optional)
Screenshots, wireframes and links to external resources you might have used in the project, or to the Github Pages site of your project 

> Note: The Github Pages link can only be done AFTER the pull request has been approved and only works for Front-End code

## Code snippet:
###script executed on player action
``` javascript
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
        };
```

## Screenshot
![tic-tac-toe (v1) by YannLL](https://i.imgur.com/vAwwvK6.png)