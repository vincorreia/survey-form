function changeText() {
  const ratingTextDeployParagraph = document.getElementById("rating-text");

  const ratingRange = document.getElementById("number");
  var ratingNumber = ratingRange.value;
  var ratingText = "";

  if (ratingNumber == "3") {
    ratingText = "Basic";
  } else if (ratingNumber == "4") {
    ratingText = "Good";
  } else if (ratingNumber == "5") {
    ratingText = "Excellent";
  } else if (ratingNumber == "2") {
    ratingText = "Bad";
  } else if (ratingNumber == "1") {
    ratingText = "Terrible";
  } else {
    ratingText = "invalid";
  }
  ratingTextDeployParagraph.innerHTML = ratingText;
}

changeText();