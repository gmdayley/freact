/* eslint-disable react-hooks/rules-of-hooks */
console.log("🍦")

const React = (function () {
  let _val
  function useState(initialValue) {
    const state = _val || initialValue
    const setState = (newVal) => (_val = newVal)
    return [state, setState]
  }

  function render(Component) {
    const C = Component()
    C.render()
    return C
  }

  return { useState, render }
})()

function HelloSort() {
  const [name, setName] = React.useState("Gabriel")
  return {
    render: () => console.log(`Hello ${name}`),
    changeName: (newName) => setName(newName),
  }
}

let App = React.render(HelloSort)
App.changeName("Kyle")
App = React.render(HelloSort)

// Step 1: Wrap useState in React module
// Step 2: Create component to wrap hook
// Step 3: Lift value up to closure scope, eliminate need for function call
