const winner = data[0];

container.innerHTML += `
<div class="quest-card">

<h1>🏆 Winning Department</h1>

<h2>${winner.department}</h2>

<h3>${winner.xp} XP</h3>

</div>
`;
async function loadDepartments() {

    const response = await fetch("http://localhost:5000/api/departments");

    const data = await response.json();

    const container = document.getElementById("departmentContainer");

    container.innerHTML = "";

    data.forEach((dept, index) => {

        container.innerHTML += `

        <div class="quest-card">

            let icon = "🏢";

if(dept.department === "SALES")
    icon = "🚗";

if(dept.department === "ACCOUNTS")
    icon = "💰";

if(dept.department === "FINANCE")
    icon = "🏦";

            <h2>${icon} ${dept.department}</h2>
            <h3>Total XP : ${dept.xp}</h3>

            <progress value="${dept.xp}" max="${data[0].xp}" style="width:100%;height:25px;"></progress>

        </div>

        `;

    });

}

loadDepartments();