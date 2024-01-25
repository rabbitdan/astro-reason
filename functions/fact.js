export async function onRequestGet() {
  const catResponse = await fetch('https://catfact.ninja/fact');
  const myJson = await catResponse.json();
  const catFactJson = Response.json(myJson);
  const parsed = JSON.parse(catFactJson);
  console.log('parsed is ', parsed);
  console.log('catFactJson is ', catFactJson.fact);

  return catFactJson.fact;
}
