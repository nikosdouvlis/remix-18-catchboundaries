var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_node2 = require("@remix-run/node/"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), loader = (args) => {
  let routerVersion = require("@remix-run/router/package.json").version, serverRuntimeVersion = require("@remix-run/server-runtime/package.json").version;
  throw (0, import_node2.json)({ routerVersion, serverRuntimeVersion, message: "data from root/loader" });
};
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Root CatchBoundary Caught"
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          "Status: ",
          caught.status
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
          children: JSON.stringify(caught.data, null, 2)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
function App() {
  let data = (0, import_react2.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        style: { border: "1px solid green", padding: "1rem" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/example-without-catchboundary.tsx
var example_without_catchboundary_exports = {};
__export(example_without_catchboundary_exports, {
  default: () => Example,
  loader: () => loader2
});
var import_react3 = require("@remix-run/react"), import_node3 = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = (args) => {
  let routerVersion = require("@remix-run/router/package.json").version, serverRuntimeVersion = require("@remix-run/server-runtime/package.json").version;
  throw (0, import_node3.json)({ routerVersion, serverRuntimeVersion, message: "data from example-without-catchboundary/loader" });
};
function Example() {
  let data = (0, import_react3.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { border: "1px solid red" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
      children: "example-without-catchboundary/index"
    }, void 0, !1, {
      fileName: "app/routes/example-without-catchboundary.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/example-without-catchboundary.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/example-with-catchboundary.tsx
var example_with_catchboundary_exports = {};
__export(example_with_catchboundary_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => Example2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = (args) => {
  let routerVersion = require("@remix-run/router/package.json").version, serverRuntimeVersion = require("@remix-run/server-runtime/package.json").version;
  throw (0, import_node4.json)({ routerVersion, serverRuntimeVersion, message: "data from example-with-catchboundary/loader" });
};
function CatchBoundary2() {
  let caught = (0, import_react4.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "example-with-catchboundary/index Caught"
      }, void 0, !1, {
        fileName: "app/routes/example-with-catchboundary.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          "Status: ",
          caught.status
        ]
      }, void 0, !0, {
        fileName: "app/routes/example-with-catchboundary.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
          children: JSON.stringify(caught.data, null, 2)
        }, void 0, !1, {
          fileName: "app/routes/example-with-catchboundary.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/example-with-catchboundary.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/example-with-catchboundary.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function Example2() {
  let data = (0, import_react4.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { border: "1px solid red" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
      children: "example-with-catchboundary/index"
    }, void 0, !1, {
      fileName: "app/routes/example-with-catchboundary.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/example-with-catchboundary.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "/",
              children: "/index"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 7,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 6,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "/example-with-catchboundary",
              children: "/example-with-catchboundary"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 12,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "/example-without-catchboundary",
              children: "/example-without-catchboundary"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 17,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 5,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "59cf30cd", entry: { module: "/build/entry.client-YJNFXDRE.js", imports: ["/build/_shared/chunk-HVRP3LF5.js", "/build/_shared/chunk-MLBUYSNZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DMM3CAQH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/example-with-catchboundary": { id: "routes/example-with-catchboundary", parentId: "root", path: "example-with-catchboundary", index: void 0, caseSensitive: void 0, module: "/build/routes/example-with-catchboundary-KFRVK44W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/example-without-catchboundary": { id: "routes/example-without-catchboundary", parentId: "root", path: "example-without-catchboundary", index: void 0, caseSensitive: void 0, module: "/build/routes/example-without-catchboundary-XT64OOHC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-G6PDRGEB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-59CF30CD.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/example-without-catchboundary": {
    id: "routes/example-without-catchboundary",
    parentId: "root",
    path: "example-without-catchboundary",
    index: void 0,
    caseSensitive: void 0,
    module: example_without_catchboundary_exports
  },
  "routes/example-with-catchboundary": {
    id: "routes/example-with-catchboundary",
    parentId: "root",
    path: "example-with-catchboundary",
    index: void 0,
    caseSensitive: void 0,
    module: example_with_catchboundary_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
