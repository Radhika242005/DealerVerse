async function loadDepartments(){

const response=await fetch("http://localhost:5000/api/departments");

const data=await response.json();

const container=document.getElementById("departmentContainer");

container.innerHTML="";

const winner=data[0];

container.innerHTML+=`

<div class="winner-card">

<h1>🏆</h1>

<h2>${winner.department}</h2>

<p>Winning Department</p>

<div class="badge gold">

${winner.xp.toLocaleString()} XP

</div>

</div>

`;

data.forEach(dept=>{

let icon="🏢";

if(dept.department==="SALES")

icon="🚗";

else if(dept.department==="ACCOUNTS")

icon="💰";

else if(dept.department==="FINANCE")

icon="🏦";

else if(dept.department==="EDP")

icon="💻";

const percent=(dept.xp/winner.xp)*100;

container.innerHTML+=`

<div class="department-card">

<h1>${icon}</h1>

<h2>${dept.department}</h2>

<p>${dept.xp.toLocaleString()} XP</p>

<div class="department-progress">

<div

class="department-progress-fill"

style="width:${percent}%">

</div>

</div>

</div>

`;

});

}
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
loadDepartments();