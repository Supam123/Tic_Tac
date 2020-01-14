//connecting a button to  event
// button in html -->>>  grabing the button id through document object model ----->>>>> then creating the event click in that 
var h1 = document.querySelector('h1');
var restart = document.querySelector('#button_game');

var squares = document.querySelectorAll('td');


// clear the sqaure marker
function clearSquare() {
  for(var i = 0;i < squares.length; i++){
    squares[i].textContent = ' ';
  }

}

restart.addEventListener('click',clearSquare)

// Rather than making eah cell with each id and changing the cell on a event we cann loop the  cell part or the variable name . evet part
// bad way
// cell1= document.query selctor(#id 1) which is the id of the cell1
// then cell1.eventad( click,fucntoiopn){
//   if cell1conett ==
// }



function change(){
  if(this.textContent === " "){
    this.textContent = 'X';

  }
  else if (this.textContent === "X") {
    this.textContent = 'O';

  }
  else{
    this.textContent = ' ';
  }
}


// now i want this == to be qual of the every cell1

for(var i = 0; i < squares.length;i++){
    // squares[i] =  individual cell
  squares[i].addEventListener('click',change)
}

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];// the formula inside is just creating a randon number and concatenating it to colors
  }
  return color
}
function changeHeaderColor(){
  colorInput = getRandomColor()
  h1.style.color = colorInput;
}
setInterval("changeHeaderColor()",50);
