
let yourScore=0;
let compScore=0;

let choice=document.querySelectorAll(".img");

let your=document.querySelector("#yourScore")

let comp=document.querySelector("#compScore");

let msg=document.querySelector("#msg");

let yo=document.querySelector("#y");

let co=document.querySelector("#c");



choice.forEach((ch)=>
{
  ch.addEventListener("click",()=>
  {
      let pick=ch.getAttribute("id");
      
      winner(pick);
  })

})

const winner=(pick)=>
{
    

   console.log("your  "+pick);
   let rand=Math.floor(Math.random()*3);
   console.log("comp  "+choice[rand].getAttribute("id")); 
   
   yo.innerText=pick;
   co.innerText=choice[rand].getAttribute("id");
   if(pick === choice[rand].getAttribute("id"))
   {
 
         msg.innerText="Match is drawn choose again"
         msg.style.backgroundColor="#081b31"
         msg.style.color="white"        

    }
  
    else if(pick === "rock")
    {
      if(choice[rand].getAttribute("id") === "scissor")
      {
        msg.innerText="Congrats You have won the match";
      msg.style.backgroundColor="green";
      msg.style.color="white";
      yourScore++;       
     your.innerText=yourScore;
          
      }
      else
      {
        msg.innerText="Sry your lost.Compute beat you";
      msg.style.backgroundColor="red";
      msg.style.color="white";
      compScore++;       
     comp.innerText=compScore;
                 
      }
    }

    else if(pick == "paper")
    {
      if(choice[rand].getAttribute("id") === "rock")
      {
        msg.innerText="Congrats You have won the match";
      msg.style.backgroundColor="green";
      msg.style.color="white";
      yourScore++;       
     your.innerText=yourScore;
          
      }
      else
      {
        msg.innerText="Sry your lost.Compute beat you";
      msg.style.backgroundColor="red";
      msg.style.color="white";
      compScore++;       
     comp.innerText=compScore;
                 
      }
    }

    else if(pick == "scissor")
    {
      if(choice[rand].getAttribute("id") === "paper")
      {
        msg.innerText="Congrats You have won the match";
      msg.style.backgroundColor="green";
      msg.style.color="white";
      yourScore++;       
     your.innerText=yourScore;
          
      }
      else
      {
        msg.innerText="Sry your lost.Compute beat you";
      msg.style.backgroundColor="red";
      msg.style.color="white";
      compScore++;       
     comp.innerText=compScore;
                 
      }
    }


}