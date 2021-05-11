$(document).ready(function () {
  // process the form
  $("#Tour_form").submit(function (event) {
    if (!$("#Tour_form").valid()) return;

    console.log("in submit");
    // process the form
    $.ajax({
      type: "POST", // define the type of HTTP verb we want to use (POST for our form)
      url: "/createTour", // the url where we want to POST
      contentType:'application/json',
      data: JSON.stringify({
        id: $("#id_field").val(),
        start_date: $("#date_field").val(),
        duration: $("#duration_field").val(),
        price: $("#price_field").val(),
        guide: {
          name: $("#name_field").val(),
          email: $("#email_field").val(),
          cellular: $("#tel_field").val()
        },
      }),
      processData: false,
      // dataType: 'json', // what type of data do we expect back from the server
      encode: true,
      success: function (data, textStatus, jQxhr) {
        console.log(data);
        location.href = "/main";
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      },
    });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}
  );
});
