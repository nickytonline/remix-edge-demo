export default function About() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>About</h1>
      <p>
        This is an example of a static page. It's not using any data fetching
        methods like <code>useLoaderData</code> or <code>useRouteData</code>.
      </p>
      <p>
        This page is rendered on the server and then sent to the client as HTML.
        This means that the page loads faster and is more accessible to search
        engines.
      </p>
    </main>
  );
}
