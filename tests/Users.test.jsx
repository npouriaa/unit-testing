import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Users from "../src/components/Users";

describe("Users component", () => {
  test("should render users item", async () => {
    render(<Users />);
    const userItem = await screen.findByTestId("user-item-1");
    expect(userItem).toBeInTheDocument();
  });

  test("should render users items", async () => {
    render(<Users />);
    const usersItems = await screen.findAllByTestId(/user-item/i);
    expect(usersItems).toHaveLength(10);
  });
});
