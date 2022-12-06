import {json, LoaderFunction} from "@remix-run/node";
import {useCatch, useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = args => {
  throw json({ data: 'data from example-without-catchboundary/loader'})
}
export default function Example() {
  const data = useLoaderData();
  console.log(data)

  return (
    <div style={{ border: '1px solid red' }}>
      <h3>example-without-catchboundary/index</h3>
    </div>
  );
}