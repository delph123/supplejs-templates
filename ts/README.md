# SuppleJS + TypeScript + Vite

This template provides a minimal setup to get SuppleJS working with Vite and TypeScript.

It provides a default setup based on:

- [Vite](https://vitejs.dev/) as developer tooling (a modern bundler featuring a dev server with Hot Module Reload).
- [TypeScript](https://www.typescriptlang.org/) as programming language.

## Usage

Install dependencies with your favorite package manager, then use one of the the available scripts.

```bash
$ pnpm install  # or npm install or yarn install
```

_Note:_ this project uses [pnpm](https://pnpm.io/) but you can use npm or yarn alternatively. It would make sense that you delete the `pnpm-lock.yaml` file in this case though.

### Available Scripts

In the project directory, you can run:

#### `pnpm start` or `pnpm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### `pnpm run build`

Builds the app in the `dist` folder. The app is bundled in a single file, minified and optimized for the best performance. <br>
The filenames also include the hashes so that you can redeploy new versions of the app without headache.

#### `pnpm run preview`

Runs the app in bundled mode, from the `dist` folder directly.<br>
This require `pnpm run build` to be launched before.

## Deployment

Beware that SuppleJS is not a production-ready framework, but if you understand the risks and can live with them, you can refer to this [documentations](https://vitejs.dev/guide/static-deploy.html) to give it a go.
