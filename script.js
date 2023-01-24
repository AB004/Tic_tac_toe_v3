console.log("Welcome!")

let music = new Audio("music.mp3")
let audioTurn = new Audio("buttonm.mp3")
let gameOver = new Audio("gameOver.wav")

let turn = "X"
let isgameover = false;
var count = 0;
var gameWin = 0;
const changeTurn = ()=>{
    count++;
    return turn === "X" ? "O" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,14.65,90],
        [1,4,7,0,14.65,90],
        [2,5,8,10,14.65,90],
        [0,4,8,0,14.5,45],
        [2,4,6,0,14.5,135]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText !== "")){
            if(gameWin<1){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!!!";
                isgameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
               
                document.querySelector(".line").style.width = "30vw";
                gameOver.play();
                music.pause();
            }
            
            gameWin = 1;
            
        }
    })
}



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    
    let boxtext = element.querySelector('.boxtext')
    
    element.addEventListener('click', ()=>{
        music.play();
        if(boxtext.innerText === ''){
            // count++;
            boxtext.innerText = turn ;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(gameWin === 1){
                music.pause();
            }
            if(!isgameover){
                if(count === 9 ){
                    gameOver.play();
                    music.pause();
                    document.getElementsByClassName("info")[0].innerText = "Draw!";
                }
                else{
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
                
            }
            
        }
    })
    element.addEventListener('touchstart', ()=>{
        
        if(boxtext.innerText === ''){
            // count++;
            boxtext.innerText = turn ;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(gameWin === 1){
                music.pause();
            }
            if(!isgameover){
                if(count === 9 ){
                    gameOver.play();
                    music.pause();
                    document.getElementsByClassName("info")[0].innerText = "Draw!";
                }
                else{
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
                
            }
            
        }
    })
})


reset.addEventListener("click", ()=>{
    music.pause();
    gameWin = 0;
    count = 0;
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.querySelector('.line').style.width = ' 0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

reset.addEventListener("touchstart", ()=>{
    music.pause();
    gameWin = 0;
    count = 0;
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.querySelector('.line').style.width = ' 0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})