export async function onRequestGet() {
  const catResponse = await fetch('https://catfact.ninja/fact');
  const myJson = await catResponse.json();
  console.log('myJson is ', myJson);
  let html = await myJson.text();
  console.log('html is ', html);
}
