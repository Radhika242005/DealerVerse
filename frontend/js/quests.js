const quests = [

{
title:"Create 2 Bookings",
reward:50,
completed:false
},

{
title:"Approve Finance for 3 Bookings",
reward:100,
completed:false
},

{
title:"Deliver 1 Vehicle",
reward:150,
completed:false
}

];

const container=document.getElementById("questContainer");

function loadQuests(){

container.innerHTML="";

quests.forEach((q,index)=>{

container.innerHTML+=`

<div class="quest-card">

<h2>${q.title}</h2>

<p>Reward : ${q.reward} XP</p>

<button onclick="completeQuest(${index})">

${q.completed ? "Completed ✅":"Complete"}

</button>

</div>

`;

});

}

function completeQuest(index){

if(!quests[index].completed){

quests[index].completed=true;

alert("🏆 +" + quests[index].reward + " XP Earned!");

loadQuests();

}

}

loadQuests();