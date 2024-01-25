export async function onRequestGet(request) {
  console.log('request is ', request);
  const catResponse = await fetch('https://catfact.ninja/fact');
  const myJson = await catResponse.json();
  return Response.json(myJson);
}
