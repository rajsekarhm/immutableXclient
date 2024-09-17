import http from "http";
async function requestAPI(options: any, body?: any, header?: any) {
return await new Promise((resolve,reject) => {
  var req =  http.request(options, function (res) {
    var chunks : Array<any> = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function (_chunk:any) {
      var body = Buffer.concat(chunks);
    });
  
    res.on("error", function (error) {
      reject(error);
    });
  });
  req.write(body);
  req.end();  
})
}

export { requestAPI };
