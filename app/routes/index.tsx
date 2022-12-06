export default function Index() {
  return (
    <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/">
            /index
          </a>
        </li>
        <li>
          <a href="/example-with-catchboundary">
            /example-with-catchboundary
          </a>
        </li>
        <li>
          <a href="/example-without-catchboundary">
            /example-without-catchboundary
          </a>
        </li>
      </ul>
    </div>
  );
}
