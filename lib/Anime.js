class Anime {
    constructor(vsf) {
        this.vsf = vsf;
    }

    async getAnimeById(animeId) {
        await this.vsf.relocatePage(`${animeId}-ddl-streaming-1fichier-uptobox.html`)
        await this.vsf.page.exposeFunction('getLecteur', this.getLecteur);
        const anime = await this.vsf.page.evaluate(async () => {
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

    getLecteur(meth, id) {
        if (meth == "new_player_myvi") {
            return 'https://myvi.ru/player/embed/html/'+id
        } else if (meth == "new_player_vip") {
            return id

        } else if (meth == "new_player_gtv") {
            return "https://iframedream.com/embed/"+id+".html"

        } else if (meth == "new_player_mp4") {
            return "https://www.mp4upload.com/embed-"+id+".html"

        } else if (meth == "new_player_uqload") {
            return "https://uqload.com/embed-"+id+".html"

        } else if (meth == "new_player_vidfast") {
            return "http://vosmanga.tk/watch/"+id

        } else if (meth == "new_player_verystream") {
            return "https://verystream.com/e/"+id

        } else if (meth == "new_player_rapids") {
            return "https://rapidstream.co/embed-"+id+".html"

        } else if (meth == "new_player_cloudvideo") {
            return "https://cloudvideo.tv/embed-"+id+".html"

        } else if (meth == "new_player_mytv") {
            return "https://www.myvi.xyz/embed/"+id

        } else if (meth == "new_player_uptostream") {
            return "https://uptostream.com/iframe/"+id

        } else if (meth == "new_player_fembed") {
            return "https://www.fembed.com/v/"+id+".html"

        } else if (meth == "new_player_rapidvideo") {
            return "https://www.rapidvideo.com/e/"+id

        } else if (meth == "new_player_tune") {
            return "https://tune.pk/player/embed_player.php?vid="+id

        } else if (meth == "new_player_sibnet") {
            return "https://video.sibnet.ru/shell.php?videoid="+id

        } else if (meth == "new_player_netu") {
            return "https://waaw.tv/watch_video.php?v="+id

        } else if (meth == "new_player_rutube") {
            return "https://rutube.ru/play/embed/"+id

        } else if (meth == "new_player_yandex") {
            return id

        } else if (meth == "new_player_ok") {
            return 'https://www.ok.ru/videoembed/'+id

        } else if (meth == "new_player_vid") {
            return id

        } else if (meth == "new_player_cloudy") {
            return id

        } else if (meth == "new_player_google") {
            return 'https://drive.google.com/open?id='+id

        } else if (meth == "new_player_youtube") {
            return id

        } else if (meth == "new_player_moevideo") {
            return id

        } else if (meth == "new_player_mail") {
            return "https://videoapi.my.mail.ru/videos/embed/mail/"+id

        } else if (meth == "new_player_mail2") {
            return "https://my.mail.ru/video/embed/"+id

        } else if (meth == "new_player_vk2") {
            return id

        } else if (meth == "new_player_dailymotion") {
            return "https://dailymotion.com/embed/video/"+id

        } else if (meth == "new_player_openload") {
            return "https://openload.co/embed/"+id

        } else if (meth == "new_player_kaztube") {
            return "https://kaztube.kz/video/embed/"+id

        } else {
            return id
        }
    }
}

module.exports = Anime;