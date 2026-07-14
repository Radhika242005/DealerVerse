async function loadDashboard() {

    try {

        const response = await fetch("http://localhost:5000/api/dashboard");

        const data = await response.json();

        document.getElementById("employees").innerHTML = data.employees;
        document.getElementById("events").innerHTML = data.events;
        document.getElementById("locations").innerHTML = data.locations;
        document.getElementById("departments").innerHTML = data.departments;

    }

    catch(error){

        console.log(error);

    }

}

loadDashboard();