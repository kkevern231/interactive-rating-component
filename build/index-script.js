function selected(rating) {
  console.log(rating);
  scoreMessage = "You selected " + rating + " out of 5";

  passParam();

  //const scoreSelectedElement = document.getElementById("scoreSelected");
  //scoreSelectedElement.textContent = scoreMessage;
  switch (rating) {
    case 1:
      rate1 = document.getElementById("1");
      toggle(rate1);
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
  //"pop" array slot that is != to rating
  //Then loop function to reset classes.

  // let array = [rate1, rate2, rate3, rate4, rate5];

  // for (let i = 0; i < 5; i++) {
  //   array[i] = rating.classList.toggle("bg-medium-grey");
  // }

  rating.classList.toggle("bg-medium-grey");
  rating.classList.toggle("bg-oggy");
  rating.classList.toggle("text-white");
}
