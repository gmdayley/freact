const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// React.useEffect(() => {
//   console.log("🐛");

//   async function run() {
//     const response = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt:
//         "Rules of Hooks\n\nHooks are a new addition in React 16.8. They let you use state and other React features without writing a class.\n\nHooks are JavaScript functions, but you need to follow two rules when using them. We provide a linter plugin to enforce these rules automatically:\n\nOnly Call Hooks at the Top Level\n\nDon’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)\n\nOnly Call Hooks from React Functions\n\nDon’t call Hooks from regular JavaScript functions. Instead, you can:\n\n✅ Call Hooks from React function components.\n\n✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).\n\nBy following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.\n\nTl;dr",
//       // prompt:
//       // "What is a Hook? A Hook is a special function that lets you hook into React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later. When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. Were going to do that right now! \n\nTl;dr",
//       // prompt:"A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.[1] Neutron stars are the smallest and densest stellar objects, excluding black holes and hypothetical white holes, quark stars, and strange stars.[2] Neutron stars have a radius on the order of 10 kilometres (6.2 mi) and a mass of about 1.4 solar masses.[3] They result from the supernova explosion of a massive star, combined with gravitational collapse, that compresses the core past white dwarf star density to that of atomic nuclei.\n\nTl;dr",
//       temperature: 0.7,
//       max_tokens: 100,
//       top_p: 1.0,
//       frequency_penalty: 0.0,
//       presence_penalty: 0.0,
//     });

//     console.log(response);
//     setTldr(response.data.choices[0].text);
//   }

//   run();
// }, [name]);
