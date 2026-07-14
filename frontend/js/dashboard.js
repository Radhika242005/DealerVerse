async function loadDashboard() {

    try {

        const response = await fetch("http://localhost:5000/api/employees");

        const user = await response.json();

        document.getElementById("xp").textContent = user.xp;
        document.getElementById("coins").textContent = user.coins;
        document.getElementById("level").textContent = user.level;
        document.getElementById("bookings").textContent = user.bookings;

    } catch (error) {

        console.error(error);
        alert("Unable to load dashboard");

    }

}

loadDashboard();