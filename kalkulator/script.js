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


//https://www.youtube.com/watch?v=LgryqYxSCNk&t=284s 8min 25 sek
for(item of btnEl){
  item.addEventListener('click',(e)=>{
    btnEltext=e.target.innerText;
    screenEl.value+=btnEltext
});
}
acEl.addEventListener('click', w)
likEl.addEventListener('click', w)
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
    screenEl.value = screenEl.value / 100
  }else if(e.target.id == "komma"){
    screenEl.value = screenEl.value / 10
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
let checkboxEl = document.getElementById('checkbox')
checkboxEl.addEventListener('change', o)
function o(){
  document.body.classList.toggle('dark')
}