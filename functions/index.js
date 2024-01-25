// export async function onRequestGet() {
//   const catResponse = await fetch('https://catfact.ninja/fact');
//   const myJson = await catResponse.json();
//   return Response.json(myJson);
// }

// export async function handleEvent(event) {
//   let catFactResponse = await fetch(new Request('https://catfact.ninja/fact'));
//   const myJson = await catFactResponse.json();
//   console.log('myJson is ', myJson);
//   const response = await getAssetFromKV(event);
//   return new HTMLRewriter().on('#hero-text', new myJson).transform(response);
// }

class FactElementHandler {
  async element(element) {
    let response = await fetch(new Request('/'));
    console.log('response is ', response);
    let catFactResponse = await fetch(new Request('https://catfact.ninja/fact'));
    //const myJson = await catFactResponse.json();
    return await catFactResponse.json();
  }
}

export async function handleRequest(req) {
  const res = await fetch(req);
  return new HTMLRewriter().on('div#hero-text', new FactElementHandler()).transform(res);
}
