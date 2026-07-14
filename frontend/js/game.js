// Load employee from localStorage

let employee = JSON.parse(localStorage.getItem("employee"));

if (!employee) {

    employee = {

        name: "Radhika",

        department: "Sales",

        xp: 250,

        coins: 100,

        level: 3,

        bookings: 2

    };

    saveEmployee();

}

function saveEmployee() {

    localStorage.setItem("employee", JSON.stringify(employee));

}

function getEmployee() {

    return employee;

}

function addXP(points) {

    employee.xp += points;

    employee.coins += Math.floor(points / 2);

    employee.level = Math.floor(employee.xp / 100) + 1;

    saveEmployee();

}