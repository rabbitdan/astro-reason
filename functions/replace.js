addEventListener('fetch', event => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  console.log('replace script is running')
  const response = await fetch(request)
  let html = await response.text()
  // Inject scripts
  const customScripts = '<style type="text/css">body{background:red}</style></body>'
  html = html.replace( /<\/body>/ , customScripts)

  // return modified response
  return new Response(html, {
    headers: response.headers
  })
}
