const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  display.textContent = "00:00:00:00";
}

function update() {
  const time = Date.now();
  elapsedTime = time - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, 0);
  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, 0);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, 0);

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
