// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// #### START HER ####
const startHere = "Her kommer din kode";

//Slik at det dukker opp fire random ord når vinduet lastes inn. 
window.onload = function() {
  addWords();
};


//Variabel for funksjon som sorterer de fire random ordene i alfabetisk rekkefølge. 
const sortList = []

//Funksjon for å finne og skrive ut fire random ord fra ordlista ovenfor. Skrives ut i span i index html.
const addWords = () => {
  en= wordList[Math.floor(Math.random()*wordList.length)];
  to= wordList[Math.floor(Math.random()*wordList.length)];
  tre= wordList[Math.floor(Math.random()*wordList.length)];
  fire= wordList[Math.floor(Math.random()*wordList.length)];

  document.getElementById("ord1").innerHTML = en;
  document.getElementById("ord2").innerHTML = to;
  document.getElementById("ord3").innerHTML = tre;
  document.getElementById("ord4").innerHTML = fire;

  //Pusher de fire random ordene inn i egen egen array som sorteres i alafabetisk rekkefølge. 
  sortList.push(en)
  sortList.push(to)
  sortList.push(tre)
  sortList.push(fire)

  //Kjører funksjonen som sorterer de fire ordene i rekkefølge. 
  sortList.sort()
  //Og skriver det ut i konsollen. 
  console.log(sortList);

  Numberlist.push(sortList.indexOf(en))
  Numberlist.push(sortList.indexOf(to))
  Numberlist.push(sortList.indexOf(tre))
  Numberlist.push(sortList.indexOf(fire))

  console.log(Numberlist);
}

function addToList(){
  Tall1 = parseInt(document.getElementById("tall1").value)
  Tall2 = parseInt(document.getElementById("tall2").value)
  Tall3 = parseInt(document.getElementById("tall3").value)
  Tall4 = parseInt(document.getElementById("tall4").value)

  userList.push(Tall1)
  userList.push(Tall2)
  userList.push(Tall3)
  userList.push(Tall4)

  console.log(userList)
}


function checkUserList(){
  if (userList.values == Number.isNaN) {
    console.log("number is nan")
  } else {
    
  }
}

function checkWords(){
  if (userList[0] !== Numberlist[0]){
   console.log("Wrong")
 }
}  

document.getElementById("test").addEventListener("click",addToList);
document.getElementById("test").addEventListener("click",checkWords);

/*

*/









