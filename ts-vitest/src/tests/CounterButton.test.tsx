import { render, screen } from "supplejs-testing-library";
import CounterButton from "../CounterButton";

test("Display a counter button with value 0", () => {
    render(() => <CounterButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("0");
});
