import { createSignal } from "supplejs";

export default function CounterButton() {
    const [count, setCount] = createSignal(0);

    return () => <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>;
}
