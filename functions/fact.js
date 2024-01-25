export async function onRequestGet() {
  const fact = await fetch('https://catfact.ninja/fact');
  const myJson = await fact.json();
  console.log('myJson is ', myJson);
  return myJson;
}
