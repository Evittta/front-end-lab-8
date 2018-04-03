const answer = document.createElement(`p`);
const communication = document.querySelector(`.communication`);
const preloader = document.createElement(`div`);
const loader = document.createElement(`div`);
const main = document.getElementById(`main`);
const responseInfo = document.createElement(`div`);
const tableInfo = document.createElement(`table`);
const tBody = document.createElement(`t-body`);
let response;
communication.appendChild(preloader);
preloader.appendChild(loader);
main.appendChild(responseInfo);
responseInfo.appendChild(tableInfo);
tableInfo.appendChild(tBody);
preloader.appendChild(answer);
answer.setAttribute(`class`, `answer`);
preloader.setAttribute(`class`, `preloader`);
loader.setAttribute(`class`, `loader`);
responseInfo.setAttribute(`class`, `response-info`);
tableInfo.setAttribute(`id`, `table`);
tBody.setAttribute(`id`, `t-body`);

const trackIP = () => {
  const ip = document.querySelector(`input`).value;
  if (validateIP(ip)) {
    const url = `https://ipapi.co/${ip}/json`;
    http.get(url).then(getDetails, showError);
    preloader.className = `preloader-active`;
    loader.className = `loader-active`;
  } else {
    alert(`Please input correct IP address`);
  }
};

const getDetails = info => {
  const data = JSON.parse(info);
  const validateResponseButton = document.querySelector(`.validate-button`);
  const oldTableBody = document.getElementById(`t-body`);
  tableInfo.removeChild(oldTableBody);
  const tableBody = tableInfo.createTBody();
  tableBody.setAttribute(`id`, `t-body`);
  responseInfo.appendChild(tableInfo);
  response = info;
  for (const key in data) {
    const tableRow = tableBody.insertRow();
    createCell(tableRow, key);
    createCell(tableRow, data[key]);
  }
  preloader.className = `preloader-end`;
  loader.className = `loader-end`;
  validateResponseButton.style.display = `inline-block`;
  answer.style.display = `none`;
};

const showError = statusCode => {
  console.log(`Failed with status `, statusCode);
};

const validateResponse = () => {
  const url = `https://shrouded-garden-94580.herokuapp.com/`;
  http.post(url, response).then(getAnswer, showError);
  preloader.className = `preloader-active`;
  loader.className = `loader-active`;
};

const getAnswer = data => {
  answer.innerHTML = data;
  answer.style.display = `block`;
  preloader.className = `preloader-end`;
  loader.className = `loader-end`;
};

const createCell = (parent, data) => {
  const cell = document.createElement(`td`);
  parent.appendChild(cell);
  cell.innerHTML = data;
  return cell;
};

const validateIP = ip => {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
};

document.getElementById(`track-ip`).addEventListener(`click`, trackIP);
document
  .querySelector(`.validate-button`)
  .addEventListener(`click`, validateResponse);
