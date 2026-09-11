/**
 * Cloudflare Worker that serves this repo as a static site.
 * Deploy: wrangler deploy
 */
export default {
  async fetch(request, env) {
    if (env && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response(
      "Bind this Worker to the static files (Workers + Assets). See README.",
      { status: 200, headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  }
};
