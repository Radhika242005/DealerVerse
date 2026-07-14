async function loadBookings() {

    try {

        const response = await fetch("http://localhost:5000/api/eventlogs");

        const logs = await response.json();

        const tbody = document.getElementById("bookingBody");

        tbody.innerHTML = "";

        logs.forEach(log => {

            tbody.innerHTML += `
                <tr>
                    <td>${log.user_id}</td>
                    <td>${log.username}</td>
                    <td>${log.department}</td>
                    <td>${log.action_code}</td>
                    <td>${log.created_date}</td>
                    <td>${log.location_code}</td>
                </tr>
            `;

        });

    } catch(error){

        console.log(error);

    }

}

loadBookings();