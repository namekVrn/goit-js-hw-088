import throttle from 'lodash.throttle'

console.log(throttle)
const iframe = document.querySelector('.vimeo');
const player = new Vimeo.Player(iframe);
let localStore = Math.floor(localStorage.getItem("videoplayer-current-time") || 0 )
console.log(localStore)
player.setCurrentTime(localStore);
player.on('timeupdate', throttle(function(data){
    console.log(data.seconds)
    localStorage.setItem("videoplayer-current-time", data.seconds)
}, 2000))


