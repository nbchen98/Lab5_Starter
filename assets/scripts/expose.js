// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti()

  // Map horn values
  const hornAssets = {
    'air-horn': {
      img: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3',
    },
    'car-horn': {
      img: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3',
    },
    'party-horn': {
      img: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3',
    }
  };

  // Horn selection
  hornSelect.addEventListener('change', function() {
    const selected = hornSelect.value;
    if (hornAssets[selected]) {
      hornImage.src = hornAssets[selected].img;
      hornImage.alt = selected.replace('-', ' ') + ' image';
      audio.src = hornAssets[selected].audio;
    } else {
      hornImage.src = 'assets/images/no-image.png';
      hornImage.alt = 'No image selected';
      audio.src = '';
    }
  });

  // Volume slider
  volumeSlider.addEventListener('input', function() {
    const vol = Number(volumeSlider.value);
    audio.volume = vol / 100;
    let icon = 'assets/icons/volume-level-';
    if (vol === 0) {
      icon += '0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      icon += '1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      icon += '2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      icon += '3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
    volumeIcon.src = icon;
  });

  // Play button
  
  playButton.addEventListener('click', function() {
    if (!audio.src) return;
    audio.currentTime = 0;
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}