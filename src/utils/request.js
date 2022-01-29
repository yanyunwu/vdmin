import axois from "axios";

const service = axois.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  withCredentials: true
});

function request(config) {
  return new Promise((resolve, reject) => {
    const solveData = (value) => resolve(value.data);
    service(config).then(solveData).catch(reject);
  });
}

export default request;
