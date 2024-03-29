[![Netlify Status](https://api.netlify.com/api/v1/badges/f30d164e-6e5f-4765-a27a-adaa4f789f38/deploy-status)](https://app.netlify.com/sites/remix-edge-functions-demo/deploys)

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Edge Functions Overview](https://docs.netlify.com/edge-functions/overview/)

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Serve your site locally

Run

```sh
npm netlify serve
```

to serve your site locally at [http://localhost:8888](http://localhost:8888).

## Excluding routes

You can exclude routes for non-Remix code such as custom Netlify Functions or Edge Functions. To do this, add an additional entry in the array like in the example below:

````diff
export const config = {
  cache: "manual",
  path: "/*",
  // Let the CDN handle requests for static assets, i.e. /_assets/*
  //
  // Add other exclusions here, e.g. "/api/*" for custom Netlify functions or
  // custom Netlify Edge Functions
-  excluded_patterns: ["/_assets/*"],
+  excluded_patterns: ["/_assets/*", "/api/*"],
};

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
````
