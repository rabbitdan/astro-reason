export async function onRequestGet() {
  const fact = await fetch('https://catfact.ninja/fact');
  const myJson = await fact.json();
  return new Response(myJson);
}
