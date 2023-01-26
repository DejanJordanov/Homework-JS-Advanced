let titleElem = document.querySelector("#title");
let priorityElem = document.querySelector("#priority");
let colorElem = document.querySelector("#color");
let descriptionText = document.querySelector("#description");
let submitBtn = document.querySelector("#reminder");
let printAll = document.querySelector("#showAll");
let result = document.querySelector("#result");
let reminders = [];

function reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

submitBtn.addEventListener("click", function () {
  reminders.push(
    new reminder(
      titleElem.value,
      priorityElem.value,
      colorElem.value,
      descriptionText.value
    )
  );
  titleElem.value = "";
  priorityElem.value = "---Select priority---";
  colorElem.value = "#000000";
  descriptionText.value = "";
});

printAll.addEventListener("click", function () {
  let table = `<table border="1|1">`;

  for (let i = 0; i < reminders.length; i++) {
    table += "<tr>";
    table += "<td>" + reminders[i].title + "</td>";
    table += "<td>" + reminders[i].priority + "</td>";
    table += "<td>" + reminders[i].description + "</td>";
    table += "</tr>";
  }

  result.innerHTML = table;
});
