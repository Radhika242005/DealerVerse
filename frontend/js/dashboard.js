async function loadDashboard(){

const dashboard=await fetch("http://localhost:5000/api/dashboard");

const info=await dashboard.json();

document.getElementById("employees").innerHTML=info.employees;

document.getElementById("events").innerHTML=info.events;

document.getElementById("locations").innerHTML=info.locations;

document.getElementById("departments").innerHTML=info.departments;

const analytics=await fetch("http://localhost:5000/api/analytics/department");

const chartData=await analytics.json();

new Chart(

document.getElementById("departmentChart"),

{

type:"bar",

data:{

labels:chartData.map(d=>d._id),

datasets:[{

label:"Activities",

data:chartData.map(d=>d.count)

}]

}

}

);

}

loadDashboard();