const fs = require('fs');

const vostFreeScreen = require('../index')

const vost = new vostFreeScreen();

async function main() {
    await vost.initPage();

    // await vost.anime.getAnimeById(616).then(res => {
    //     console.log(res);
    // });

    // await vost.search.getSearchResults('Kimetsu no yaiba').then(res => {
    //     console.log(res);
    // });

    // await vost.anime.getAnimeByUrl('https://vostfree.tv/1078-shin-no-nakama-janai-vostfr-ddl-streaming-1fichier-uptobox.html').then(res => {
    //     console.log(res);
    // });
    
    // await vost.pageSearch.getLastNewsByPage(2).then(res => {
    //     console.log(res);

    // });

    // await vost.pageSearch.getAnimesByGenreAndPage('Action', 1).then(res => {
    //     console.log(res);
    // });

    await vost.closePage();
}

main()