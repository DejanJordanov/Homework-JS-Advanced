//TASK 1

$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function (response) {
      console.log("TASK 1");
      let responseObject = JSON.parse(response);
      averageGradeArray = [];
      for (let i = 0; i < responseObject.length; i++) {
        if (responseObject[i].averageGrade > 3) {
          averageGradeArray.push(" " + responseObject[i].firstName);
        }
      }
      console.log(
        `All students with an average grade higher than 3:${averageGradeArray}`
      );
    },
    error: function (response) {
      console.log("The request has failed: " + response.status);
    },
  });
});

//TASK 2

$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function (response) {
      console.log("TASK 2");
      let responseObject = JSON.parse(response);
      averageFemaleGradeArray = [];
      for (let i = 0; i < responseObject.length; i++) {
        if (
          responseObject[i].gender === "Female" &&
          responseObject[i].averageGrade === 5
        ) {
          averageFemaleGradeArray.push(" " + responseObject[i].firstName);
        }
      }
      console.log(
        `All female student names with an average grade of 5: ${averageFemaleGradeArray}`
      );
    },
    error: function (response) {
      console.log("The request has failed: " + response.status);
    },
  });
});

//TASK 3

$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function (response) {
      console.log("TASK 3");
      let responseObject = JSON.parse(response);
      averageMaleGradeArray = [];
      for (let i = 0; i < responseObject.length; i++) {
        if (
          responseObject[i].city === "Skopje" &&
          responseObject[i].age > 18 &&
          responseObject[i].gender === "Male"
        ) {
          averageMaleGradeArray.push(
            " " + responseObject[i].firstName + " " + responseObject[i].lastName
          );
        }
      }
      console.log(
        `All male student full names who live in Skopje and are over 18 years old: ` +
          averageMaleGradeArray
      );
    },
    error: function (response) {
      console.log("The request has failed: " + response.status);
    },
  });
});

//TASK 4

$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function (response) {
      console.log("TASK 4");
      let responseObject = JSON.parse(response);
      sumAverageGradeArray = [];
      for (let i = 0; i < responseObject.length; i++) {
        if (
          responseObject[i].age > 24 &&
          responseObject[i].gender === "Female"
        ) {
          sumAverageGradeArray.push(responseObject[i].averageGrade);
        }
      }
      let sumReduce = sumAverageGradeArray.reduce(
        (total, number) => (total += number)
      );
      console.log(
        `The average grades of all female students over the age of 24 is ${
          sumReduce / sumAverageGradeArray.length
        }`
      );
    },
    error: function (response) {
      console.log("The request has failed: " + response.status);
    },
  });
});

//TASK 5

$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function (response) {
      console.log("TASK 5");
      let responseObject = JSON.parse(response);
      studentsB = [];
      for (let i = 0; i < responseObject.length; i++) {
        if (
          responseObject[i].gender === "Male" &&
          responseObject[i].firstName[0] === "B" &&
          responseObject[i].averageGrade > 2
        ) {
          studentsB.push(
            " " + responseObject[i].firstName + " " + responseObject[i].lastName
          );
        }
      }
      console.log(
        `All male students with a name starting with B and average grade over 2: ${studentsB}`
      );
    },
    error: function (response) {
      console.log("The request has failed: " + response.status);
    },
  });
});
