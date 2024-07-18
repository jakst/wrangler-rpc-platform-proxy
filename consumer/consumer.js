import { getPlatformProxy } from "wrangler"

console.log("Loading platform proxy...")
const platform = await getPlatformProxy()
console.log("Calling RPC_WORKER.testRpcWorker()...")
console.log(await platform.env.RPC_WORKER.testRpcWorker())
