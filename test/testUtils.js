export const findTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}