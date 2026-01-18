function changeYesButtonText() {
  document.getElementById('noButton').style.display = 'none';
  document.getElementById('yesButton').style.display = 'none';  
  
  const changePic = document.getElementById('changePic');
  changePic.src = "hug.jpg";

  document.getElementById('yesYay').textContent = "i knew you would say yes!!!"
}

function changeNoButtonText() {
  const button = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');
  if (button.textContent === 'no') {
    button.textContent = 'no (are you sure?)';
    button.style.padding = '45px';
    button.style.fontSize = '32px';
    yesButton.style.padding = '55px';
    yesButton.style.fontSize = '45px';
  } else if (button.textContent === 'no (are you sure?)') {
    button.textContent = 'no (it would be really cool if you said yes!)';
    button.style.padding = '35px';
    button.style.fontSize = '24px';
    yesButton.style.padding = '65px';
    yesButton.style.fontSize = '55px';
  } else if (button.textContent === 'no (it would be really cool if you said yes!)') {
    button.textContent = 'no (i will be very sad if you say no :()';
    button.style.padding = '20px';
    button.style.fontSize = '15px';
    yesButton.style.padding = '80px';
    yesButton.style.fontSize = '75px';
  } else if (button.textContent === 'no (i will be very sad if you say no :()') {
    button.style.display = 'none';
    yesButton.textContent = 'yes!!!';
    yesButton.style.padding = '100px';
    yesButton.style.fontSize = '100px';
  }

}  