function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const mins = now.getMinutes().toString().padStart(2, 0);
  const sec = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${mins}:${sec}`;
  document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
