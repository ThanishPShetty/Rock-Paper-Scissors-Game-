let userscore=0;
let compscore=0;

const lists=document.querySelectorAll(".list");
const restart=document.getElementById("restart");

restart.addEventListener("click",()=>{
  userscore=0;
  compscore=0;
  document.querySelector("#you").innerText=0;
  document.querySelector("#comp").innerText=0;
})



const showwinner=(userwin,userchoice,compchoice)=>{
   if(userwin){
     console.log("youwin");
     document.querySelector(".msg-container").setAttribute("id","msg");
     document.querySelector(".msg-container").innerText=`You Win Your ${userchoice} Beats ${compchoice}`;
     document.querySelector("#msg").style.backgroundColor="#42b883";
     document.querySelector("#msg").style.color="#35495e";
     userscore++;
     document.querySelector("#you").innerText=userscore;
   }else{
     console.log("you lose")
     document.querySelector(".msg-container").setAttribute("id","msg");
     document.querySelector(".msg-container").innerText=`You Lose Computers ${compchoice} Beats Your ${userchoice}`;
     document.querySelector("#msg").style.backgroundColor=" #dc2f2f";
     document.querySelector("#msg").style.color=" #ff894c";
     compscore++;
     document.querySelector("#comp").innerText=compscore;
   }
}


const drawgame=()=>{
    console.log("draw");
    document.querySelector(".msg-container").setAttribute("id","msg");
    document.querySelector(".msg-container").innerText="Draw Game";
    document.querySelector("#msg").style.backgroundColor="#142d4c";
    document.querySelector("#msg").style.color="#9fd3c7";
}





const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //Generate comp choice
    const compchoice=genComputerChoice();
    console.log("comuter choice=",compchoice);

    if(userchoice==compchoice)
    {
        //draw game
        drawgame();
    }else{
        let userwin=true;
        if(userchoice=="rock"){
            //paper or scissor
            userwin = compchoice=="paper" ? false : true;
        }else if(userchoice=="paper"){
            //rock or scissor
            userwin = compchoice=="scissor" ? false : true;
        }else{
            //rock or paper because now userchoice is scissor
            userwin = compchoice=="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};




const genComputerChoice=()=>{
    const options=['rock','paper','scissor'];
    const randindx=Math.floor(Math.random() * 3);
    return options[randindx];
}




lists.forEach((list)=>{
  list.addEventListener("click",()=>{
    const userchoice=list.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
  })
});