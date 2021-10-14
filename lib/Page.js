class Page {
    constructor(vsf) {
        this.vsf = vsf;
    }

    async getLastNewsByPage(page) {
        await this.vsf.relocatePage(`lastnews/page/${page}/`)
        const lastNews = await this.vsf.page.evaluate(() => {
            const lastNews = {};
            lastNews.page = page;
            lastNews.url = window.location.href;
            lastNews.animes = [];
            animes = document.querySelectorAll('.movie-poster');
            animes.forEach(anime => {
                const animeInfo = {};
                const info = anime.querySelector('.info');
                animeInfo.title = anime.querySelector('img').alt;
                animeInfo.season = parseInt(anime.querySelector('b').innerText);
                animeInfo.nbEpisode = parseInt(anime.querySelectorAll('b')[1].innerText);
                animeInfo.img = anime.querySelector('img').src;
                animeInfo.url = anime.querySelector('a').href;
                animeInfo.lang = anime.querySelector('.quality').innerText;
                animeInfo.desc = info.querySelector('.desc').textContent;
                animeInfo.genres = [];
                const genres = info.getElementsByClassName('type')[1];
                genres.querySelectorAll('a').forEach(element => {
                    animeInfo.genres.push(element.text);
                });
                lastNews.animes.push(animeInfo);
            });
            return lastNews;
        });
        return lastNews;
    }

    async getAnimesByGenreAndPage(Genre, page) {
        await this.vsf.relocatePage(`genre/${Genre}/page/${page}/`)
        const lastNews = await this.vsf.page.evaluate(() => {
            const lastNews = {};
            lastNews.page = page;
            lastNews.url = window.location.href;
            lastNews.animes = [];
            animes = document.querySelectorAll('.movie-poster');
            animes.forEach(anime => {
                const animeInfo = {};
                const info = anime.querySelector('.info');
                animeInfo.title = anime.querySelector('img').alt;
                animeInfo.season = parseInt(anime.querySelector('b').innerText);
                animeInfo.nbEpisode = parseInt(anime.querySelectorAll('b')[1].innerText);
                animeInfo.img = anime.querySelector('img').src;
                animeInfo.url = anime.querySelector('a').href;
                animeInfo.lang = anime.querySelector('.quality').innerText;
                animeInfo.desc = info.querySelector('.desc').textContent;
                animeInfo.genres = [];
                const genres = info.getElementsByClassName('type')[1];
                genres.querySelectorAll('a').forEach(element => {
                    animeInfo.genres.push(element.text);
                });
                lastNews.animes.push(animeInfo);
            });
            return lastNews;
        });
        return lastNews;
    }
}

module.exports = Page;