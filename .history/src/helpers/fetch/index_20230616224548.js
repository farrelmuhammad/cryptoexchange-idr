export default function fetchData({
  url,
  method,
  host = process.env.REACT_APP_API_HOST,
  body,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "accept": "application/json" },
    body,
  }).then(async (response) => {
    const jsonResponse =
      response.status === 200 ? await response.json() : response;
    if (response.ok) return jsonResponse;

    throw new Error(JSON.stringify(jsonResponse));
  });
}