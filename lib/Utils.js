class Utils {
    constructor() {}

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

module.exports = Utils;