import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Vimeo.Player(iframe);
const STORAGE_TIME_KEY = 'videoplayer-current-time';

onPageLoad();

iframePlayer.on('timeupdate', throttle(updateTimeStorage, 1000));

function onPageLoad() {
  const time = localStorage.getItem(STORAGE_TIME_KEY);
  if (time) {
    iframePlayer.setCurrentTime(JSON.parse(time).seconds);
  }
}

function updateTimeStorage(currentTime) {
  localStorage.setItem(STORAGE_TIME_KEY, JSON.stringify(currentTime));
}
