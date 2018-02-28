const rootNode = document.getElementById(`root`);

function createPage(tanks) {
    const container = document.createElement(`div`);
    container.className = `thumbnails`;
    rootNode.appendChild(container);
    const header = document.createElement(`header`);
    container.appendChild(header);
    const headline = document.createElement(`h1`);
    header.appendChild(headline);
    headline.innerHTML = `Most popular tanks`;
    const main = document.createElement(`main`);
    container.appendChild(main);
    const tanksContainer = document.createElement(`div`);
    main.appendChild(tanksContainer);
    tanksContainer.className = `tanks-container`;
    for (let i = 0; i < tanks.length; i++) {
        const tankThumbnail = document.createElement(`div`);
        tankThumbnail.className = `tank-thumbnail`;
        tanksContainer.appendChild(tankThumbnail);
        const tankImg = document.createElement(`img`);
        tankThumbnail.appendChild(tankImg);
        tankImg.setAttribute(`src`, `${tanks[i].preview}`);
        const aboutTank = document.createElement(`div`);
        tankThumbnail.appendChild(aboutTank);
        const countryFlag = document.createElement(`img`);
        aboutTank.appendChild(countryFlag);
        countryFlag.setAttribute(`src`, `${tanks[i].country_image}`);
        const tankLevel = document.createElement(`span`);
        aboutTank.appendChild(tankLevel);
        tankLevel.innerHTML = `${tanks[i].level}`;
        const tankName = document.createElement(`span`);
        aboutTank.appendChild(tankName);
        tankName.innerHTML = `${tanks[i].model}`;
        //tankThumbnail.addEventListener(`click`, getTankDetails(container));
    }
}
createPage(tanks);