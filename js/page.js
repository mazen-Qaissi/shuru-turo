var travels = [];
var textKey = ["id", "start_date", "duration", "price", "guide"];
var button0 = ["Delete", "update", "add path", "show path"];
var trip = "";
var content = "<table>";
function getList() {
  let data0;
  $.ajax({
    type: "GET",
    url: "/getTours",
    success: function (result) {
      
      content += "<tr><th>Trip</th>";
      for (let l = 0; l < textKey.length; l++) {
        content += "<th>" + textKey[l] + "</th>";
      }
      let size=Object.keys(result).length;
      content += "<th>Delete</th>";
      content += "<th>update</th>";
      content += "<th>add path</th>";
      content += "<th>show path</th>";
      content += "</tr>";
      for (let index = 0; index < size; index++) {
        content += "<tr><td>" + result[index].id + "</td>";
        content += "<td>" + result[index].id + "</td>";
        content += "<td>" + result[index].start_date + "</td>";
        content += "<td>" + result[index].duration + "</td>";
        content += "<td>" + result[index].price + "</td>";
        content += "<td>" + result[index].guide.name + "</td>";
        for (let j = 0; j < 4; j++) {
          content += "<td><button id = "+'"'+"d"+'"'+">" + button0[j] + "</button></td>";
        }
        content += trip + "</tr>";
      }
      content += "</table>";
      $(".listTable").empty();
      $(".listTable").append(content);
      content="<table>"
    },
    error: function (err) {
      console.log("error", err);
    },
  });
}
function Delete(id) {
  let data0;
  $.ajax({
    type: "DELETE",
    url: "/deleteTour/"+id,
    success: function (result) {
      console.log(result);
    },
    error: function (err) {
      console.log("error", err);
    },
  });
}
$(document).ready(function () {
  getList();
  $("#addTrip").click(function(){
    location.href = "/add_user"
  })
  $("#addTrip1").click(function(){
    location.href = "/add_user"
  })
  $("#d").click(function(){
    // Delete("mazen")
    console.log("j")
  })
});
