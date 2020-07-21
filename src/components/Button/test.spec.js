import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../utils/index";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example",
        emitEvent: () => {},
      };

      const propsErrors = checkProps(SharedButton, expectedProps);

      expect(propsErrors).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunction;

    beforeEach(() => {
      mockFunction = jest.fn();
      const props = {
        buttonText: "Example",
        emitEvent: mockFunction,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAttribute(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAttribute(wrapper, "buttonComponent");
      console.log(wrapper);
      button.simulate("click");
      const callback = mockFunction.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
