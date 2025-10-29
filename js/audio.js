const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export async function beep(freq, type, volume, time) {
  const gainNode = audioCtx.createGain();

  gainNode.gain.value = volume; // 0 - 1 (1 is 100% and 0 is 0%)
  gainNode.connect(audioCtx.destination);
  const oscillator = audioCtx.createOscillator();
  oscillator.type = type; // sine, square, triangle, sawtooth are the types
  oscillator.frequency.value = freq;

  oscillator.connect(gainNode);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + time);
}

export function playDiceRoll() {
  for (let i = 0; i < 10; i++) {
    const freq = 600 + Math.random() * 600; // 600–1200 Hz
    const duration = 0.05; // 50 ms
    beep(freq, "square", 0.1, duration);
  }
}