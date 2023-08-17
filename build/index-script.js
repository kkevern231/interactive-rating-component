function selected(rating) {
  console.log(rating);
  scoreMessage = "You selected " + rating + " out of 5";

  passParam();

  //const scoreSelectedElement = document.getElementById("scoreSelected");
  //scoreSelectedElement.textContent = scoreMessage;
  switch (rating) {
    case 1:
      const rate1 = document.getElementById("1");
      rate1.classList.toggle("bg-medium-grey");
      rate1.classList.toggle("bg-oggy");
      rate1.classList.toggle("text-white");
      break;

    case 2:
      const rate2 = document.getElementById("2");
      rate2.classList.toggle("bg-medium-grey");
      rate2.classList.toggle("bg-oggy");
      rate2.classList.toggle("text-white");
      break;

    case 3:
      const rate3 = document.getElementById("3");
      rate3.classList.toggle("bg-medium-grey");
      rate3.classList.toggle("bg-oggy");
      rate3.classList.toggle("text-white");
      break;

    case 4:
      const rate4 = document.getElementById("4");
      rate4.classList.toggle("bg-medium-grey");
      rate4.classList.toggle("bg-oggy");
      rate4.classList.toggle("text-white");
      break;

    case 5:
      const rate5 = document.getElementById("5");
      rate5.classList.toggle("bg-medium-grey");
      rate5.classList.toggle("bg-oggy");
      rate5.classList.toggle("text-white");
      break;

    //"pop" array slot that is != to rating
    //Then loop function to reset classes.
  }
}
function submit() {
  window.location.href = "./thank-you.html";
}

function passParam() {
  //Variable to pass is global variable scoreMessage

  //URL Parameters
  var para = new URLSearchParams();
  para.append("message", scoreMessage);

  //GO
  var url = "./thank-you.html?" + para.toString();
  location.href = url;
}
