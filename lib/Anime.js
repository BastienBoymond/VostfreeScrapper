class Anime {
    constructor(vsf) {
        this.vsf = vsf;
    }

    async getAnimeById(animeId) {
        await this.vsf.relocatePage(`${animeId}-ddl-streaming-1fichier-uptobox.html`)
        const anime = await this.vsf.page.evaluate(() => {
            const anime = {};
            anime.url = document.location.href;
            anime.title = document.querySelector('h1').innerText;
            anime.description = document.getElementsByName('description')[0].content;
            anime.image =  document.getElementsByClassName('image-bg')[0].style.backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, '');
            anime.nbepisodes = parseInt(document.getElementsByClassName('year')[0].innerText.replace('Episode ', ''));
            anime.genres = [];
            const genres = document.getElementsByClassName('right')[0];
            genres.querySelectorAll('a').forEach(element => {
                anime.genres.push(element.innerText);
            });
            return anime;
        });
        return anime;
    }
}

module.exports = Anime;