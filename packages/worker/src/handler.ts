export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}`)
}

const API_KEY = 'b3cf80e6-0906-45c4-aee0-5d63b48345eb'
const URL = 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&symbol=MIA&convert=STX&CMC_PRO_API_KEY=' + API_KEY;

async function getMIAPriceInSTX() {
  const res = await fetch(URL);
  const result = await res.json();
  console.log('RESULT OBJ: ' + result);
  const price = result.data.quote.STX.price;
  console.log('PRICE OF MIA IN STX: ' + price);
  return price;
}
