import request from "@/utils/request.js";

export function getRoutes() {
  return request({
    url: "/"
  });
}
