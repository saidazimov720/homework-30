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

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const mouseTail = document.getElementById('mouse-tail');
  
document.addEventListener('mousemove', (e) => {
  mouseTail.style.left = e.pageX + 'px';
  mouseTail.style.top = e.pageY + 'px';
});