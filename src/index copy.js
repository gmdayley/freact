/* eslint-disable react-hooks/rules-of-hooks */
import { render, createElement } from "./freact-utils"
console.log("🍌")

const React = (function () {
  let hooks = []
  let idx = 0

  function loop() {
    idx = 0
    render(hooks)()
    setTimeout(loop, 300)
  }
  setTimeout(loop, 300)

  function useState(initialValue) {
    const state = hooks[idx] || initialValue
    const _idx = idx
    const setState = (newVal) => (hooks[_idx] = newVal)
    idx++
    return [state, setState]
  }

  return { useState, render: render(hooks), createElement }
})()

function HelloSort() {
  const [name, setName] = React.useState("Gabriel")
  const [lastName, setLastName] = React.useState("Dayley")

  function sayHello() {
    setName("Kyle")
    setLastName("West")
  }

  return (
    <div>
      <h1>
        Hello {name} {lastName}
      </h1>
      <button onClick={sayHello}>Say Hello to Kyle</button>
    </div>
  )
}

const root = document.getElementById("root")
React.render(<HelloSort />, root)
