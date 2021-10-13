const fs = require('fs');

const vostFreeScreen = require('../index')

const vost = new vostFreeScreen();

async function main() {
    await vost.initPage();

    await vost.anime.getAnimeById(616).then(res => {
        console.log(res);
    });

    await vost.search.getSearchResults('Kaguya-Sama Wa Kokurasetai - Tensai-Tachi No Renai Zunousen').then(res => {
        console.log(res);
    });

    await vost.closePage();
}

main()