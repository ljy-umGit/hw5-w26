// Global Variable
const video = document.getElementById("player1");

// Basic Controls
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const volumeSlider = document.getElementById("slider");
const volumeTxt = document.getElementById("volume");
const muteBtn = document.getElementById("mute");

// Advanced Controls
const slowerBtn = document.getElementById("slower");
const fasterBtn = document.getElementById("faster");
const skipBtn = document.getElementById("skip");

// Style Controls
const vintageBtn = document.getElementById("vintage");
const origBtn = document.getElementById("orig");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.currentTime = 0;
	video.volume = 1;
	video.volumeSlider.value = 100;
	volumeTxt.textContent = "100%";
	video.playbackRate = 1.0;
	video.controls = false;
});

playBtn.addEventListener("click", function(){
	video.play();
})

pauseBtn.addEventListener("click", function(){
	video.pause();
})

volumeSlider.addEventListener("input", function(){
	video.volume = volumeSlider.value / 100;
	volumeTxt.textContent = volumeSlider.value + "%";
})

slowerBtn.addEventListener("click", function(){
	video.playbackRate -= 0.1;
	console.log(`Playback slowed by 10%, current speed is ${video.playbackRate*100}%`)
})

fasterBtn.addEventListener("click", function(){
	video.playbackRate += 0.1;
	console.log(`Playback accelerated by 10%, current speed is ${video.playbackRate*100}%`)
})

skipBtn.addEventListener("click", function(){
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log(`Current playback location is ${video.currentTime}s`)
})

vintageBtn.addEventListener("click", function(){
	video.classList.add("oldSchool")
})

origBtn.addEventListener("click", function(){
	video.classList.remove("oldSchool")
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

