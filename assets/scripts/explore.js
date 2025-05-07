// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImg = document.querySelector('#explore img');
  const textarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');

  let voices = [];

  // Voice Dropdown
  function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [default]' : ''}`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  // Talk button
  talkButton.addEventListener('click', function() {
    const text = textarea.value;
    const voiceIdx = voiceSelect.value;
    if (!text || voiceIdx === 'select' || !voices[voiceIdx]) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = voices[voiceIdx];
    // Change Face
    utter.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Smiling open mouth';
    };
    utter.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'Smiling face';
    };
    window.speechSynthesis.speak(utter);
  });
}