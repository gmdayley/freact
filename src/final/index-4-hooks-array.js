/* eslint-disable react-hooks/rules-of-hooks */
console.log("🍦")

const React = (function () {
  const hooks = []
  let idx = 0

  function useState(initialValue) {
    const state = hooks[idx] || initialValue
    const _idx = idx
    const setState = (newVal) => (hooks[_idx] = newVal)
    idx++
    return [state, setState]
  }

  function render(Component) {
    idx = 0
    const C = Component()
    C.render()
    return C
  }

  return { useState, render }
})()

function HelloSort() {
  const [name, setName] = React.useState("Gabriel")
  const [lastName, setLastName] = React.useState("Dayley")
  return {
    render: () => console.log(`Hello ${name} ${lastName}`),
    changeName: (newName) => setName(newName),
    changeLastName: (newLastName) => setLastName(newLastName),
  }
}

let App = React.render(HelloSort)
App.changeName("Kyle")
App = React.render(HelloSort)
App.changeLastName("West")
App = React.render(HelloSort)
