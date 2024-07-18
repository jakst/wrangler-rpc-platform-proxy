### Reproduction steps

1. Run `npm install`
2. Inside the [./rpc-worker](./rpc-worker) folder, run `npm run dev`
3. Inside the [./consumer](./consumer) folder, run `node consumer.js`
4. Observer the following error

```
DevalueError: Cannot stringify POJOs with symbolic keys
    at flatten (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/.pnpm/devalue@4.3.2/node_modules/devalue/src/stringify.js:145:13)
    ... 3 lines matching cause stack trace ...
    at async ProxyServer.fetch (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/miniflare/src/workers/core/proxy.worker.ts:157:11) {
  cause: Error [DevalueError]: Cannot stringify POJOs with symbolic keys
      at flatten (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/.pnpm/devalue@4.3.2/node_modules/devalue/src/stringify.js:145:13)
      at stringify (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/.pnpm/devalue@4.3.2/node_modules/devalue/src/stringify.js:178:16)
      at stringifyWithStreams (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/miniflare/src/workers/core/devalue.ts:242:27)
      at #fetch (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/miniflare/src/workers/core/proxy.worker.ts:342:30)
      at async ProxyServer.fetch (~/project/node_modules/.pnpm/miniflare@3.20240701.0/node_modules/miniflare/src/workers/core/proxy.worker.ts:157:11)
```
