// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC69PNxwiVzkD5RQ_pYVNvVbxsxqH5P300",
  authDomain: "kalkulator2-a696b.firebaseapp.com",
  projectId: "kalkulator2-a696b",
  storageBucket: "kalkulator2-a696b.appspot.com",
  messagingSenderId: "698379114657",
  appId: "1:698379114657:web:1a0ad82afa8e3b8cd178e0",
  measurementId: "G-YXT41X847R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Lager en referanse til databasen
let db = firebase.firestore();
let collectionName = "MathProblem"



//Henter elementer fra DOM
let screenEl = document.querySelector("#screen")
let btnEl = document.querySelectorAll('.btn')
let likEl = document.querySelector('#lik')
let acEl = document.querySelector('#AC')
let sqrtEl = document.querySelector('#sqrt')
let backEl = document.querySelector('#back')
let prosentEl = document.querySelector('#prosent')
let kommaEl = document.querySelector('#komma')
let andreEl = document.querySelector('#andre')
let minusEnEl = document.querySelector('#minusEn')
let negativEl = document.querySelector('#negativ')
let eulerEl = document.querySelector('#euler')
let sinEl = document.querySelector('#sin')
let cosEl = document.querySelector('#cos')
let tanEl = document.querySelector('#tan')
let piEl = document.querySelector('#pi')
let lnEl = document.querySelector('#ln')
let logEl = document.querySelector('#log')
let hovedEl = document.querySelector('#hoved')
let body = document.querySelector('body')
let containerEl = document.querySelector('#container')


//Lytter og Funksjon for utregningen 
for(item of btnEl){
  item.addEventListener('click', utregning) 
};
function utregning(e){
  btnEltext=e.target.innerText;
  screenEl.value+=btnEltext
}


//Lyttere til kalkulator
acEl.addEventListener('click', w)
//likEl.addEventListener('click', w)
likEl.addEventListener('click', addProblem)
sqrtEl.addEventListener('click', w)
backEl.addEventListener('click', w)
prosentEl.addEventListener('click', w)
kommaEl.addEventListener('click', w)
andreEl.addEventListener('click', w)
minusEnEl.addEventListener('click', w)
negativEl.addEventListener('click', w)
eulerEl.addEventListener('click', w)
sinEl.addEventListener('click', w)
cosEl.addEventListener('click', w)
tanEl.addEventListener('click', w)
piEl.addEventListener('click', w)
lnEl.addEventListener('click', w)
logEl.addEventListener('click', w)

function w(e){
  if(e.target.id == "lik"){
    screenEl.value = eval(screenEl.value)
  }else if(e.target.id == "AC"){
    screenEl.value = screenEl.ariaPlaceholder
  }else if(e.target.id == "sqrt"){
    screenEl.value = eval(`Math.sqrt(${screenEl.value})`)
  }else if(e.target.id == "back"){
    screenEl.value = screenEl.value.slice(0, -1)
  }else if(e.target.id == "prosent"){
    screenEl.value = (screenEl.value) / 100
  }else if(e.target.id == "komma"){
    screenEl.value = (screenEl.value) / 10
  }else if(e.target.id == "andre"){
    screenEl.value = (screenEl.value)**2
  }else if(e.target.id == "minusEn"){
    screenEl.value = 1/screenEl.value
  }else if(e.target.id == "negativ"){
    screenEl.value = screenEl.value * -1
  }else if(e.target.id == "euler"){
    screenEl.value = screenEl.value += 2.71828
  }else if(e.target.id == "sin"){
    screenEl.value = Math.sin(screenEl.value)
  }else if(e.target.id == "cos"){
    screenEl.value = Math.cos(screenEl.value)
  }else if(e.target.id == "tan"){
    screenEl.value = Math.tan(screenEl.value)
  }else if(e.target.id == "pi"){
    screenEl.value = screenEl.value+=Math.PI
  }else if(e.target.id == "ln"){
    screenEl.value = Math.log(screenEl.value)
  }else if(e.target.id == "log"){
    screenEl.value = Math.log10(screenEl.value)
  }
}



//Darkmode
let checkboxEl = document.getElementById('checkbox')
checkboxEl.addEventListener('change', darkmode)
function darkmode(){
  document.body.classList.toggle('dark')
}

//localStorage
if(!localStorage.count){
  localStorage.count = 0 
}

function decreaseNumber(){
    localStorage.count = Number(localStorage.count) - 1
}

function increaseNumber(){
    localStorage.count = Number(localStorage.count) + 1
}

if(localStorage.count == 0){
  x = true
}
else{
  x = false
}

if(x = false){
  darkmode()
}



function addProblem(){
  db.collection(collectionName).add({
    problem: screenEl.value,
    time: Date.now()
    
});
  screenEl.value = eval(screenEl.value)
  console.log("Det ligger i databasen");
  getUsers()
}
let prevBtn = document.querySelector('#prev')

prevBtn.addEventListener('click', increaseNumber)
count = 0
function increaseNumber(){
  count++;
  console.log("koden kjørte")
  return count
}


function lastProblem(){
  count = (Number(increaseNumber()))
  let list = document.getElementsByTagName('p')
  data = list.item(count-1).innerHTML
  console.log()
  screenEl.value = data
}

function getProblem() {
  //Henter data
  db.collection(collectionName)
    .orderBy("time", 'desc')
    .get()
    .then((snapshot) => {
      // Henter ut dokumentene
      let dokumenter = snapshot.docs;

      containerEl.innerHTML = ""
      containerEl.innerHTML += `<button id="prev">prev</button>`
      
      console.log(dokumenter);
      for (let i = 0; i<12; i++) {
        let data = dokumenter[i].data();
        //console.log(data)
        containerEl.innerHTML += `<p>${data.problem}</p>`
        //Henter id til dokumenter
        //let id = dokumenter[i].id
      }
      let prevBtn = document.querySelector('#prev')
      prevBtn.addEventListener('click', lastProblem)
    })    
}     
getProblem()