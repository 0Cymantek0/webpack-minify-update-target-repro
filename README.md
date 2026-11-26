# Webpack minifier update target reproduction

This project pins the webpack `main` preview for commit `058beeea2f`. The published `5.113.0` package did not reproduce the bug.

Use Node.js 24 and Yarn Classic.

```sh
yarn install --frozen-lockfile
node index.mjs
yarn build --no-minimize
yarn run:bundle
yarn build
yarn run:bundle
```

The source and the unminified production bundle both print `loaded`. The minified production build succeeds, but the last command fails with `SyntaxError: Invalid left-hand side expression in postfix operation`. The bundle contains `({valueOf:()=>e})++` instead of updating a variable.
