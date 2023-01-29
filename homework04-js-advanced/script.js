$(document).ready(function () {
  document.getElementById("fillTable").addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/planets/?page=1",
      success: function (response) {
        console.log("Request successful");
        let responseObject = response.results;
        console.log(responseObject);
        let table = document.getElementsByTagName("table")[0];
        let row = "";
        for (let i = 0; i < responseObject.length; i++) {
          row += `<tr>
          <td> ${i + 1} </th>
          <td> ${responseObject[i].name} </td>
          <td> ${responseObject[i].population} </td>
          <td> ${responseObject[i].climate} </td>
          <td> ${responseObject[i].gravity} </td>
          </tr>`;
        }
        table.innerHTML += row;

        document.getElementsByTagName(
          "body"
        )[0].innerHTML += `<br><button id="nextTen">Next 10</button>`;
      },
      error: function (response) {
        console.log("The request has failed: " + response.status);
      },
    });
  });
});
