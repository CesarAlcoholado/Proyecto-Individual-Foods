// import React from "react";
import { screen, render } from "@testing-library/jest-dom";
// import { Provider } from "react-redux";
import SearchBar from "./SearchBar.js"

describe("Testeo de SearchBar", () => {
  it("must have a PlaceholderText", () => {
    render(
        <SearchBar />
    );
    expect(
      screen.queryAllByPlaceholderText(/Search Recipe/i)
    ).toBeInTheDocument();
  });
});
