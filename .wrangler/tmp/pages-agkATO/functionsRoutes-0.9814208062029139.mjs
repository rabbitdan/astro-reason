import { onRequestGet as __api_js_onRequestGet } from "/Users/danielfone/sites/astro-reason/functions/api.js"

export const routes = [
    {
      routePath: "/api",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__api_js_onRequestGet],
    },
  ]