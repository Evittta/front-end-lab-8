const preloader = document.querySelector(`.communication div`);
const loader = document.querySelector(`.loader`);
const http = {
  get: url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      preloader.className = `preloader-active`;
      loader.className = `loader-active`;
      xhr.open(`GET`, url, true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
            preloader.className = `preloader-end`;
            loader.className = `loader-end`;
          } else {
            reject(xhr.status);
            console.log("xhr failed");
          }
        }
      };
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      preloader.className = `preloader-active`;
      loader.className = `loader-active`;
      xhr.open(`POST`, url, true);
      xhr.setRequestHeader(`Content-type`, `application/x-www-form-urlencoded`);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
            preloader.className = `preloader-end`;
            loader.className = `loader-end`;
          } else {
            reject(xhr.status);
          }
        }
      };
      xhr.send(data);
    });
  }
};
