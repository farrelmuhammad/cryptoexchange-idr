export default function fetchData({
  url,
  method = "GET",
  // host = process.env.REACT_APP_API_HOST,
  host = "https://api.blockchain.com/v3/",
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
