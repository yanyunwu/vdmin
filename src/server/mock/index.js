import Mock from "mockjs";

Mock.mock("/routers", "get", (option) => {
  return "请求成功";
});
