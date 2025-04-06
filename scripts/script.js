const logo = document.getElementById('logo')
const loading = document.getElementById('container')
const gender = document.getElementById('gender')
var welcome = document.getElementById('welcome')
var welcome2 = document.getElementById('welcome2')
const start = document.getElementById("start")
const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")
const choice3 = document.getElementById("choice3")
const choice4 = document.getElementById("choice4")
const ageinput = document.getElementById("age")
const first = document.getElementById('first')
var numstate = 0
const buttonnum = 0
start.textContent = "Get Started"

choice1.style.display = "none"
choice2.style.display = "none"
choice3.style.display = "none"
choice4.style.display = "none"
ageinput.style.display = "none"

gender.style.display = "none"
start.style.display = "none"


var content = [
    "Have you ever wondered if there was a website designed to guess the perfect soulmate for you?", 
    "Well, you might be lucky today !", 
    "How old are you?(be honest)", 
    "What's your gender?", 
    "Got Yaa!! Sorry but we're kinda homophobic in here. Hahahahaha!!",
    "How do you want her physically?",
    "How do you want him physically",
    "How would you name her?",
    "How would you name him?",
]



setTimeout(function(){
    logo.style.top = (10 + "px")
    loading.style.display = "none"
    gender.style.display = "block"
    
    setTimeout(function(){
        animate(content[0], welcome) //Je ne sais pas optimiser cette partie, aidez Kasi
        setTimeout(function(){
            animate(content[1], welcome2)
            setTimeout(function(){
                start.style.display = "block"
            }, 100)
        }, 100)
    }, 100)
    
}, 100)


gender.style.height = (window.innerHeight - 51 + "px")
loading.style.top = ((window.innerHeight / 2) - 51 + "px")
logo.style.top = ((window.innerHeight / 2) - 180 + "px")

function animate(insert, out){ //une fonction que j'ai crée pour avoir un effet de ligne de commande sur les textes
    var outList = out.textContent.split("")
    var insertList = insert.split("")
    if(outList.length < insertList.length){
        out.textContent += insertList[outList.length]
        setTimeout(function (){
            animate(insert, out)
        }, 30)
    }
}

start.addEventListener('click', function(){
    numstate += 1
    stages(numstate, 1)
})   
choice1.addEventListener("click", function(){
    numstate += 1
    stages(numstate, 2)
})
choice2.addEventListener("click", function(){
    numstate += 1
    stages(numstate, 3)
})
choice3.addEventListener("click", function(){
    numstate += 1
    stages(numstate, 4)
})
choice4.addEventListener("click", function(){
    numstate += 1
    stages(numstate, 5)
})

function stages(state, num){
    welcome.textContent = ""
    if(state == 1){
        start.textContent = "next"
        welcome2.style.display = "none"
        ageinput.style.display = "block"
        age = parseInt(ageinput.textContent)
        animate(content[2], welcome)
    }else if(state == 2){
        ageinput.style.display = "none"
        animate(content[3], welcome)
        start.className = "choices"
        start.textContent = "Male"
        choice1.style.display = "block"
        choice2.style.display = "block"
        choice1.textContent = "Female"
        choice2.textContent = "LGBTQI+"
        age = parseInt(ageinput.value)
    }else if(state == 3){
        if(num == 1){
            animate()
        }else if(num == 3){
            animate(content[4], welcome)
            start.style.display = "none"
            choice1.style.display = "none"
            choice2.style.display = "none"
        }
    }
}

