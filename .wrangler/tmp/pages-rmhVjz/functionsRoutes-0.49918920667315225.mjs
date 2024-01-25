import { onRequest as __api_js_onRequest } from "/Users/danielfone/sites/astro-reason/functions/fact.js"

export const routes = [
    {
      routePath: "/api",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__api_js_onRequest],
    },
  ]
