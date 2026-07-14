const user = getEmployee();

const achievements = [

{
title:"🥉 Bronze Performer",
condition:100,
description:"Reach 100 XP"
},

{
title:"🥈 Silver Performer",
condition:300,
description:"Reach 300 XP"
},

{
title:"🥇 Gold Performer",
condition:500,
description:"Reach 500 XP"
},

{
title:"🚗 Delivery Champion",
condition:2,
description:"Complete 2 Deliveries",
type:"booking"
}

];

const container=document.getElementById("achievementContainer");

achievements.forEach(a=>{

let unlocked=false;

if(a.type==="booking"){

    unlocked=user.bookings>=a.condition;

}
else{

    unlocked=user.xp>=a.condition;

}

container.innerHTML+=`

<div class="card">

<h2>${a.title}</h2>

<p>${a.description}</p>

<h3>

${unlocked?"✅ Unlocked":"🔒 Locked"}

</h3>

</div>

`;

});