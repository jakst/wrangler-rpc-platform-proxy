import { WorkerEntrypoint } from "cloudflare:workers"

export default class RpcWorker extends WorkerEntrypoint {
	testRpcWorker() {
		console.log("hello from rpc worker")
		return { demo: "data" }
	}
}
