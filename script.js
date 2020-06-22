const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

const run_the_clock = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  console.log(hour + 'm' + minute + 's ' + second);

  let hourPosition = (hour * 360) / 12 + (minute * 360) / 60 / 12;
  let minutePosition = (minute * 360) / 60 + (second * 360) / 60 / 60;
  let secondPosition = (second * 360) / 60;

  //console.log(hourPosition + 'm' + minutePosition + 's ' + secondPosition);

  hourHand.style.transform = 'rotate(' + hourPosition + 'deg)';
  minuteHand.style.transform = 'rotate(' + minutePosition + 'deg)';
  secondHand.style.transform = 'rotate(' + secondPosition + 'deg)';
};

var interval = setInterval(run_the_clock, 1000);
