import { createSignal } from "supplejs";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return () => (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img
            src={typescriptLogo}
            class="logo typescript"
            alt="TypeScript logo"
          />
        </a>
      </div>
      <h1>
        Vite +{" "}
        <a href="https://github.com/delph123/supplejs" target="_blank">
          SuppleJS
        </a>
      </h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </>
  );
}

export default App;
