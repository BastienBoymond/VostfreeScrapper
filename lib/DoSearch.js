class Search {
    constructor(vsf) {
        this.vsf = vsf;
    }

    async getSearchResults(searchTerm) {
        searchTerm = searchTerm.replace(' ', '+');
        await this.vsf.relocatePage(`/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=${searchTerm}`)
        const searchResults =  await this.vsf.page.evaluate(async () => { 
            const searchResults = {};
            searchResults.url = window.location.href;
            searchResults.anime = [];
            animes = document.querySelectorAll('.search-result');
            animes.forEach(anime => {
                const animeInfo = {};
                animeInfo.title = anime.querySelector('.title').innerText;
                animeInfo.season = parseInt(anime.querySelector('b').innerText);
                animeInfo.nbEpisode = parseInt(anime.querySelectorAll('b')[1].innerText);
                animeInfo.img = anime.querySelector('img').src;
                animeInfo.url = anime.querySelector('a').href;
                animeInfo.lang = anime.querySelector('.quality').innerText;
                animeInfo.desc = anime.querySelector('.desc').innerText;
                animeInfo.genres = [];
                const genres = document.getElementsByClassName('type')[0];
                genres.querySelectorAll('a').forEach(element => {
                animeInfo.genres.push(element.innerText);
                });
                searchResults.anime.push(animeInfo);
            });
            return searchResults;
        });
        return searchResults;
    }
}

module.exports = Search;