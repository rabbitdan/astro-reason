export function onRequestGet() {
  const fact = fetch('https://catfact.ninja/fact');
  const myJson = fact.json();
  console.log('myJson is ', myJson);
  return myJson;
}
