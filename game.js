const screenMoves = document.querySelector(".game-info__moves span");
const time = document.querySelector(".game-info__time span");
const gameBoard = document.querySelector(".board-game");
const cards = document.querySelectorAll(".card");
const cardsBack = document.querySelectorAll(".card-back");
const cardsFront = document.querySelectorAll(".card-front");
var minutes=0;
var seconds=0;
var moves=0;
const images = [
  { name: "annie", src: "img/annie.png" },
  { name: "brand", src: "img/brand.png" },
  { name: "brum", src: "img/brum.png" },
  { name: "fizz", src: "img/fizz.png" },
  { name: "heimerdinger", src: "img/heimerdinger.png" },
  { name: "katarina", src: "img/katarina.png" },
  { name: "kindred", src: "img/kindred.png" },
  { name: "lee", src: "img/lee.png" },
  { name: "lux", src: "img/lux.png" },
  { name: "oriana", src: "img/oriana.png" },
  { name: "rengar", src: "img/rengar.png" },
  { name: "singed", src: "img/singed.png" },
  { name: "sion", src: "img/sion.png" },
  { name: "sona", src: "img/sona.png" },
  { name: "tresh", src: "img/tresh.png" },
  { name: "varus", src: "img/varus.png" },
];
const imagesArray = [];
var previousCard, currentCard;
document.addEventListener("DOMContentLoaded", (e) => {
  creatRandomImages();
  for (let i = 0; i < imagesArray.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", imagesArray[i].src);
    img.setAttribute("name", imagesArray[i].name);
    img.setAttribute("index", i);
    cards[i].children[0].append(img);
  }
});
setInterval(()=>{
 
  if(seconds==60){
    seconds=0;
    minutes++;
  }
   
   time.innerText = `${minutes}:${seconds}`;

  seconds++;
 
},1000)
gameBoard.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("back-img")) {

    moves++;
    screenMoves.innerText = moves;
    if (previousCard == undefined) {
      previousCard = e.target.parentNode.parentNode.children[0];
      e.target.parentNode.parentNode.children[1].style = "display:none";
      previousCard.style = "display :block";
    } else if (currentCard == undefined) {
      currentCard = e.target.parentNode.parentNode.children[0];
      e.target.parentNode.parentNode.children[1].style = "display:none";
      currentCard.style = "display :block";
    }
    if (previousCard != undefined && currentCard != undefined) {
      setTimeout(check, 1000);
    }
  }
});
function check() {
  if (previousCard.children[0].name == currentCard.children[0].name) {
  } else {
    previousCard.parentNode.children[1].style = "display:block";
    currentCard.parentNode.children[1].style = "display:block";

    currentCard.style = "display :none";
    previousCard.style = "display :none";
  }
  currentCard = previousCard = undefined;
}

function creatRandomImages() {
  let randomImages = [];
  var randomImages16 = [];
  let k = 16;
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * k);
    randomImages.push(images[randomNumber]);
    images.splice(randomNumber, 1);
    k--;
  }
  randomImages16 = [...randomImages];
  for (let i = 7; i >= 0; i--) {
    let randomNumber = Math.floor(Math.random() * i);
    randomImages16.push(randomImages[randomNumber]);
    randomImages.splice(randomNumber, 1);
  }
  k = 16;
  for (let i = 0; i < 16; i++) {
    let randomNumber = Math.floor(Math.random() * k);
    imagesArray.push(randomImages16[randomNumber]);
    randomImages16.splice(randomNumber, 1);
    k--;
  }
}
