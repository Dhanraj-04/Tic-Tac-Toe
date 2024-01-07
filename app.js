let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      //playerO
      if(turnO){
        box.innerText="O";
        turnO=false;
      }
      //playerX
      else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      checkWinner();
    })
})

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}
let count=1;
const checkWinner=()=>{
    for(let pattern of winPattern){
       
         let pos1Val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3Val=boxes[pattern[2]].innerText;
         console.log(count)
         console.log("pos1",pos1Val)
         console.log("pos2",pos2val)
         console.log("pos3",pos3Val)

         if(pos1Val!="" && pos2val!="" && pos3Val!=""){
            if(pos1Val===pos2val && pos2val===pos3Val){
                showWinner(pos1Val);
            }
            else if(count===9 && (pos1Val!==pos2val || pos2val!==pos3Val )){
                msg.innerText="Its a draw";
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
            else{
                continue;
            }
         }
   }
   count++;
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
