

function convertingTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  if (hours === 0) {
    if (minutes === 0) {
     return(`${seconds}secound`);
    } else {
      if (seconds === 0) {
       return(`${minutes}minute`);
      } else {
       return(`${minutes}minutes${seconds}secound`);
      }
    }
  } else {
   return(`${hours}hours${minutes}minutes${seconds}secound`);
  }
}

module.exports = convertingTime;