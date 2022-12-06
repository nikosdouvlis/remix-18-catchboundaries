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
  return json({ data: 'data from root/loader'})
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
