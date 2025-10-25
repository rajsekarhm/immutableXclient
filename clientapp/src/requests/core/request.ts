function createHeaders(contentType = "application/json") {
  const headers = new Headers();
  headers.append("Content-Type", contentType);
  return headers;
}
async function requestAPI(
  url: string,
  _method: string,
  _body: any,
  contentType = "application/json",
  timeout = 10000
) {
  // const controller = new AbortController();
  // const id = setTimeout(() => controller.abort(), timeout);

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
    // clearTimeout(id);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

export default requestAPI;
