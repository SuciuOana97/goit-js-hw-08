import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = throttle(function (data) {
  console.log(data);
  const currentTimeVideo = data.seconds;
  console.log(currentTimeVideo);
  localStorage.setItem('videoplayer-current-time', currentTimeVideo);
}, 1000);

player.on('timeupdate', onPlay);

const newStartTime = localStorage.getItem('videoplayer-current-time');
console.log(newStartTime);

player
  .setCurrentTime(newStartTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the videos duration
        break;
      default:
        // some other error occurred
        break;
    }
  });
