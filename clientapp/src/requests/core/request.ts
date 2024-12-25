// function requestAPI(endpoint: any, method: any, body?: any, header?: any) {
//   const requestOptions = body && header
//       ? {
//           method: method,
//           headers: header || {},
//           body: body ? JSON.stringify(body) : undefined,
//         }
//       : { method: method};
//   return new Promise((resolve, reject) => {
//      fetch(endpoint, requestOptions)
//       .then(async (response: any) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return JSON.parse(await response.text()).data;
//       })
//       .then((result: any) => {
//         return resolve(JSON.parse(result));
//       })
//       .catch((error: any) => reject(error));
//   });
// }

function createHeaders(contentType = "application/json") {
  const headers = new Headers();
  headers.append("Content-Type", contentType);
  return headers;
}

async function requestAPI(
  url: string,
  _method: string,
  _body: any,
  contentType = "application/json"
) {
  /**
   * {
    method:string,
    headers:any,
    redirect:string,
    body?:any
  } 
   */
  const requestOptions: any = {
    method: _method || "GET",
    headers: createHeaders(contentType),
    redirect: "follow",
  };

  const body = _body || null;

  if (body && _method !== "GET") {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

export default requestAPI;
