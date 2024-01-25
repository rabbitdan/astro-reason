export async function onRequestGet(request) {
  console.log('request is ', request);
  const pageResponse = await fetch(request);
  console.log('pageResponse is ', pageResponse);
  const catResponse = await fetch('https://catfact.ninja/fact');
  const myJson = await catResponse.json();
  return Response.json(myJson);
}
