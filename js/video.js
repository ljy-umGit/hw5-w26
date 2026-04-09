let video = document.getElementById("player1").querySelector(".video");
let volume = document.getElementById("slider");
let volume_txt = document.getElementById("volume");

const play_btn = document.getElementById("play");
const pause_btn = document.getElementById("pause");
const slower_btn = document.getElementById("slower");
const faster_btn = document.getElementById("faster");
const skip_btn = document.getElementById("skip");
const vintage_btn = document.getElementById("vintage");
const orig_btn = document.getElementById("original");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.currentTime = 0;
	video.volume = 0.5;
	video.defaultplaybackrate = 1.0;
	video.controls = false;
});

play_btn.addEventListener("click", function(){
	video.play();
})

pause_btn.addEventListener("click", function(){
	video.pause();
})

volume.addEventListener("input", function(){
	video.volume = volume.value / 100;
	volume_txt.textContent = volume.value + "%";
})

slower_btn.addEventListener("click", function(){
	video.playbackRate -= 0.1;
	console.log(`Playback slowed by 10%, current speed is ${video.playbackRate*100}%`)
})

faster_btn.addEventListener("click", function(){
	video.playbackRate += 0.1;
	console.log(`Playback accelerated by 10%, current speed is ${video.playbackRate*100}%`)
})

skip_btn.addEventListener("click", function(){
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log(`Current playback location is ${video.currentTime}s`)
})

vintage_btn.addEventListener("click", function(){
	video.classList.add("oldSchool")
})

orig_btn.addEventListener("click", function(){
	video.classList.remove("oldSchool")
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

