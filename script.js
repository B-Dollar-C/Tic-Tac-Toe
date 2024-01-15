let currentPlayer = "X"
let arr = Array(9).fill(null)
const loader = document.querySelector('.loader')

function checkWinnerDraw(){
   
        const msg = document.getElementById("message")
        const win = document.getElementById("winnerMessage")
        
    if(
        (arr[0]!= null && arr[0]==arr[1] && arr[1]==arr[2])||
        (arr[3]!= null && arr[3]==arr[4] && arr[4]==arr[5])||
        (arr[6]!= null && arr[6]==arr[7] && arr[7]==arr[8])||
        (arr[0]!= null && arr[0]==arr[3] && arr[3]==arr[6])||
        (arr[1]!= null && arr[1]==arr[4] && arr[4]==arr[7])||
        (arr[2]!= null && arr[2]==arr[5] && arr[5]==arr[8])||
        (arr[0]!= null && arr[0]==arr[4] && arr[4]==arr[8])||
        (arr[2]!= null && arr[2]==arr[4] && arr[4]==arr[6])
    ){
        
        win.textContent = "Winner is "+ currentPlayer
        msg.textContent = "Congratulations!"
        loader.style.display = 'flex'
        setTimeout(()=>{popUp()}, 1000)
       
    }
    if(!arr.some(el => el === null)){
        msg.textContent = "Game Draw!"
        win.textContent = "No Winner"
        loader.style.display = 'flex'
        setTimeout(()=>{popUp()}, 500)
    }
}
function handleClick(el){
    element = document.getElementById(el.id);
    if (arr[Number(el.id)]!= null){return}
    arr[Number(el.id)] = currentPlayer
    checkWinnerDraw()
    el.innerText = currentPlayer
    if (currentPlayer == "X"){
        currentPlayer = "O"
        element.style.backgroundColor = "#7dc97d"
    }else{
        currentPlayer = "X"
        element.style.backgroundColor = "#6faad8"
    }
}

function playAgain(){
    const modal = document.getElementById("winModal")
    modal.style.display = 'none'
    const cells = document.querySelectorAll('.col')
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
        cell.textContent = ''
    })
    arr.forEach(ar => {
        let i = arr.indexOf(ar)
        arr[i] = null
    })

    currentPlayer = "X"

}

function popUp(){
    loader.style.display = 'none'
    const modal = document.getElementById("winModal")
    modal.style.display = 'flex'

}