// =========================================
// DealerVerse Booking Management
// =========================================

let allLogs = [];

// ---------------------------
// Load Event Logs
// ---------------------------

async function loadBookings() {

    try {

        const response = await fetch("http://localhost:5000/api/eventlogs");

        if (!response.ok) {
            throw new Error("Unable to fetch event logs");
        }

        allLogs = await response.json();

        displayBookings(allLogs);

    } catch (error) {

      console.error("Error:", error);

showToast("❌ Failed to load booking data", "error");

document.getElementById("bookingBody").innerHTML = `
<tr>
    <td colspan="6" style="color:red;font-weight:bold;">
        Failed to load booking data.
    </td>
</tr>
`;

    }

}

// ---------------------------
// Display Logs
// ---------------------------

function displayBookings(logs) {

    const tbody = document.getElementById("bookingBody");

    tbody.innerHTML = "";

    if (logs.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="6">
                    No records found.
                </td>
            </tr>
        `;

        return;

    }

    logs.forEach(log => {

        let statusClass = "booking-created";

        if (log.action_code === "DISCOUNT_APPROVED")
            statusClass = "discount-approved";

        else if (log.action_code === "CREDIT_APPROVED")
            statusClass = "credit-approved";

        else if (log.action_code.includes("CANCEL"))
            statusClass = "cancelled";

        const formattedDate = new Date(log.created_date)
            .toLocaleString();

        tbody.innerHTML += `

        <tr>

            <td>${log.user_id}</td>

            <td>${log.username}</td>

            <td>${log.department}</td>

            <td>

                <span class="status ${statusClass}">

                    ${log.action_code.replaceAll("_", " ")}

                </span>

            </td>

            <td>${formattedDate}</td>

            <td>${log.location_code}</td>

        </tr>

        `;

    });

}

// ---------------------------
// Combined Filters
// ---------------------------

function applyFilters() {

    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const department = document
        .getElementById("departmentFilter")
        .value;

    const filteredLogs = allLogs.filter(log => {

        const matchesSearch =

            log.username.toLowerCase().includes(keyword) ||

            log.user_id.toLowerCase().includes(keyword);

        const matchesDepartment =

            department === "" ||

            log.department === department;

        return matchesSearch && matchesDepartment;

    });

    displayBookings(filteredLogs);

}

// ---------------------------
// Event Listeners
// ---------------------------

document
    .getElementById("searchInput")
    .addEventListener("keyup", applyFilters);

document
    .getElementById("departmentFilter")
    .addEventListener("change", applyFilters);

// ---------------------------
// Initialize
// ---------------------------
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
loadBookings();