import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Checkbox from "./checkbox";

jest.unmock("./checkbox");

describe("Checkbox component", () => {
  it("Renders correctly", () => {
    const checkbox = renderer
      .create(<Checkbox id="test" label="Lorem ipsum" />)
      .toJSON();
    expect(checkbox).toMatchSnapshot();
  });
});
