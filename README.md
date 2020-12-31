# jspm-single-spa-example

A single-spa application built with jspm

## Local development

First install jspm:

```sh
npm install -g jspm
```

Then start up the single-spa root config:

```sh
# Terminal Tab 1
cd packages/root-config
pnpm install
pnpm start
```

Then start up app1 (which uses jspm):

```sh
# Terminal Tab 2

cd packages/app1
pnpm install
pnpm start
```

Then go to http://localhost:9000. Run the following in the browser console:

```js
localStorage.setItem("devtools", true);
importMapOverrides.addExternalImportMap("http://localhost:9001/app1.importmap");
```

Then refresh the page
