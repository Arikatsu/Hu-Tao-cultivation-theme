const huBg = document.createElement('video');

huBg.id = "bgVideo";
huBg.src = 'https://cdn.discordapp.com/attachments/991102367636402207/995637067235205161/hu-tao-genshin-impact-desktop-wallpaperwaifu.com.webm';
huBg.poster = "https://cdn.discordapp.com/attachments/981291804202778664/995639289406816295/unknown.png";
huBg.autoplay = true;
huBg.loop = true;
huBg.muted = true;
huBg.controls = false;
huBg.style.minHeight = '100%';
huBg.style.minWidth = '100%';
huBg.style.zIndex = '0';

document.querySelector('.App').appendChild(huBg);  

window.addEventListener('resize', resize, false);

huBg.height = 100; 
resize();

function resize() {
var videoRatio = huBg.height / huBg.width;
var windowRatio = window.innerHeight / window.innerWidth; 

    if (windowRatio < videoRatio) {
        if (window.innerHeight > 50) { 
            huBg.height = window.innerHeight;
        } else {
            huBg.height = 50;
    }
    } else {
        huBg.width = window.innerWidth;
    }

};