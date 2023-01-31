$(document).ready(function () {
  document.getElementById("fillTable").addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/planets/?page=1",
      success: function (response) {
        console.log("Request successful");
        let responseObject = response.results;
        console.log(responseObject);
        let table = document.getElementsByTagName("table")[0];
        let row = `<thead>
        <tr>
          <th>no.</th>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
        </tr>
      </thead>`;
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

        document.getElementById("nextTen").style.display = "block";
        document.getElementsByTagName("table")[0].style.display = "block";
        document.getElementById("fillTable").remove();
      },
      error: function (response) {
        console.log("The request has failed: " + response.status);
      },
    });
  });
});

$(document).ready(function () {
  document.getElementById("nextTen").addEventListener("click", function () {
    $.ajax({
      url: `https://swapi.dev/api/planets/?page=2`,
      success: function (response) {
        console.log("Request successful");
        let responseObject = response.results;
        console.log(responseObject);
        let table = document.getElementsByTagName("table")[0];
        let row = `<thead>
        <tr>
          <th>no.</th>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
        </tr>
      </thead>`;
        for (let i = 0; i < responseObject.length; i++) {
          row += `
          <tr>
          <td> ${i + 11} </th>
          <td> ${responseObject[i].name} </td>
          <td> ${responseObject[i].population} </td>
          <td> ${responseObject[i].climate} </td>
          <td> ${responseObject[i].gravity} </td>
          </tr>`;
        }
        table.innerHTML = row;
        document.getElementById("nextTen").style.display = "none";
        document.getElementById("nextTenTwo").style.display = "block";
        document.getElementById("previousTen").style.display = "block";
      },
      error: function (response) {
        console.log("The request has failed: " + response.status);
      },
    });
  });
});

$(document).ready(function () {
  document.getElementById("previousTen").addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/planets/?page=1",
      success: function (response) {
        console.log("Request successful");
        let responseObject = response.results;
        console.log(responseObject);
        let table = document.getElementsByTagName("table")[0];
        let row = `<thead>
        <tr>
          <th>no.</th>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
        </tr>
      </thead>`;
        for (let i = 0; i < responseObject.length; i++) {
          row += `
          <td> ${i + 1} </th>
          <td> ${responseObject[i].name} </td>
          <td> ${responseObject[i].population} </td>
          <td> ${responseObject[i].climate} </td>
          <td> ${responseObject[i].gravity} </td>
          </tr>`;
        }
        table.innerHTML = row;

        document.getElementById("nextTen").style.display = "block";
        document.getElementById("previousTen").style.display = "none";
        document.getElementById("nextTenTwo").style.display = "none";
      },
      error: function (response) {
        console.log("The request has failed: " + response.status);
      },
    });
  });
});

$(document).ready(function () {
  document.getElementById("nextTenTwo").addEventListener("click", function () {
    $.ajax({
      url: `https://swapi.dev/api/planets/?page=3`,
      success: function (response) {
        console.log("Request successful");
        let responseObject = response.results;
        console.log(responseObject);
        let table = document.getElementsByTagName("table")[0];
        let row = `<thead>
        <tr>
          <th>no.</th>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
        </tr>
      </thead>`;
        for (let i = 0; i < responseObject.length; i++) {
          row += `
          <tr>
          <td> ${i + 21} </th>
          <td> ${responseObject[i].name} </td>
          <td> ${responseObject[i].population} </td>
          <td> ${responseObject[i].climate} </td>
          <td> ${responseObject[i].gravity} </td>
          </tr>`;
        }
        table.innerHTML = row;
        document.getElementById("nextTenTwo").style.display = "none";
        document.getElementById("previousTenTwo").style.display = "block";
        document.getElementById("previousTen").style.display = "none";
      },
      error: function (response) {
        console.log("The request has failed: " + response.status);
      },
    });
  });
});

$(document).ready(function () {
  document
    .getElementById("previousTenTwo")
    .addEventListener("click", function () {
      $.ajax({
        url: "https://swapi.dev/api/planets/?page=2",
        success: function (response) {
          console.log("Request successful");
          let responseObject = response.results;
          console.log(responseObject);
          let table = document.getElementsByTagName("table")[0];
          let row = `<thead>
        <tr>
          <th>no.</th>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
        </tr>
      </thead>`;
          for (let i = 0; i < responseObject.length; i++) {
            row += `
          <td> ${i + 11} </th>
          <td> ${responseObject[i].name} </td>
          <td> ${responseObject[i].population} </td>
          <td> ${responseObject[i].climate} </td>
          <td> ${responseObject[i].gravity} </td>
          </tr>`;
          }
          table.innerHTML = row;

          document.getElementById("nextTenTwo").style.display = "block";
          document.getElementById("previousTen").style.display = "block";
          document.getElementById("previousTenTwo").style.display = "none";
        },
        error: function (response) {
          console.log("The request has failed: " + response.status);
        },
      });
    });
});
