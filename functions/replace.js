addEventListener('fetch', event => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  let html = await response.text()
  console.log('response is ', response);
  // Inject scripts
  const customScripts = '<style type="text/css">body{background:red}</style></body>'
  html = html.replace( /<\/body>/ , customScripts)

  // return modified response
  return new Response(html, {
    headers: response.headers
  })
}
