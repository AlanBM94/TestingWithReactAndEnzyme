import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../utils/index";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Shoul not throw a warning", () => {
      const expectedProps = {
        title: "Test",
        description: "Test",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test",
        description: "Test",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should renders without error", () => {
      const component = findByTestAttribute(wrapper, "ListItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should renders a title", () => {
      const title = findByTestAttribute(wrapper, "ComponentTitle");
      expect(title.length).toBe(1);
    });

    it("Should renders a description", () => {
      const description = findByTestAttribute(wrapper, "ComponentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "Test",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Component is not render", () => {
      const component = findByTestAttribute(wrapper, "ListItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
