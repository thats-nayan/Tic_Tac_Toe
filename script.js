console.log("Welcome to Tic Tac Toe");

// BackGround Music
var music = new Audio('music.mp3');
music.play();

// Turn Music
var audio = new Audio('ting.mp3');

// Variables Required
let reset = document.querySelector(".btn");
let el = document.querySelectorAll(".box");
let a = document.querySelector(".turn");
let b = document.querySelector(".text");
var count = 0;
var turn = "X";

// Reset Game Logic
function reset_game() {
    music.play();
    count = 0;
    for (let i = 0; i < el.length; i++) {
        el[i].innerHTML = "";
        el[i].style.backgroundColor = "white";
    }
    a.innerHTML = "Turn of X";
    document.querySelector(".info img").style.display = "none";
    turn = "X";
}
// Reset Game Button
reset.addEventListener("click",reset_game);

// Logic to Check Win
function check_Win()
{
    // Checking For Rows
    if(el[0].innerHTML == el[1].innerHTML && el[2].innerHTML == el[0].innerHTML && el[0].innerHTML != "")
    {
        el[0].style.backgroundColor = "red";
        el[1].style.backgroundColor = "red";
        el[2].style.backgroundColor = "red";
        return true;
    }
    if(el[3].innerHTML == el[4].innerHTML && el[5].innerHTML == el[3].innerHTML && el[3].innerHTML != "")
    {
        el[3].style.backgroundColor = "red";
        el[4].style.backgroundColor = "red";
        el[5].style.backgroundColor = "red";
        return true;
    }
    if(el[6].innerHTML == el[7].innerHTML && el[8].innerHTML == el[6].innerHTML && el[6].innerHTML != "")
    {
        el[6].style.backgroundColor = "red";
        el[7].style.backgroundColor = "red";
        el[8].style.backgroundColor = "red";
        return true;
    }
    // Checking for Columns
    if(el[0].innerHTML == el[3].innerHTML && el[6].innerHTML == el[0].innerHTML && el[0].innerHTML != "")
    {
        el[0].style.backgroundColor = "red";
        el[3].style.backgroundColor = "red";
        el[6].style.backgroundColor = "red";
        return true;
    }
    if(el[1].innerHTML == el[4].innerHTML && el[1].innerHTML == el[7].innerHTML && el[1].innerHTML != "")
    {
        el[1].style.backgroundColor = "red";
        el[4].style.backgroundColor = "red";
        el[7].style.backgroundColor = "red";
        return true;
    }
    if(el[2].innerHTML == el[5].innerHTML && el[2].innerHTML == el[8].innerHTML && el[2].innerHTML != "")
    {
        el[2].style.backgroundColor = "red";
        el[5].style.backgroundColor = "red";
        el[8].style.backgroundColor = "red";
        return true;
    }
    // Checking For Diagonals
    if(el[0].innerHTML == el[4].innerHTML && el[0].innerHTML == el[8].innerHTML && el[0].innerHTML != "")
    {
        el[0].style.backgroundColor = "red";
        el[4].style.backgroundColor = "red";
        el[8].style.backgroundColor = "red";
        return true;
    }
    if(el[2].innerHTML == el[4].innerHTML && el[2].innerHTML == el[6].innerHTML && el[2].innerHTML != "")
    {
        el[2].style.backgroundColor = "red";
        el[4].style.backgroundColor = "red";
        el[6].style.backgroundColor = "red";
        return true;
    }
    return false;
}
// Logic of Playing Game
for (let i = 0; i < el.length; i++) {
   el[i].addEventListener("click",function () {
       if(el[i].innerHTML == "")
       {
            el[i].innerHTML = turn;
            audio.play();
            count++;
            console.log("count = "+count);
            if(count == 9)          // Game Draws
            {
                a.innerHTML = "Game Draw";
                b.innerHTML = "Press Reset Button to Play Again";
            }
            else if(check_Win())
            {
                if(turn == "X")
                {
                    a.innerHTML = "Player X wins";
                    b.innerHTML = "Press Reset Button to Play Again";
                }
                else
                {
                    a.innerHTML = "Player Y wins";
                    b.innerHTML = "Press Reset Button to Play Again";
                }
                document.querySelector(".info img").style.display = "block";
            }
            else
            {
                if(turn == "X")
                {
                    turn = "O";
                    a.innerHTML = "Turn of O";
                }
                else
                {
                    turn = "X";
                    a.innerHTML = "Turn of X";
                }
            }
       }
   });
}
