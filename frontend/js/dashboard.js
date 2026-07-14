// ==========================
// DealerVerse Dashboard
// ==========================

let departmentChart = null;

// Animate numbers
function animateValue(id, endValue) {

    let startValue = 0;

    const duration = 1200;

    const increment = Math.ceil(endValue / 100);

    const element = document.getElementById(id);

    const timer = setInterval(() => {

        startValue += increment;

        if (startValue >= endValue) {

            startValue = endValue;

            clearInterval(timer);

        }

        element.innerHTML = startValue.toLocaleString();

    }, duration / 100);

}

// Load Dashboard
async function loadDashboard() {

    try {

        // ---------------- Dashboard Statistics ----------------

        const dashboardResponse = await fetch(
            "http://localhost:5000/api/dashboard"
        );

        const dashboard = await dashboardResponse.json();

        animateValue("employees", dashboard.employees);
        animateValue("events", dashboard.events);
        animateValue("locations", dashboard.locations);
        animateValue("departments", dashboard.departments);

        // ---------------- Department Analytics ----------------

        const analyticsResponse = await fetch(
            "http://localhost:5000/api/analytics/department"
        );

        const analytics = await analyticsResponse.json();

        const labels = analytics.map(item => item._id);

        const values = analytics.map(item => item.count);

        if (departmentChart) {

            departmentChart.destroy();

        }

        const ctx = document
            .getElementById("departmentChart")
            .getContext("2d");

        departmentChart = new Chart(ctx, {

            type: "bar",

            data: {

                labels: labels,

                datasets: [

                    {

                        label: "Department Activities",

                        data: values,

                        backgroundColor: [

                            "#2563EB",
                            "#22C55E",
                            "#F59E0B",
                            "#EF4444",
                            "#8B5CF6",
                            "#06B6D4",
                            "#EC4899",
                            "#14B8A6",
                            "#84CC16"

                        ],

                        borderRadius: 10,

                        borderSkipped: false

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                animation: {

                    duration: 1500

                },

                plugins: {

                    legend: {

                        display: false

                    },

                    tooltip: {

                        backgroundColor: "#1E293B",

                        titleColor: "#fff",

                        bodyColor: "#fff"

                    }

                },

                scales: {

                    x: {

                        grid: {

                            display: false

                        }

                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            precision: 0

                        }

                    }

                }

            }

        });

    }

    catch (error) {

        console.error("Dashboard Error:", error);

        alert("Unable to load dashboard data.");

    }

}
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
// Load page
loadDashboard();