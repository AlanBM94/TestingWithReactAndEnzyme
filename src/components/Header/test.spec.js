import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttribute } from "./../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttribute(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo without errors", () => {
    const logo = findByTestAttribute(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
