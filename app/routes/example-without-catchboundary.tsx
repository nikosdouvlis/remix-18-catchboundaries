import {useLoaderData} from "@remix-run/react";
import {json, LoaderFunction} from "@remix-run/node";

export const loader: LoaderFunction = args => {
  const serverRuntimeVersion = require("@remix-run/server-runtime/package.json").version;
  const message = 'data from example-without-catchboundary/loader';
  throw json({serverRuntimeVersion, message})
}

export default function Example() {
  const data = useLoaderData();
  console.log(data)

  return (
    <div style={{border: '1px solid red'}}>
      <h3>example-without-catchboundary/index</h3>
    </div>
  );
}