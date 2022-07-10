const news = document.querySelector('.NewsSection');
news.style.display = 'block';

const newsButton = document.createElement('img');
newsButton.id = "newsButton";
newsButton.src = "https://cdn.discordapp.com/attachments/991102367636402207/995585976107798558/unknown.png"
newsButton.style.width = "100px";
newsButton.style.position = 'absolute';
newsButton.style.top = '25%';
newsButton.style.left = '5%';
newsButton.style.transform = 'translate(-50%, -50%)';
newsButton.style.cursor = 'pointer';
newsButton.style.zIndex = '5';

document.body.appendChild(newsButton);

var newsDisplay = true;

newsButton.addEventListener('click', () => {
    if (newsDisplay) {
        news.style.display = 'none';
        newsDisplay = false;
    } else {
        news.style.display = 'block';
        newsDisplay = true;
    }
})
