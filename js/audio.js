const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export async function beep(freq, type, volume) {
  const gainNode = audioCtx.createGain();

  gainNode.gain.value = volume; // 0 - 1 (1 is 100% and 0 is 0%)
  gainNode.connect(audioCtx.destination);
  const oscillator = audioCtx.createOscillator();
  oscillator.type = type; // sine, square, triangle, sawtooth are the types
  oscillator.frequency.value = freq;

  oscillator.connect(gainNode);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.01); // play for 0.1 seconds
}
