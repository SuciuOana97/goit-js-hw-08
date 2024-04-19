import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//video element
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
//identify date-seconds from scrolling and logging in localStorage +throttle
const onPlay = throttle(function (data) {
  console.log(data);
  const currentTimeVideo = data.seconds;
  console.log(currentTimeVideo);
  localStorage.setItem('videoplayer-current-time', currentTimeVideo);
}, 1000);

player.on('timeupdate', onPlay);
//retrieving seconds value from localStorage
const newStartTime = localStorage.getItem('videoplayer-current-time');
console.log(newStartTime);
////resuming video playback from the remaining seconds
