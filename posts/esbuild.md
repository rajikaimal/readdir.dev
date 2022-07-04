---
title: "esbuild"
publish_date: "2021-04-14"
---

[esbuild](https://esbuild.github.io/) is a new JavaScript bundler written in Go. According to the claims made by the author it is faster than most of the bundlers in multiples of magnitutude. To be fair it should be as it's written in Go, which should execute faster than other bundlers wrtten in JavaScript/TypeScript.

I quickly wanted to give a try bundling React with esbuild and from the first few tries it is really fast. However I did not build a very large production scale application. Therefore I can't verify all the claims.

To install refer the installation [guide](https://esbuild.github.io/getting-started/#install-esbuild)

To create a bundle with React all files should be in .jsx extension and to bundle use the following command,

```
$ esbuild index.jsx --bundle --outfile=out.js
```

This outputs `out.js` which is the bundled. Note that there are many options, which you can refer using `--help` in command line.

[Demo repository](https://github.com/rajikaimal/esbuild-demo)
