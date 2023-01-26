$(document).ready(function () {
  let callBtn = document.getElementById("btn");
  let printName = document.getElementById("name");
  let printTable = document.getElementById("stats");
  callBtn.addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/people/1",
      success: function (response) {
        console.log("Request successful");
        printName.innerText = `${response.name}`;
        printTable.innerHTML += `<table border="1|1"><thead><tr><th>Height</th><th>Weight</th><th>Eye Color</th><th>Hair Color</th></tr></thead><tr><th>${response.height} cm</th><th>${response.mass} kg</th><th>${response.eye_color}</th><th>${response.hair_color}</th></tr></table>`;
      },
      error: function (response) {
        console.log("Error request");
      },
    });
  });
});
