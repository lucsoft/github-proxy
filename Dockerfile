from denoland/deno

copy . .

run deno cache mod.ts

cmd ["deno", "run", "-A", "mod.ts"]