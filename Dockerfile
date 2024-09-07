from denoland/deno

copy . .

run deno cache mod.ts

entrypoint ["deno", "run", "-A", "mod.ts"]