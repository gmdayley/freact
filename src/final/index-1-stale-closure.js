/* eslint-disable react-hooks/rules-of-hooks */
console.log("🍦")

function useState(initialValue) {
  let _val = initialValue
  const state = _val
  const setState = (newVal) => (_val = newVal)
  return [state, setState]
}

const [name, setName] = useState("Gabriel")
console.log(`Hello ${name}`)
setName("Kyle")
console.log(`Hello ${name}`)

// Uh-oh.  That didn't work as expected?  Why not?
// We have a form of a stale closure. The _val variable that is being closed over by the closure `setState` is being updated,
// but at the time `useState` was called the value was `Gabriel` and remains that way.  One way we can fix that is to change
// `state` to be a function that returns the current value.
