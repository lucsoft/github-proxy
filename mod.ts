import { assert } from "jsr:@std/assert";

assert(Deno.args.length > 0, "No arguments provided");

Deno.serve({
    port: 8001
}, async (rsp, info) => {
    const url = new URL(rsp.url);
    if (url.pathname === "/") {
        return new Response("Hello World");
    }
    if (url.pathname.length > 2) {
        // allow to have a naming convention like project@1.0.0-hash/path
        const check = /.*?-?(.*)\/(.*)/.exec(url.pathname);
        if (!check) return new Response("Not Found", { status: 404 });
        const [ _, hash, path ] = check;
        const ip = rsp.headers.get("X-Forwarded-For") ?? info.remoteAddr.hostname;
        console.log("[", ip, "] Requested:", url.pathname);
        const response = await fetch(`${Deno.args[ 0 ]}/${hash}/${path}`, {
            headers: {
                "Authorization": `Bearer ${Deno.args[ 1 ]}`
            }
        });
        return new Response(response.body);
    }
    return new Response("Not Found", { status: 404 });
});