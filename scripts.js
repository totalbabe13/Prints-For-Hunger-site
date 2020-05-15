
let imageGrid      = document.getElementsByClassName('image-grid');
let imageCells     = document.getElementsByClassName('image-cell');

//1. Make ARRAY copy of image Cells
var arr = [];
for(var i = 0, n; n = imageCells[i]; ++i)
arr.push(n)


//2. Shuffle image cells copy
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
shuffle(arr);


//3.Iterate through shuffled array, and CREATE new nodes
    //a. create image cell with class className

function createNewCell(oldCell) {
  let newCell = document.createElement('div');
  let newAnchor = document.createElement('a');
  let xImage = document.createElement('img');
  newCell.className = "image-cell";
  newAnchor.className = "image-link-container"
  newCell.appendChild(newAnchor);
  newAnchor.appendChild(xImage);

  newAnchor.href = oldCell.childNodes[1].href;
  xImage.className = oldCell.childNodes[1].childNodes[1].className;
  xImage.src = oldCell.childNodes[1].childNodes[1].src;
  xImage.alt = oldCell.childNodes[1].childNodes[1].alt;
  imageGrid[0].appendChild(newCell);

}

function removeOriginalImageCells(cells) {
  while (cells.lastElementChild) {
    cells.removeChild(cells.lastElementChild);
  }
}
removeOriginalImageCells(imageGrid[0]);

//insert new Cells randomly 
for (var i = 0; i < arr.length; i++) {
  createNewCell(arr[i]);

}




// imageGrid[0].appendChild(p);
