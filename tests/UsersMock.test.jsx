import { test } from "vitest";
import UsersMock from "../src/components/UsersMock";
import { render, screen } from "@testing-library/react";

describe("UsersMock component", () => {
  test("should render users mocked item", async () => {
    render(<UsersMock />);
    const userItem = await screen.findByTestId("user-item-1");
    const userItemText = await screen.findByText("john");
    screen.debug()
    expect(userItem).toBeInTheDocument();
    expect(userItemText).toBeInTheDocument();
  });
});
