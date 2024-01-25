// export async function onRequestGet() {
//   const catResponse = await fetch('https://catfact.ninja/fact');
//   const myJson = await catResponse.json();
//   return Response.json(myJson);
// }

export async function handleEvent(event) {
  const response = await getAssetFromKV(event);
  return new HTMLRewriter().on('#hero-text', new UserElementHandler()).transform(response);
}

class UserElementHandler {
  async element(element) {
    let response = await fetch(new Request('https://catfact.ninja/fact'));
    const myJson = await response.json();
    return Response.json(myJson);
  }
}
