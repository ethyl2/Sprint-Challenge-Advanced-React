- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components are the way to go when you want to use state or lifecycle methods. Functional components don’t have those. (That's why hooks were invented.)

Another minor reason: You might choose to write a class component to remind yourself how they are written and handled, to be able to understand and read legacy code written with class components.

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount() is called once, after the initial render call and a component is mounted (inserted into the tree). It’s helpful for getting initial data from APIs and other side-effects, subscriptions, and initialization that needs DOM nodes.

2. componentDidUpdate() isn’t called after the initial render, but is invoked after each updating after the initial render. It’s a good place for side effects. It can take prevProps and prevState parameters for checking to see if something should be done, like doing network requests or DOM operations only when props have changed.

3. componentWillUnMount() is called once, immediately before a component is unmounted and destroyed. It’s the place for clean-up code, such as unsubscribing, invalidating timers, canceling network requests, and removing event listeners that aren’t needed anymore.


- [ ] What is the purpose of a custom hook?

Custom hooks allow you to extract – to separate – component logic into a reusable function. Since you yourself write them, you get to decide what your custom hook’s arguments are and what it returns. You can take stateful logic that is repeated in your app within multiple components and extract it into a custom hook to make your code more DRY. Also, custom hooks are handy because you can write them to cover a wide range of use cases.

- [ ] Why is it important to test our apps?

It helps to minimize bugs, because they are discovered easier and faster with tests. Also, bugs are discovered that might not have been obvious without tests, because writing tests helps us to consider more use cases and their effects. Tests help us to know when something stops working as it should when we change our code. With a testing mindset, we might be more likely to write better code. Also, other developers can learn about what our code does by reading our tests, if we write them well.

