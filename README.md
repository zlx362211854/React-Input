## react 表单  双向绑定的实现

> 在 react 开发中，经常遇到 input 输入框改变值的时候，要定义一个函数，该函数内部执行 setState 的操作，才能改变 input 的值。如果表单元素多了以后，就会定义很多的这种函数，使代码变得冗余。下面在 react 中实现一个类似于 vue 的表单双向绑定的逻辑。

### 修改表单的值，只需如下操作：

```
this.state.inputval = "qqqq"
```

### 而且不用关心表单 onchange 的事件逻辑，表单 onchange 时会自动更新 state 中的值。

> 核心代码实现如下：

```
import React from "react";
const InputCteator = function(options) {
    const {stateKey} = options;
    const {inputval = '', label} = this.state;
    const context = this;
    // 监听get，set方法，set时自动更新state
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
```

> 使用如下：

```
import InputCteator from "./lib/index";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputval: "www",
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <label htmlFor="example">示例</label>
          {InputCteator.call(this, {
            stateKey: "inputval",
            label: "example"
          })}
          <p>{this.state.inputval}</p>

          <button 
          onClick={() => (this.state.inputval ="qqqq")
            }>
            qqq
            </button>
          <button
          onClick={() => (this.state.inputval ="eee")}>
            eee
          </button>
        </div>
      </div>
    );
  }
}
```

> 这样巧妙运用get，set方法来实现react表单双向绑定，就会在开发者简化很多代码。
