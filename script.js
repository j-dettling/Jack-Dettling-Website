$(document).ready(function() {
  console.log("!");

  $(".img-list img").on("click", function() {
    var src = $(this).attr("src");

    $(".lightbox-img").attr("src", src);

    $(".lightbox").addClass("show");
  });

  $(".lightbox").on("click", function() {
    $(".lightbox").removeClass("show");
  });
});
