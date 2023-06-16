function updateClock() {
  const currentTime = new Date();

  const secondRatio = currentTime.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentTime.getHours()) / 12;

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  function rotateHand(element, rotationRatio) {
    element.style.transform = `translateX(-50%) rotate(${rotationRatio * 360}deg)`;
  }

  rotateHand(secondHand, secondRatio);
  rotateHand(minuteHand, minuteRatio);
  rotateHand(hourHand, hourRatio);
}

updateClock();
setInterval(updateClock, 1000);
