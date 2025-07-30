const catImages = ['cat1.png', 'cat2.png', 'cat3.png'];
let cats = [];

function playSound() {
  const audio = document.getElementById('meow-sound');
  audio.currentTime = 0;
  audio.play();
}

function randomPosition(maxX, maxY) {
  return {
    x: Math.floor(Math.random() * (maxX - 100)),
    y: Math.floor(Math.random() * (maxY - 100))
  };
}

function createCats() {
  const game = document.getElementById('game');
  game.innerHTML = ''; // Clear old cats
  cats = [];

  catImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('cat');
    const pos = randomPosition(1024, 576);
    img.style.left = `${pos.x}px`;
    img.style.top = `${pos.y}px`;
    img.onclick = () => {
      playSound();
      handleFoundCat(img);
    };
    game.appendChild(img);
    cats.push(img);
  });
}

function handleFoundCat(catImg) {
  catImg.remove(); // remove from game
  const found = document.getElementById('found');
  const mini = document.createElement('img');
  mini.src = catImg.src;
  mini.classList.add('found-cat');
  found.appendChild(mini);
}

function resetCats() {
  document.getElementById('found').innerHTML = '<h2>Found Cats</h2>';
  createCats();
}

function swapBackground() {
  const game = document.getElementById('game');
  const current = game.style.backgroundImage;
  game.style.backgroundImage = current.includes('background2.png') 
    ? "url('background.png')" 
    : "url('background2.png')";
}

// Initialize on load
window.onload = createCats;
