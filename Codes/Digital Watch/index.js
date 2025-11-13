function clock() {
  let now = new Date();

  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

 document.getElementsByClassName("screen")[0].innerText = `${hours}:${minutes}:${seconds}`;

}

setInterval(clock, 1000);
clock();
