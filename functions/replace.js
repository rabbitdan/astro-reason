addEventListener('fetch', event => {
  console.log('eventListener runs')
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a given request object
 * @param {Request} request
 */
async function handleRequest(request) {
  console.log('replace script is running')
  const response = await fetch(request)
  console.log('request is ', request)
  let html = await response.text()
  console.log('html is ', html)
  // Inject scripts
  const customScripts = '<style type="text/css">body{background:red}</style></body>'
  html = html.replace( /<\/body>/ , customScripts)

  // return modified response
  return new Response(html, {
    headers: response.headers
  })
}
