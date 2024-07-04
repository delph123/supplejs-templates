import CounterButton from "./CounterButton";

import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
    return () => (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} class="logo" alt="Vite logo" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <img src={typescriptLogo} class="logo typescript" alt="TypeScript logo" />
                </a>
            </div>
            <h1>
                Vite +{" "}
                <a href="https://github.com/delph123/supplejs" target="_blank">
                    SuppleJS
                </a>
            </h1>
            <div class="card">
                <CounterButton />
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">Click on the Vite and TypeScript logos to learn more</p>
        </>
    );
}
