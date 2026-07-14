const players=[

{
name:"Rahul",
department:"Sales",
xp:340
},

{
name:"Radhika",
department:"Finance",
xp:300
},

{
name:"Deepika",
department:"Sales",
xp:260
}

];

const body=document.getElementById("leaderboardBody");

players.sort((a,b)=>b.xp-a.xp);

players.forEach((p,index)=>{

let level=Math.floor(p.xp/100)+1;

body.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${p.name}</td>

<td>${p.department}</td>

<td>${p.xp}</td>

<td>${level}</td>

</tr>

`;

});