const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("http://127.0.0.1:5000/api/auth/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email,
        password
    })
});

        console.log("Status:", response.status);
        console.log("Response:", response);

        const data = await response.json();

        alert(data.message);

        if (data.success) {
            window.location.href = "pages/dashboard.html";
        }

    } catch (error) {

        console.error("Fetch Error:", error);

        alert(error.message);

    }

});