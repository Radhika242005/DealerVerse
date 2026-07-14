async function loadAchievements(){

    const response = await fetch("http://localhost:5000/api/leaderboard");

    const employees = await response.json();

    const container = document.getElementById("achievementContainer");

    container.innerHTML = "";

    employees.forEach(employee=>{

        let badge = "🥉 Bronze Seller";

        if(employee.totalXP >= 15000)
            badge = "💎 Diamond Seller";

        else if(employee.totalXP >= 10000)
            badge = "🥇 Gold Seller";

        else if(employee.totalXP >= 6000)
            badge = "🥈 Silver Seller";

        container.innerHTML += `

        <div class="quest-card">

            <h2>${employee._id}</h2>

            <h3>${employee.department}</h3>

            <h2>${badge}</h2>

            <p>Total XP : ${employee.totalXP}</p>

        </div>

        `;

    });

}

loadAchievements();