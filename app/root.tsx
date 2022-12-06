import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useCatch, useLoaderData,
} from "@remix-run/react";
import {json} from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = args => {
  const serverRuntimeVersion = require("@remix-run/server-runtime/package.json").version;
  const message = 'data from root/loader';
  throw json({serverRuntimeVersion, message})
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Root CatchBoundary Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default function App() {
  const data = useLoaderData();
  console.log(data)

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ border: '1px solid green', padding: '1rem' }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
