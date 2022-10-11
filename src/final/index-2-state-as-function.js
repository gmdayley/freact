/* eslint-disable react-hooks/rules-of-hooks */
console.log("🍦")

function useState(initialValue) {
  let _val = initialValue
  const state = () => _val
  const setState = (newVal) => (_val = newVal)
  return [state, setState]
}

const [name, setName] = useState("Gabriel")
console.log(`Hello ${name()}`)
setName("Kyle")
console.log(`Hello ${name()}`)

// Now we are getting the correct name, but we have to call our state var as a function
// That's not great.  Let's fix it by wrapping it in another closure ...
