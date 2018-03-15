const rootNode = document.getElementById(`root`);

const createElement = (element, parent, content) => {
  element = document.createElement(element);
  parent.appendChild(element);
  if (content) {
    element.innerHTML = content;
  }
  return element;
};

const createWithTitleEl = (el, parent, titleData) => {
  el = createElement(el, parent);
  el.setAttribute(`title`, titleData);
  return el;
};

const addImgAtrr = (el, srcData, altData) => {
  el.setAttribute(`src`, srcData);
  el.setAttribute(`alt`, altData);
};

const createTanksPreview = () => {
  const container = document.createElement(`div`);
  const header = createElement(`header`, container);
  const headline = createElement(`h1`, header, `Most popular tanks`);
  const main = createElement(`main`, container);
  const tanksContainer = createElement(`div`, main);
  container.className = `thumbnails`;
  tanksContainer.className = `tanks-container`;

  for (let i = 0; i < tanks.length; i++) {
    const tank = tanks[i];
    const tankThumbnail = createWithTitleEl(
      `div`,
      tanksContainer,
      `Click to details`
    );
    const tankImg = createElement(`img`, tankThumbnail);
    const aboutTank = createElement(`div`, tankThumbnail);
    const countryFlag = createWithTitleEl(`img`, aboutTank, `${tank.country}`);
    const tankLevel = createElement(`span`, aboutTank, `${tank.level}`);
    const tankName = createWithTitleEl(`span`, aboutTank, `${tank.model}`);
    tankThumbnail.className = `tank-thumbnail`;
    tankLevel.className = `tank-level`;
    addImgAtrr(tankImg, `${tank.preview}`, `${tank.model} tank`);
    addImgAtrr(countryFlag, `${tank.country_image}`, `flag of ${tank.country}`);
    tankName.innerHTML = `${tank.model}`;

    tankThumbnail.addEventListener(`click`, () => {
      location.hash = tank.model;
    });
  }

  location.hash = ``;
  location.hash = `#`;
  return container;
};

rootNode.appendChild( createTanksPreview() );

const getTankDetails = hashModel => {
  const container = document.createElement(`div`);
  container.className = `tank-details`;
  for (let i = 0; i < tanks.length; i++) {
    if (tanks[i].model === hashModel) {
      const tankDetails = createElement(`div`, container);
      createHeader(tankDetails, i);
      const main = createElement(`main`, tankDetails);
      const tankPreview = createElement(`div`, main);
      const headingPreview = createElement(`h2`, tankPreview, `Preview`);
      const tankImg = createElement(`img`, tankPreview);
      const aboutTank = createElement(`div`, main);
      const heading = createElement(`h2`, aboutTank, `Characteristic`);
      const backToListView = createElement(`a`, container, `Back to list view`);
      aboutTank.appendChild(createTable(i, tankPreview));
      tankPreview.className = `tank-preview`;
      backToListView.setAttribute(`href`, `#`);
      tankDetails.setAttribute(`id`, `${tanks[i].model}`);
      addImgAtrr(tankImg, `${tanks[i].preview}`, `${tanks[i].model} tank`);
    }
  }
  return container;
};

const createHeader = (container, i) => {
  const header = createElement(`header`, container);
  const heading = createElement(`h1`, header);
  const aboutTank = createElement(`div`, heading);
  const flag = createWithTitleEl(`img`, aboutTank, `${tanks[i].country}`);
  const tankName = createElement(`span`, aboutTank, `${tanks[i].model}`);
  const level = createElement(`span`, aboutTank, `(level ${tanks[i].level})`);
  level.className = `tank-level`;
  addImgAtrr(flag, `${tanks[i].country_image}`, `flag of ${tanks[i].country}`);
};

const createTable = (i, tankPreview) => {
  const tableCharacteristic = document.createElement(`table`);
  const tableBody = tableCharacteristic.createTBody();
  for (key in tanks[i].details) {
    const tank = tanks[i];
    const newKey = key.replace(/_/g, ` `);
    const tableRow = tableBody.insertRow();
    createCell(tableRow, `${newKey}`);
    createCell(tableRow, `${tank.details[key]}`);
  }
  return tableCharacteristic;
};

const createCell = (parent, data) => {
  createElement(`td`, parent, data);
};

window.onhashchange = () => {
  rootNode.removeChild(rootNode.firstChild);
  if (location.hash) {
    rootNode.appendChild( getTankDetails(location.hash.substr(1)) );
  } else {
    rootNode.appendChild( createTanksPreview() );
  }
};