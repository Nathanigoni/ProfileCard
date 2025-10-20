// Display current time in milliseconds
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update immediately and every second
updateTime();
setInterval(updateTime, 1000);

