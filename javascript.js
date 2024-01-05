var body
var maindiv


function ready(){
    body = document.querySelector("body")
    createmaindiv()
    createpromptbutton()
}


function createmaindiv(){
    let newdiv = document.createElement("div")
    maindiv = newdiv
    maindiv.id = "maindiv"
    body.appendChild(maindiv)
}


function gridhoverlistener(div){
    div.addEventListener("mouseover", hovereddiv)
    div.addEventListener("mouseout", unhovereddiv)
}


function hovereddiv(){
    event.target.style.backgroundColor = "red"
}


function unhovereddiv(){
    event.target.style.backgroundColor = "gray"
}


function creategrid(amount){
    let size = 800 / amount
    let sizestring = size + "px"
    for (let i = 0; i<amount;i++){
        let newrow = document.createElement("div")
        newrow.className = "row"
        for (let i = 0; i<amount; i++){
            let newdiv = document.createElement("div")
            gridhoverlistener(newdiv)
            newdiv.style.width = sizestring
            newdiv.style.height = sizestring
            newdiv.className = "singlediv"
            newrow.appendChild(newdiv)
        }
        maindiv.appendChild(newrow)
    }
}


function createpromptbutton(){
    let promptbutton = document.createElement("button")
    promptbutton.addEventListener("click", giveprompt)
    promptbutton.style.alignSelf = "center"
    body.appendChild(promptbutton)
}


function giveprompt(){
    let amount = prompt("How many squares?")
    if (amount.typeof = "number"){
        if (amount <= 100){
            creategrid(amount)
            event.target.remove()
        }
    }
}