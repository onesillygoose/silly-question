function changeYesButtonText() {
  document.getElementById('noButton').style.display = 'none';
  document.getElementById('yesButton').style.display = 'none';  
  
  const changePic = document.getElementById('changePic');
  changePic.src = "hug.jpg";
  changePic.className = "sillyWobble";

  document.getElementById('yesYay').textContent = "i knew you would say yes!!!"
}

function changeNoButtonText() {
  const button = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');
  if (button.textContent === 'no') {
    button.textContent = 'no (are you sure?)';
    button.style.padding = '45px';
    button.style.fontSize = '50px';
    yesButton.style.padding = '55px';
    yesButton.style.fontSize = '70px';
  } else if (button.textContent === 'no (are you sure?)') {
    button.textContent = 'no (it would be really cool if you said yes!)';
    button.style.padding = '35px';
    button.style.fontSize = '35px';
    yesButton.style.padding = '65px';
    yesButton.style.fontSize = '80px';
  } else if (button.textContent === 'no (it would be really cool if you said yes!)') {
    button.textContent = 'no (i will be very sad if you say no :()';
    button.style.padding = '25px';
    button.style.fontSize = '25px';
    yesButton.style.padding = '75px';
    yesButton.style.fontSize = '90px';
  } else if (button.textContent === 'no (i will be very sad if you say no :()') {
    button.style.display = 'none';
    yesButton.textContent = 'yes!!!';
    yesButton.style.padding = '100px';
    yesButton.style.fontSize = '120px';
    yesButton.style.boxShadow = '0 0 40px 5px rgb(146, 231, 146)';
  }

}

