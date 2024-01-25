export function onRequestGet() {
  const returnedFact = async ()  => {
    const fact = await fetch('https://catfact.ninja/fact');
    const myJson = await fact.json();
    console.log('myJson is ', myJson);
    return myJson;
  }
}
