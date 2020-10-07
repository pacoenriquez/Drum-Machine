const displayText = {
  'Q': 'Heater-1',
  'W': 'Heater-2',
  'E': 'Heater-3',
  'A': 'Heater-4',
  'S': 'Clap',
  'D': 'Open-HH',
  'Z': "Kick-n'-Hat",
  'X': 'Kick',
  'C': 'Closed-HH'
}
function playAudio(letter)  {
  audio = document.getElementById(letter);
  audio.play();
  text = displayText[letter];
  document.getElementById('display').innerHTML = text;
}

function playWithKeyboard(event) {
  var x = event.which || event.keyCode;
  var y = String.fromCharCode(x);
  playAudio(y);
}

document.addEventListener('keydown', playWithKeyboard);
