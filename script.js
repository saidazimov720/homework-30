document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', playSound);
  });

  function playSound(e) {
    const clickedSquare = e.target;
    const soundId = clickedSquare.getAttribute('data-sound');
    const sound = document.getElementById(soundId);
  
    if (sound) {
      sound.play();
    } else {
      document.getElementById('error-sound').play();
    }
  }
  setInterval(() => {
    document.querySelectorAll('.square').forEach(square => {
      square.style.backgroundColor = getRandomColor();
    });
  }, 1000);