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

import { getAssetFromKV, defaultKeyModifier } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

class FactElementHandler {
  async element(element) {
    console.log(`Incoming element: ${element.tagName}`);
    let catFactResponse = await fetch(new Request('https://catfact.ninja/fact'));
    return await catFactResponse.json();
  }
}

export async function handleRequest(req) {
  console.log('req is ', req);
  let catFactResponse = await fetch(new Request('https://catfact.ninja/fact'));
  let catFact = await catFactResponse.json();
  const res = await fetch(req);
  return new HTMLRewriter().on('div#hero-text', new FactElementHandler()).transform(res);
}
