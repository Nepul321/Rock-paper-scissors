const btn = document.getElementById("btn")
const h1 = document.getElementById("play")
const h2 = document.getElementById("play1")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const score1 = document.getElementById("score1")
let container = document.getElementById("container")
const reset = document.getElementById("button")
const wl = document.getElementById("wl")
const score2 = document.getElementById("score2")
const text = document.getElementById("text")
let value1 = 0;
let value2 = 0;
const random = ["Rock",
    "Paper",
    "Scissor"]

const comment = document.getElementById("comment")
let number = random[Math.floor(Math.random() * random.length)]
const para2 = "Rock Paper Scissors Shoot!!!"
let index = 0;


function write() {
    h1.innerText = para2.slice(0, index)
    index++;
    if (index > para2.length - 1) {
        h1.innerHTML = para2
    }
    h1.style.transition = "0.3s all linear"
}

setInterval(write, 100)

rock.addEventListener("click", () => {
    number = random[Math.floor(Math.random() * random.length)]
    if (number === "Rock") {
        comment.innerHTML = "Tied"
        console.log(number)
    } else if (number === "Scissor") {
        comment.innerHTML = "Rock smashes. You Win"
        value1++;
        score1.innerHTML = value1;
        console.log(number)
    } else if (number === "Paper") {
        comment.innerHTML = "Paper covers. You lose"
        value2++;
        score2.innerHTML = value2;
        console.log(number)
    }
    if (value1 === 10) {
        text.innerHTML = "You win the game"
        container.style.display = "none"
        wl.style.display = "block"
        value1 = 0
        score1.innerHTML = value1;
        value2 = 0
        score2.innerHTML = value2;
        document.body.classList.add("bg-success")
        comment.innerHTML = "Your comment goes here."
    } else if (value2 === 10) {
        text.innerHTML = "You lose the game"
        container.style.display = "none"
        wl.style.display = "block"
        value1 = 0
        score1.innerHTML = value1;
        value2 = 0
        score2.innerHTML = value2;
        document.body.classList.add("bg-danger")
        comment.innerHTML = "Your comment goes here."
    }
})

paper.addEventListener("click", () => {
    number = random[Math.floor(Math.random() * random.length)]
    if (number === "Rock") {
        comment.innerHTML = "Paper covers. You Win"
        value1++;
        score1.innerHTML = value1;
        console.log(number)
    } else if (number === "Scissor") {
        comment.innerHTML = "Scissors cuts. You lose"
        value2++;
        score2.innerHTML = value2;
        console.log(number)
    } else if (number === "Paper") {
        comment.innerHTML = "Tied"
        console.log(number)
    }
    if (value1 === 10) {
        text.innerHTML = "You win the game"
        container.style.display = "none"
        wl.style.display = "block"
        value1 = 0
        score1.innerHTML = value1;
        value2 = 0
        score2.innerHTML = value2;
        document.body.classList.add("bg-success")
        comment.innerHTML = "Your comment goes here."
    } else if (value2 === 10) {
        text.innerHTML = "You lose the game"
        container.style.display = "none"
        wl.style.display = "block"
        value1 = 0
        score1.innerHTML = value1;
        value2 = 0
        score2.innerHTML = value2;
        document.body.classList.add("bg-danger")
        comment.innerHTML = "Your comment goes here."
    }
})

scissor.addEventListener("click", () => {
    number = random[Math.floor(Math.random() * random.length)]
    if (number === "Rock") {
        comment.innerHTML = "Rock smashes. You lose"
        value2++;
        score2.innerHTML = value2;
        console.log(number)
    } else if (number === "Scissor") {
        comment.innerHTML = "Tied"
        console.log(number)
    } else if (number === "Paper") {
        comment.innerHTML = "Scissor cuts. You Win"
        value1++;
        score1.innerHTML = value1;
        console.log(number)
    }
    if (value1 === 10) {
        text.innerHTML = "You win the game"
        container.style.display = "none"
        wl.style.display = "block"
        value1 = 0
        score1.innerHTML = value1;
        value2 = 0
        score2.innerHTML = value2;
        comment.innerHTML = "Your comment goes here."
        document.body.classList.add("bg-success")
    } else if (value2 === 10) {
        text.innerHTML = "You lose the game"
        container.style.display = "none"
        wl.style.display = "block"
        value1 = 0
        score1.innerHTML = value1;
        value2 = 0
        score2.innerHTML = value2;
        document.body.classList.add("bg-danger")
        comment.innerHTML = "Your comment goes here."
    }
})

btn.addEventListener("click", () => {
    container.style.display = "block"
    document.getElementById("intro").style.display = "none"
})

reset.addEventListener("click", () => {
    container.style.display = "block"
    wl.style.display = "none"
    if (document.body.classList.contains("bg-success")) {
        document.body.classList.remove("bg-success")
    } else if (document.body.classList.contains("bg-danger")) {
        document.body.classList.remove("bg-danger")
    }
})