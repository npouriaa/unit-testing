import { describe, expect, test } from "vitest";
import Counter from "../src/components/Counter";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Counter component", () => {
  test("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  test("counter should increment by 1 if increment button clicked", () => {
    render(<Counter initialCount={0}/>)
    const incrementBtn = screen.getByRole('button' , {name : 'increment'})
    fireEvent.click(incrementBtn)
    const countValue = Number(screen.getByTestId('count').textContent)
    expect(countValue).toEqual(1)
  });

  test("counter should decrement by 1 if decrement button clicked", () => {
    render(<Counter initialCount={1}/>)
    const decrementBtn = screen.getByRole('button' , {name : 'decrement'})
    fireEvent.click(decrementBtn)
    const countValue = Number(screen.getByTestId('count').textContent)
    expect(countValue).toEqual(0)
  });

  test("counter should reset by 1 if reset button clicked", () => {
    render(<Counter initialCount={1}/>)
    const resetBtn = screen.getByRole('button' , {name : 'reset'})
    fireEvent.click(resetBtn)
    const countValue = Number(screen.getByTestId('count').textContent)
    expect(countValue).toEqual(0)
  });


  test("counter should switch coun value sign by 1 if switch signs button clicked", () => {
    render(<Counter initialCount={1}/>)
    const switchSignBtn = screen.getByRole('button' , {name : 'switch signs'})
    fireEvent.click(switchSignBtn)
    const countValue = Number(screen.getByTestId('count').textContent)
    expect(countValue).toEqual(-1)
  });
});
