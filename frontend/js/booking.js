let bookings = [];

const stages = [
    "Booking Created",
    "Finance Approved",
    "Invoice Approved",
    "PDI Completed",
    "Delivered"
];

async function loadBookings() {

    try {

        const response = await fetch("http://localhost:5000/api/bookings");

        bookings = await response.json();

        const tbody = document.getElementById("bookingBody");

        tbody.innerHTML = "";

        bookings.forEach((booking, index) => {

            tbody.innerHTML += `

            <tr>

                <td>${booking.bookingId}</td>

                <td>${booking.customer}</td>

                <td>${booking.department}</td>

                <td id="status${index}">${booking.status}</td>

                <td id="xp${index}">${booking.xp}</td>

                <td>

                    <button class="action-btn"

                        onclick="nextStage(${index})">

                        Next Stage

                    </button>

                </td>

            </tr>

            `;

        });

    } catch (error) {

        console.error(error);

    }

}

function nextStage(index){

    let booking = bookings[index];

    let stageIndex = stages.indexOf(booking.status);

    if(stageIndex < stages.length-1){

        booking.status = stages[stageIndex+1];

        booking.xp += 20;

        document.getElementById("status"+index).textContent = booking.status;

        document.getElementById("xp"+index).textContent = booking.xp;

        addXP(20);

        alert("🎉 +" +20+" XP Earned!");

    }

    else{

        alert("🚗 Vehicle Already Delivered");

    }

}

loadBookings();