// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function getDate() {
    var d = new Date();
    // Months in JavaScript are 0-indexed.
    // So to avoid being off by 1, we add one to the result.
    var currentMonth = d.getMonth() + 1;

    document.getElementById("date").innerHTML = currentMonth + '/' + d.getDate() + '/' + d.getFullYear();
}