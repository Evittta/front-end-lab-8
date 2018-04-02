const answer = document.querySelector(`.answer`);
let response;

const trackIP = () => {
  const ip = document.querySelector(`input`).value;
  if (ip && validateIP(ip)) {
    const url = `https://ipapi.co/${ip}/json`;
    http.get(url).then(getDetails, showError);
  } else {
    alert(`Please input correct IP address`);
  }
};
const getDetails = info => {
  response = info;
  const data = JSON.parse(info);
  const validateResponseButton = document.querySelector(`.validate-button`);
  const tableParent = document.querySelector(`.response-info`);
  const tableInfo = document.getElementById(`table`);
  const oldTableBody = document.getElementById(`t-body`);
  tableInfo.removeChild(oldTableBody);
  const tableBody = tableInfo.createTBody();
  tableBody.setAttribute(`id`, `t-body`);
  tableParent.appendChild(tableInfo);
  for (const key in data) {
    const tableRow = tableBody.insertRow();
    createCell(tableRow, key);
    createCell(tableRow, data[key]);
  }
  validateResponseButton.style.display = `inline-block`;
  answer.style.display = `none`;
};

const showError = statusCode => {
  console.log(`Failed with status `, statusCode);
};

const validateResponse = () => {
  const url = `https://shrouded-garden-94580.herokuapp.com/`;
  http.post(url, response).then(getAnswer, showError);
};

const getAnswer = data => {
  answer.innerHTML = data;
  answer.style.display = `block`;
};

const createCell = (parent, data) => {
  const cell = document.createElement(`td`);
  parent.appendChild(cell);
  cell.innerHTML = data;
  return cell;
};

document.getElementById(`track-ip`).addEventListener(`click`, trackIP);
document
  .querySelector(`.validate-button`)
  .addEventListener(`click`, validateResponse);
const validateIP = ip => {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
};
