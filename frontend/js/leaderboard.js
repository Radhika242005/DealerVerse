async function loadLeaderboard(){

    const response = await fetch("http://localhost:5000/api/leaderboard");

    const data = await response.json();

    const podium = document.getElementById("podium");

    const tbody = document.getElementById("leaderboardBody");

    podium.innerHTML = "";

    tbody.innerHTML = "";

    // ---------- Top 3 Cards ----------

    data.slice(0,3).forEach((employee,index)=>{

        let medal="🥉";

        let cls="rank3";

        if(index===0){

            medal="🥇";

            cls="rank1";

        }

        else if(index===1){

            medal="🥈";

            cls="rank2";

        }

        let level=1;

        if(employee.totalXP>=15000) level=6;
        else if(employee.totalXP>=10000) level=5;
        else if(employee.totalXP>=6000) level=4;
        else if(employee.totalXP>=3000) level=3;
        else if(employee.totalXP>=1000) level=2;

        podium.innerHTML+=`

        <div class="podium-card ${cls}">

            <h1>${medal}</h1>

            <h2>${employee._id}</h2>

            <p>${employee.department}</p>

            <h3>${employee.totalXP.toLocaleString()} XP</h3>

            <div class="level">

                ⭐ Level ${level}

            </div>

        </div>

        `;

    });

    // ---------- Remaining Table ----------

    data.forEach((employee,index)=>{

        let badge="🥉 Bronze";

        if(index===0) badge="🥇 Gold";
        else if(index===1) badge="🥈 Silver";

        let level=1;

        if(employee.totalXP>=15000) level=6;
        else if(employee.totalXP>=10000) level=5;
        else if(employee.totalXP>=6000) level=4;
        else if(employee.totalXP>=3000) level=3;
        else if(employee.totalXP>=1000) level=2;

        tbody.innerHTML+=`

        <tr>

            <td>#${index+1}</td>

            <td>${employee._id}</td>

            <td>${employee.department}</td>

            <td>${employee.totalXP.toLocaleString()}</td>

            <td>⭐ ${level}</td>

            <td>${badge}</td>

        </tr>

        `;

    });

}
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
loadLeaderboard();