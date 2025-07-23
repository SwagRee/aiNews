import axios from "axios";

// 请求的基本地址（服务器地址）
axios.defaults.baseURL = import.meta.env.VITE_URL;
axios.defaults.timeout = 1000000; // 延迟时间
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest"; // 请求头



// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 404:
          ElMessage({
            showClose: true,
            message: "找不到资源",
            type: "error",
          });
          break;
        case 500:
          ElMessage({
            showClose: true,
            message: "服务区内部错误，请联系管理员",
            type: "error",
          });
          break;
        default:
          ElMessage({
            showClose: true,
            message: error.response.data.message,
            type: "error",
          });
      }
    }
    return Promise.reject(error);
  }
);

/**
 * get 请求方法
 * url 请求地址
 * params 请求参数
 */
// 导出封装的get方法
const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * post 请求方法
 * url 请求地址
 * data 请求参数
 */
// 导出封装的post方法
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * put 请求方法
 * url 请求地址
 * data 请求参数
 */
// 导出封装的put方法
const put = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * delete 请求方法
 * url 请求地址
 * params 请求参数
 */
// 导出封装的del方法
const del = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

var http = {
    get,
    post,
    put,
    del
}

export default http;
