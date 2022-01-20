import axois from "axios";

const service = axois.create({
  baseURL: "",
  timeout: 5000,
  withCredentials: true
});

function request(config) {
  return new Promise((resolve, reject) => {
    service(config).then(resolve).catch(reject);
  });
}

export default request;
