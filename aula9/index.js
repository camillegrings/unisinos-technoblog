var interval = null;

function startAnimation() {
  interval = setInterval(function() {
    $(".img").animate({opacity: 0.5}, 500);
    $(".img").animate({opacity: 1}, 500);
  }, 1000);
}

function stopAnimation() {
  clearInterval(interval);
  interval = null;
}

$(document).ready(function () {
  $("#animateBtn").click(function() {
    if(interval === null) {
      startAnimation();
      $("#animateBtn").html("Stop");
    }
    else {
      stopAnimation();
      $("#animateBtn").html("Start");
    }
    $("#animateBtn").toggleClass("red");
  })
});
