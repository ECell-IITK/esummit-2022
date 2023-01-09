const schedule = [
  {
    start: new Date(2023, 0, 9, 14),
    end: new Date(2023, 0, 9, 23),
    title: "Inaugoration Ceremony",
    description: "",
  },
];

$(document).ready(function () {
  const box = document.querySelector("#san");
  let count = 0;
  schedule.forEach((event) => {
    const now = new Date();
    if (event.start <= now && event.end >= now) {
      let event_div = document.createElement("div");
      event_div.classList.add("event");
      let event_heading = document.createElement("h1");
      event_heading.innerHTML = event.title;
      event_div.appendChild(event_heading);
      box.appendChild(event_div);
      count++;
    }
  });

  console.log(count);

  if (count) {
    var id = "#dialog";
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $("#mask").css({ width: maskWidth, height: maskHeight });
    $("#mask").fadeIn(500);
    $("#mask").fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css("top", winH / 2 - $(id).height() / 2);
    $(id).css("left", winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $(".window .close").click(function (e) {
      e.preventDefault();
      $("#mask").hide();
      $(".window").hide();
    });
    $("#mask").click(function () {
      $(this).hide();
      $(".window").hide();
    });
  }
});
