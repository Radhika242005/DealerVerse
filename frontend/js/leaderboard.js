async function loadLeaderboard() {

    try {

        const response = await fetch("http://localhost:5000/api/leaderboard");

        const data = await response.json();

        const tbody = document.getElementById("leaderboardBody");

        tbody.innerHTML = "";

        data.forEach((employee, index) => {

            let badge = "🥉 Bronze";

            if(index === 0) badge = "🥇 Gold";

            else if(index === 1) badge = "🥈 Silver";

            tbody.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${employee._id}</td>

                <td>${employee.department}</td>

                <td>${employee.totalActions}</td>

                <td>${badge}</td>

            </tr>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadLeaderboard();