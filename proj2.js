/*
Karina Casey
CS 346 Project 2
March 2019

Javascript for Project 2. Initializes the game by pulling stuff from the backend.
Makes the signin stuff do the thing.
I hope I'm actually allowed to do this in javascript instead of python.

 */



"use strict";
(function(){


  /**when the page loads make the canvases look right
     then establish what the buttons do
   */
  window.onload = function() {
    makeBoxTop();
    makeBoxLeft();
    makeSquares();


  };
  //guides on the top, fill from db
  function makeBoxTop() {
    for(let i = 0; i < 15; i++){
      let box = document.createElement("div");
      box.classList.add("boxtop");
      box.position = i;
      box.innerHTML = "1 1 1 1 4"; //placeholder
      document.getElementById("boxtops").appendChild(box);
    }
  }
  //guides on the left, fill from db
  function makeBoxLeft() {
    for(let i = 0; i < 15; i++){
      let box = document.createElement("div");
      box.classList.add("boxleft");
      box.position = i;
      box.innerHTML = "1 5 4"; //placeholder
      document.getElementById("boxlefts").appendChild(box);
    }
  }
  //225 is a lot of squares. surely there's a better way to do this. what have i done
  function makeSquares() {
    for(let y = 0; y < 15; y++){
      let row = document.createElement("div");
      row.classList.add("row");
      for(let x = 0; x < 15; x++){
        let square = document.createElement("div");
        square.classList.add("square");
        //if square is part of the solution set that here

       // square.onclick = colorIn(square); ok we're not doing this right now
        row.appendChild(square);
      }
      document.getElementById("squares").appendChild(row);
    }

  }
 // function colorIn(square) {
   // this.classList.add("filled");
 // }

})();
