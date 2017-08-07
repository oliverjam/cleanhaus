import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Title from "./title";

jest.unmock("./title");

describe("Title component", () => {
  it("Renders correctly", () => {
    const title = renderer.create(<Title>Lorem Ipsum</Title>).toJSON();
    expect(title).toMatchSnapshot();
  });
});
