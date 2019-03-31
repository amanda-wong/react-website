import React from "react";
import { shallow } from "enzyme";
import { findTestAttr, checkProps } from "../../../test/testUtils";
import Congrats from "./congrats.jsx";

const defaultProps = { success: false };

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
}

test ("renders without error", () => {
    const wrapper = setup();
    const component = findTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});

test ("renders no text when `success` props is false", () => {
    const wrapper = setup({ success: false });
    const component = findTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe('');
});

test ("renders congrats message when `success` props is true", () => {
    const wrapper = setup({ success: true });
    const message = findTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
})
