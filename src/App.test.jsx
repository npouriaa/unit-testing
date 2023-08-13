import { describe, it, expect } from "vitest";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count sholud increment by 1 if increment btn clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("count sholud decrement by 1 if decrement btn clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    const decrementBtn = getByRole("button", { name: "decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count sholud reset if reset btn clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={10000} />);
    const resetBtn = getByRole("button", { name: "reset" });
    fireEvent.click(resetBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count sholud reset if reset btn clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={10000} />);
    const resetBtn = getByRole("button", { name: "reset" });
    fireEvent.click(resetBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count value sign should switch if switch btn clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={10} />);
    const switchSignsBtn = getByRole("button", { name: "switch signs" });
    fireEvent.click(switchSignsBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-10);
  });
});
