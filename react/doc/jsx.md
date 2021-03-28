# JSX 简介学习笔记

## JSX 防止注入攻击

1. React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

2. Babel 会把 JSX 转译成一个铭文 React.createElement() 函数调用

```js

```

3. React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

## 正确地使用 State

1. 不要直接修改 State

```js
// Wrong
this.state.comment = "Hello";

// Correct
this.setState({ comment: "Hello" });
```

2. State 的更新可能是异步的

```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}
```

3. 向事件处理程序传递参数

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

# 列表 & Key

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

// render
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

// 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key：

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);

// 元素的 key 只有放在就近的数组上下文中才有意义。

// 一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。
```
