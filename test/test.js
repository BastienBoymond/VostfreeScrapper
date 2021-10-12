const fs = require('fs');

const vostFreeScreen = require('../index')

const vost = new vostFreeScreen();

async function main() {
    await vost.initPage();

    await vost.anime.getAnimeById(517).then(res => {
        console.log(res);
    });

    await vost.closePage();
}

main()