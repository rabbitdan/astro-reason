export async function onRequestGet() {
  const catResponse = await fetch('https://catfact.ninja/fact');
  const myJson = await catResponse.json();
  // console.log('myJson is ', myJson);
  // const parsedResponse = JSON.parse(myJson);
  // console.log('parsedResponse is ', parsedResponse);
  return Response.json(myJson);
}
