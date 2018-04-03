const http = {
  get: url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(`GET`, url, true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.status);
          }
        }
      };
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(`POST`, url, true);
      xhr.setRequestHeader(`Content-type`, `application/x-www-form-urlencoded`);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.status);
          }
        }
      };
      xhr.send(data);
    });
  }
};
