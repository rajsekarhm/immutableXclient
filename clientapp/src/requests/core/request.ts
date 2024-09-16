import http from "http";
function requestAPI(apiEndPoint: any, body?: any, header?: any) {
  return new Promise((resolve, reject) => {
    const _request = http.request(apiEndPoint, body, (req) => {
      var result = "";
      req.on("data", (data: string) => {
        result += data;
      });
      req.on("end", (result: any) => {
        resolve(result);
      });
    });
    _request.on("error", (error) => {
      reject(error);
    });

    _request.end();
  });
}

export { requestAPI };
