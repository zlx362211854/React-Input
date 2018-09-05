import React from "react";
const InputCteator = function(options) {
    const {stateKey} = options;
    const {inputval = '', label} = this.state;
    const context = this;
    Object.defineProperty(this.state, stateKey, {
        get() {
            return inputval;
        },
        set(val) {
            context.setState({[stateKey]: val});
        }
    });
    const onInputChange = e => {
      const val = e.target.value;
      this.setState({ [stateKey]: val });
    };
    const content = (
        <input
            type="text"
            value={inputval}
            onChange={onInputChange}
            name={label}
        />
    )
    return content;
}
export default InputCteator;