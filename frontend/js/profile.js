async function loadProfile(){

const employee=JSON.parse(

localStorage.getItem("employee")

);

if(!employee){

window.location.href="../index.html";

return;

}

document.getElementById("employeeName").innerHTML=

employee.username || employee.name || "Employee";

document.getElementById("employeeDepartment").innerHTML=

employee.department || "Department";

document.getElementById("employeeXP").innerHTML=

employee.xp || 0;

document.getElementById("employeeLevel").innerHTML=

employee.level || 1;

document.getElementById("employeeCoins").innerHTML=

employee.coins || 0;

document.getElementById("employeeBookings").innerHTML=

employee.bookings || 0;

const progress=Math.min(

(employee.xp||0)/15000*100,

100

);

document.getElementById("xpProgress").style.width=

progress+"%";

let badge="🥉 Bronze Seller";

let css="bronze";

if((employee.xp||0)>=15000){

badge="💎 Diamond Seller";

css="diamond";

}

else if((employee.xp||0)>=10000){

badge="🥇 Gold Seller";

css="gold";

}

else if((employee.xp||0)>=6000){

badge="🥈 Silver Seller";

css="silver";

}

const badgeElement=document.getElementById("employeeBadge");

badgeElement.innerHTML=badge;

badgeElement.className="badge "+css;

}
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
loadProfile();