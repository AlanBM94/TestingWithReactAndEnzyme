import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttribute } from "./../../../utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test description",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, "HeadLineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a h1", () => {
      const h1 = findByTestAttribute(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a description", () => {
      const desc = findByTestAttribute(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttribute(wrapper, "HeadLineComponent");
      expect(component.length).toBe(0);
    });
  });
});
