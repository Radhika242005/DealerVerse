async function loadLeaderboard() {

    try {

        const response = await fetch("http://localhost:5000/api/leaderboard");

        const data = await response.json();

        const tbody = document.getElementById("leaderboardBody");

        tbody.innerHTML = "";

        data.forEach((employee, index) => {

            // Badge
            let badge = "🥉 Bronze";

            if (index === 0)
                badge = "🥇 Gold";
            else if (index === 1)
                badge = "🥈 Silver";

            // Level
            let level = 1;

            if (employee.totalXP >= 15000)
                level = 6;
            else if (employee.totalXP >= 10000)
                level = 5;
            else if (employee.totalXP >= 6000)
                level = 4;
            else if (employee.totalXP >= 3000)
                level = 3;
            else if (employee.totalXP >= 1000)
                level = 2;

            // Add row
            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee._id}</td>
                    <td>${employee.department}</td>
                    <td>${employee.totalXP}</td>
                    <td>⭐ Level ${level}</td>
                    <td>${badge}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }

}

loadLeaderboard();