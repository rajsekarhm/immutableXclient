function requestAPI(endpoint: any,method:any,body?: any, header?: any) {
  const requestOptions = body && header ? {
    method: method,
    headers: header,
    body: body
  } : {method:method};
  return  new Promise((resolve, reject) => {
    fetch(endpoint,requestOptions)
      .then((response: any) => response.text())
      .then((result: any) => resolve(JSON.parse(result)))
      .catch((error: any) => reject(error));
  });
}

export { requestAPI };


