$(function() {
  var single1 = document.getElementById("single1-img");
  var single2 = document.getElementById("single2-img");
  var couple1 = document.getElementById("couple1-img");
  var couple2 = document.getElementById("couple2-img");
  var random1 = document.getElementById("random1-img");
  var random2 = document.getElementById("random2-img");
  var single = document.getElementById("single");
  var couple = document.getElementById("couple");
  var random = document.getElementById("random");
  single.addEventListener("touchstart", function() {
    single2.style.display = "block";
  });
  single.addEventListener("touchend", function() {
    single2.style.display = "none";
  });
  couple.addEventListener("touchstart", function() {
    couple2.style.display = "block";
  });
  couple.addEventListener("touchend", function() {
    couple2.style.display = "none";
  });
  random.addEventListener("touchstart", function() {
    random2.style.display = "block";
  });
  random.addEventListener("touchend", function() {
    random2.style.display = "none";
  });
})