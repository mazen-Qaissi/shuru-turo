var travels = [];
var textKey = ["id", "start_date", "duration", "price", "guide"];
var button0 = ["Delete", "update", "add path", "show path"];
var trip = "";
var content = "<table>";
function getList() {
  let data0;
  $.ajax({
    type: "GET",
    url: "/tours",
    success: function (result) {
      content += "<tr><th>Trip</th>";
      for (let l = 0; l < textKey.length; l++) {
        content += "<th>" + textKey[l] + "</th>";
      }
      content += "<th>Delete</th>";
      content += "<th>update</th>";
      content += "<th>add path</th>";
      content += "<th>show path</th>";
      content += "</tr>";
      for (let index = 0; index < 2; index++) {
        content += "<tr><td>" + result[index].id + "</td>";
        content += "<td>" + result[index].id + "</td>";
        content += "<td>" + result[index].start_date + "</td>";
        content += "<td>" + result[index].duration + "</td>";
        content += "<td>" + result[index].price + "</td>";
        content += "<td>" + result[index].guide.name + "</td>";
        for (let j = 0; j < 4; j++) {
          content += "<td><button>" + button0[j] + "</button></td>";
        }
        content += trip + "</tr>";
      }
      content += "</table>";
      $(".listTable").append(content);
      //   data0 = result;
    },
    error: function (err) {
      console.log("error", err);
    },
  });
}
function printList(data) {
  //   for (key in data) {
  //     travels.push(key);
  //   }
  content += "<tr><th>Trip</th>";
  for (let l = 0; l < textKey.length; l++) {
    content += "<th>" + textKey[l] + "</th>";
  }
  content += "<th>Delete</th>";
  content += "<th>update</th>";
  content += "<th>add path</th>";
  content += "<th>show path</th>";
  content += "</tr>";
  for (let index = 0; index < len(data); index++) {
    content += "<tr><td>" + data[index].id + "</td>";
    for (let j = 0; j < textKey.length; j++) {
      content += "<td>" + data[index].textKey[j] + "</td>";
    }
    for (let j = 0; j < 4; j++) {
      content += "<td><button>" + button0[j] + "</button></td>";
    }
    content += trip + "</tr>";
  }
  content += "</table>";
  $(".listTable").append(content);
}
$(document).ready(function () {
  getList();
});
