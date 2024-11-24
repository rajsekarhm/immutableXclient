function requestAPI(endpoint: any, method: any, body?: any, header?: any) {
  const requestOptions = body && header
      ? {
          method: method,
          headers: header || {},
          body: body ? JSON.stringify(body) : undefined,
        }
      : { method: method};
  return new Promise((resolve, reject) => {
    fetch(endpoint, requestOptions)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result: any) => {
        return resolve(JSON.parse(result));
      })
      .catch((error: any) => reject(error));
  });
}

export { requestAPI };
