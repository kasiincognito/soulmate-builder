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
const result = document.getElementById("result")
var numstate = 0
const buttonnum = 0
var character = [0, 0, 0]
var nom = ""
start.textContent = "Get Started"

result.style.display = "none"
choice1.style.display = "none"
choice2.style.display = "none"
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
    "How do you want him physically?",
    "How about her attitude?",
    "How about his attitude?",
    "How would you name her?",
    "How would you name him?",
]



setTimeout(function(){
    logo.style.top = (10 + "px")
    loading.style.display = "none"
    logo.style.display = "none"
    gender.style.display = "block"
    
    setTimeout(function(){
        animate(content[0], welcome)                //Je ne sais pas optimiser cette partie, aidez Kasi
        setTimeout(function(){
            animate(content[1], welcome2)
            setTimeout(function(){
                start.style.display = "block"
            }, 2000)
        }, 4000)
    }, 100)
}, 4000)


gender.style.height = (window.innerHeight - 51 + "px")
loading.style.top = ((window.innerHeight / 2) - 51 + "px")
logo.style.top = ((window.innerHeight / 2) - 180 + "px")

function animate(insert, out){                       //une fonction que j'ai crée pour avoir un effet de ligne de commande sur les textes
    var outList = out.textContent.split("")
    var insertList = insert.split("")
    if(outList.length < insertList.length){
        out.textContent += insertList[outList.length]
        setTimeout(function (){
            animate(insert, out)
        }, 30)
    }
}

start.addEventListener('click', function(){         //Détecteurs évènements boutons
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
        ageinput.value = ""
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
        choice2.textContent = "Non-binary"
        age = parseInt(ageinput.value)
        no()
        function no(){
            if(age > 30){
                alert("Sorry but you're too old, just reload")
                no()
            }else if(age < 13){
                alert("Hey! what are you doing here kiddo? Just reload")
                no()
            }else if(age == ""){
                alert("don't try to fool me bro, that's not even a number!")
                no()
            }
        }
    }else if(state == 3){
        start.textContent = "Hot"
        choice1.textContent = "Middle"
        choice2.textContent = "Skinny"
        if(num == 1){
            character[0] = 0
            animate(content[5], welcome)
        }else if(num == 2){
            character[0] = 1
            animate(content[6], welcome)
        }
        else if(num == 3){
            animate(content[4], welcome)
            start.style.display = "none"
            choice1.style.display = "none"
            choice2.style.display = "none"
        }
        
    }else if(state == 4){
        if(character[0] == 0){
            animate(content[7], welcome)
        }else if(character[0] == 1){
            animate(content[8], welcome)
        }
        start.textContent = "Savage"
        choice1.textContent = "Calm"
        choice2.textContent = "Dirty"
        if(num == 1){
            character[1] = 0
        }else if(num == 2){
            character[1] = 1
            
        }else if(num == 3){
            character[1] = 2
        }
    }else if(state == 5){
        ageinput.value = ""
        ageinput.style.display = "block"
        start.textContent = "next"
        choice1.style.display = "none"
        choice2.style.display = "none"
        if(character[0] == 0){
            animate(content[9], welcome)
        }else{
            animate(content[10], welcome)
        }
        
        if(num == 1){
            character[2] = 0
        }else if(num == 2){
            character[2] = 1
        }
        else if(num == 3){
            character[2] = 2
        }
    }else if(state == 6){
        gender.style.display = "none"
        logo.style.display = "block"
        loading.style.display = "block"
        setTimeout(function(){
            gender.style.display = "block"
            ageinput.style.display = "none"
            start.style.display = "none"
            gen(character)
        }, 3000)
        if(character[0] == 0){
            logo.textContent = "Building her"
        }else{
            logo.textContent = "Building him"
        }
        nom = ageinput.value
    }

}

function gen(res){
    if(character[0] == 0){
        age -= 2
        animate(("Here is " + nom + ", a " + age + " year old girl we built for you"), welcome)
    }else if(character[0] == 1){
        age += 2
        animate(("Here is " + nom + ", a " + age + " year old boy we built for you"), welcome)
    }

    result.style.display = "block"
    if(res[0] == 0 && res[1] == 0 && res[2] == 0){      // 1
        result.src = "assets/100.jpg"
    }else if(res[0] == 0 && res[1] == 0 && res[2] == 1){// 2
        result.src = "assets/101.jpg"
    }else if(res[0] == 0 && res[1] == 0 && res[2] == 2){// 3
        result.src = "assets/102.jpg"
    }else if(res[0] == 0 && res[1] == 1 && res[2] == 0){// 4
        result.src = "assets/110.jpg"
    }else if(res[0] == 0 && res[1] == 1 && res[2] == 1){// 5
        result.src = "assets/111.jpg"
    }else if(res[0] == 0 && res[1] == 1 && res[2] == 2){// 6
        result.src = "assets/112.jpg"
    }else if(res[0] == 0 && res[1] == 2 && res[2] == 0){// 7
        result.src = "assets/120.jpg"
    }else if(res[0] == 0 && res[1] == 2 && res[2] == 1){// 8
        result.src = "assets/121.jpg"
    }else if(res[0] == 0 && res[1] == 2 && res[2] == 2){// 9
        result.src = "assets/122.jpg"
    }else if(res[0] == 1 && res[1] == 0 && res[2] == 0){// 10
        result.src = "assets/000.jpg"
    }else if(res[0] == 1 && res[1] == 0 && res[2] == 1){// 11
        result.src = "assets/001.jpg"
    }else if(res[0] == 1 && res[1] == 0 && res[2] == 2){// 12
        result.src = "assets/002.jpg"
    }else if(res[0] == 1 && res[1] == 1 && res[2] == 0){// 13
        result.src = "assets/010.jpg"
    }else if(res[0] == 1 && res[1] == 1 && res[2] == 1){// 14
        result.src = "assets/011.jpg"
    }else if(res[0] == 1 && res[1] == 1 && res[2] == 2){// 15
        result.src = "assets/012.jpg"
    }else if(res[0] == 1 && res[1] == 2 && res[2] == 0){// 16
        result.src = "assets/020.jpg"
    }else if(res[0] == 1 && res[1] == 2 && res[2] == 1){// 17
        result.src = "assets/021.jpg"
    }else if(res[0] == 1 && res[1] == 2 && res[2] == 2){// 18
        result.src = "assets/022.jpg"
    }
    else{
        alert("Sorry, you don't have a match")
    }
}

