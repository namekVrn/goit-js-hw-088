import throttle from 'lodash.throttle'
import {setLocalStorage} from './module/jsonParceWhereStorage '
console.log(throttle)
const iframe = document.querySelector('.vimeo');
const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem("feedback-form-state"));
player.on('timeupdate', throttle(function(data){
    console.log(data.seconds)
    localStorage.setItem("feedback-form-state", data.seconds)
}, 1000))


