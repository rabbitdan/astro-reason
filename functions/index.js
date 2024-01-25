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

//import { getAssetFromKV, defaultKeyModifier } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  console.log('eventListener runs');
  event.respondWith(handleRequest(event));
});

async function handleRequest(request) {
  const response = await fetch(request)
  console.log('request is ', request)
  let html = await response.text()
  console.log('html is ', html)
  // Inject scripts
  const customScripts = '<style type="text/css">body{background:red}</style></body>'
  html = html.replace( /<\/body>/ , customScripts)

  // return modified response
  return new Response(html, {
    headers: response.headers
  })
}

