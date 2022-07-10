const huAudio = document.createElement('img');
huAudio.id = "audioButton";
huAudio.src = "https://cdn.discordapp.com/attachments/981291804202778664/995225977489719366/unknown.png";
huAudio.style.width = "100px";
huAudio.style.position = 'absolute';
huAudio.style.top = '90%';
huAudio.style.left = '53%';
huAudio.style.transform = 'translate(-50%, -50%)';
huAudio.style.cursor = 'pointer';
huAudio.style.zIndex = '5';

document.body.appendChild(huAudio);

const audio = document.createElement('audio');
audio.id = "bgAudio";
audio.src = "https://cdn.discordapp.com/attachments/981291804202778664/995218109789114459/tao.mp3";

var isPlaying = true;
audio.play();

huAudio.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        audio.loop = true;
        isPlaying = true;
    }
})