const utils = require('./utils.js');

class Anime {
    constructor(vsf) {
        this.utils = new utils();
        this.vsf = vsf;
    }

    async getAnimeByUrl(animeUrl) {
        animeUrl = animeUrl.replace('https://vostfree.tv/', '');
        await this.vsf.relocatePage(animeUrl);
        if (!this.vsf.page._pageBindings.get('getLecteur')) {
            await this.vsf.page.exposeFunction('getLecteur', this.utils.getLecteur);
        }
        const anime = await this.vsf.page.evaluate(async () => {
            const anime = {};
            anime.url = document.location.href;
            anime.title = document.querySelector('h1').innerText;
            anime.description = document.getElementsByName('description')[0].content;
            const image =  document.querySelector('.slide-poster')
            anime.image = image.querySelectorAll('img')[0].src
            anime.nbepisodes = parseInt(document.getElementsByClassName('year')[0].innerText.replace('Episode ', ''));
            anime.genres = [];
            const genres = document.getElementsByClassName('right')[0];
            genres.querySelectorAll('a').forEach(element => {
                anime.genres.push(element.innerText);
            });
            FinalPlayer = [];
            const allPlayer = document.querySelectorAll('.player_box');
            for (const element of allPlayer) {
                let player = element.id.replace('content_', '');
                const stream = document.getElementById(player);
                if (stream) {
                    const meth = stream.className;    
                    const id = element.textContent;
                    const link = await getLecteur(meth, id);
                    FinalPlayer.push({player:player, link: link});
                }
            }
            anime.episodes = [];
            const button = document.querySelectorAll('.button_box');
            button.forEach(element => {
                const id = element.id.replace('buttons_', '');
                const data = element.querySelectorAll('div');
                let link = [];
                data.forEach(elem => {
                    for (const player of FinalPlayer) {
                        if (elem.id === player.player) {
                            link.push(player.link);
                        }
                    }
                });
                anime.episodes.push({id: id, link: link});
            });

            return anime;
        });
        return anime;
    }

    async getAnimeById(animeId) {
        await this.vsf.relocatePage(`${animeId}-ddl-streaming-1fichier-uptobox.html`)
        await this.vsf.page.exposeFunction('getLecteur', this.utils.getLecteur);
        const anime = await this.vsf.page.evaluate(async () => {
            const anime = {};
            anime.url = document.location.href;
            anime.title = document.querySelector('h1').innerText;
            anime.description = document.getElementsByName('description')[0].content;
            const image =  document.querySelector('.slide-poster')
            anime.image = image.querySelectorAll('img')[0].src
            anime.nbepisodes = parseInt(document.getElementsByClassName('year')[0].innerText.replace('Episode ', ''));
            anime.genres = [];
            const genres = document.getElementsByClassName('right')[0];
            genres.querySelectorAll('a').forEach(element => {
                anime.genres.push(element.innerText);
            });
            FinalPlayer = [];
            const allPlayer = document.querySelectorAll('.player_box');
            for (const element of allPlayer) {
                let player = element.id.replace('content_', '');
                const stream = document.getElementById(player);
                if (stream) {
                    const meth = stream.className;    
                    const id = element.textContent;
                    const link = await getLecteur(meth, id);
                    FinalPlayer.push({player:player, link: link});
                }
            }
            anime.episodes = [];
            const button = document.querySelectorAll('.button_box');
            button.forEach(element => {
                const id = element.id.replace('buttons_', '');
                const data = element.querySelectorAll('div');
                let link = [];
                data.forEach(elem => {
                    for (const player of FinalPlayer) {
                        if (elem.id === player.player) {
                            link.push(player.link);
                        }
                    }
                });
                anime.episodes.push({id: id, link: link});
            });

            return anime;
        });
        return anime;
    }
}

module.exports = Anime;