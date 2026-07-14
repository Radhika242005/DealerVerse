async function login(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

const response=await fetch(

"http://localhost:5000/api/auth/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

}

);

const data=await response.json();

if(response.ok){

localStorage.setItem("employee",

JSON.stringify(data));

window.location.href="pages/dashboard.html";

}

else{

document.getElementById("error").innerHTML=data.message;

}

}

catch{

document.getElementById("error").innerHTML="Server Error";

}
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
}