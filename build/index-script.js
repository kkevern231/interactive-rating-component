function selected(rating) {
  console.log(rating);
  scoreMessage = "You selected " + rating + " out of 5";

  passParam();

  //This could be its own function
  for (let i = 1; i < 6; i++) {
    if (i != rating)
      //if rating != value, set reset the theme
      switch (i) {
        case 1:
          rate1 = document.getElementById("1");
          rate1.classList.remove("bg-oggy");
          rate1.classList.remove("text-white");
          break;

        case 2:
          rate2 = document.getElementById("2");
          rate2.classList.remove("bg-oggy");
          rate2.classList.remove("text-white");
          break;

        case 3:
          rate3 = document.getElementById("3");
          rate3.classList.remove("bg-oggy");
          rate3.classList.remove("text-white");
          break;

        case 4:
          rate4 = document.getElementById("4");
          rate4.classList.remove("bg-oggy");
          rate4.classList.remove("text-white");
          break;

        case 5:
          rate5 = document.getElementById("5");
          rate5.classList.remove("bg-oggy");
          rate5.classList.remove("text-white");
          break;
      }
    else {
      continue;
    }
  }

  //const scoreSelectedElement = document.getElementById("scoreSelected");
  //scoreSelectedElement.textContent = scoreMessage;
  switch (
    rating //rating = selected number
  ) {
    case 1:
      rate1 = document.getElementById("1"); //create variable to work with
      toggle(rate1); //pass element variable to toggle function
      break;

    case 2:
      rate2 = document.getElementById("2");
      toggle(rate2);
      break;

    case 3:
      rate3 = document.getElementById("3");
      toggle(rate3);
      break;

    case 4:
      rate4 = document.getElementById("4");
      toggle(rate4);
      break;

    case 5:
      rate5 = document.getElementById("5");
      toggle(rate5);
      break;
  }
}

function passParam() {
  //Variable to pass is global variable scoreMessage

  //URL Parameters
  var para = new URLSearchParams();
  para.append("message", scoreMessage);

  //GO
  url = "./thank-you.html?" + para.toString();
  //location.href = url;
}

function submit() {
  window.location.href = url;
}

function toggle(rating) {
  //set the new class to the selected button.

  //rating.classList.toggle("bg-medium-grey");
  rating.classList.toggle("bg-oggy");
  rating.classList.toggle("text-white");
}
