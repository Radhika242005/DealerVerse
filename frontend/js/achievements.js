async function loadAchievements(){

const response=await fetch("http://localhost:5000/api/leaderboard");

const employees=await response.json();

const container=document.getElementById("achievementContainer");

container.innerHTML="";

employees.forEach(employee=>{

let badge="🥉 Bronze Seller";

let css="bronze";

if(employee.totalXP>=15000){

badge="💎 Diamond Seller";

css="diamond";

}

else if(employee.totalXP>=10000){

badge="🥇 Gold Seller";

css="gold";

}

else if(employee.totalXP>=6000){

badge="🥈 Silver Seller";

css="silver";

}

container.innerHTML+=`

<div class="achievement-card">

<h1>${badge.split(" ")[0]}</h1>

<h2>${employee._id}</h2>

<p>${employee.department}</p>

<div class="badge ${css}">

${badge}

</div>

<h3 style="margin-top:20px">

⭐ ${employee.totalXP.toLocaleString()} XP

</h3>

</div>

`;

});

}
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
loadAchievements();