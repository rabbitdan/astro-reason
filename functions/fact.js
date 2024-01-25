export async function onRequestGet() {
  const catResponse = await fetch('https://catfact.ninja/fact');
  const myJson = await catResponse.json();
  return Response.json(myJson);
}


