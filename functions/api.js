import fact from 'https://catfact.ninja/fact'

export function onRequestGet() {
  return Response.json(fact)
}
