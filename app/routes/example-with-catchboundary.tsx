import {json, LoaderFunction} from "@remix-run/node";
import {useCatch, useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = args => {
  const serverRuntimeVersion = require("@remix-run/server-runtime/package.json").version;
  const message = 'data from example-with-catchboundary/loader';
  throw json({serverRuntimeVersion, message})
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>example-with-catchboundary/index Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default function Example() {
  const data = useLoaderData();
  console.log(data)

  return (
    <div style={{border: '1px solid red'}}>
      <h3>example-with-catchboundary/index</h3>
    </div>
  );
}

