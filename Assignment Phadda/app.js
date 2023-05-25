var character1 = document.querySelector('.char1');
var character2 = document.querySelector('.char2');

var character1X = 0;
var character2X = 0;
var stepSize = 10;
var originalImage1 = character1.src;
var originalImage2 = character2.src;

document.addEventListener('keydown', function(event) {
  var key = event.keyCode;

  if (key === 65 || key === 97) { // A or a
    character1X -= stepSize;
    character1.style.transform = 'translateX(' + character1X + 'px)';
  } else if (key === 68 || key === 100) { // D or d
    character1X += stepSize;
    character1.style.transform = 'translateX(' + character1X + 'px)';
  } else if (key === 37) { // Left arrow key
    character2X -= stepSize;
    character2.style.transform = 'translateX(' + character2X + 'px)';
  } else if (key === 39) { // Right arrow key
    character2X += stepSize;
    character2.style.transform = 'translateX(' + character2X + 'px)';
  } else if (key === 87) { // W key
    character1.src = 'powerA.gif';
    character1.style.height = '270px';
    setTimeout(function() {
      character1.src = originalImage1;
      character1.style.height = '200px';
    }, 2000); // Revert back after 2 seconds
  } else if (key === 38) { // Up arrow key
    character2.src = 'powerB.gif';
    character2.style.height = '270px';
    setTimeout(function() {
      character2.src = originalImage2;
      character2.style.height = '200px';
    }, 2000); // Revert back after 2 seconds
  }

  event.preventDefault(); // Prevent default browser behavior
});
