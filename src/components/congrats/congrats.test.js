import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./congrats.jsx";
import { findTestAttr } from "../../../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
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
