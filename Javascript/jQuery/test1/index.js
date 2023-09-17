$("h1").addClass("cool-style");

$(document).keydown(function (event) {
    $("h1").text(event.key);
});