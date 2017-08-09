import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Page from "./page";

jest.unmock("./page");

describe("Page component", () => {
  it("Renders correctly", () => {
    const page = renderer.create(<Page>Lorem Ipsum</Page>).toJSON();
    expect(page).toMatchSnapshot();
  });
});
