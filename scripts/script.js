const logo = document.getElementById('logo')
const loading = document.getElementById('container')
const gender = document.getElementById('gender')
var welcome = document.getElementById('welcome')
var welcome2 = document.getElementById('welcome2')

gender.style.display = "none"
welcome.style.display = "none"
welcome2.style.display = "none"


setTimeout(function(){
    logo.style.top = (10 + "px")
    loading.style.display = "none"
    gender.style.display = "block"
    welcome.style.display = "block"
    welcome2.style.display = "block"
}, 1000)

gender.style.height = (window.innerHeight - 51 + "px")
loading.style.top = ((window.innerHeight / 2) - 51 + "px")
logo.style.top = ((window.innerHeight / 2) - 180 + "px")


var content = "Have you ever wondered if there was a website designed to guess the perfect soulmate for you?"
var content2 = "Well, you might be lucky today !"

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

setTimeout(function(){
    animate(content, welcome) //Je ne sais pas optimiser cette partie, aidez Kasi
    setTimeout(function(){
        animate(content2, welcome2)
    }, 5000)
}, 600)
