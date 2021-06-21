# React 18 new features



## 1. New Root API

### Current (react 15.x - 17.x)

As part of the current versions, if you had to define the main app

```javascript
ReactDOM.render(<App/>, document.getElementById('root'));
```

> This will be deprecated from React 18.x

### New (react 18.x)

As part of the new Root API. You define your main app this way -

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```



## 2. Suspense

The `<Suspense>` component, suspends any child component until it's ready to be rendered

```html
<Suspense fallback={<h1>Loading....</h1>}>
    <ComponentFetchingData/>
    <AnotherRandomComponent/>
</Suspense>
```

> This is going to be very useful with Server Side Rendering.

````html
<Layout>
    <Nav/>
    <Sidebar/>
    <RightPane>
        <Post/>
        <Suspense fallback={<Spinner/>}>
            <Comments/> <!--We don't need comments to load until data is fetched-->
        </Suspense>
    </RightPane>
	<LeftPane>
        <Suspense fallback={<Spinner/>}>
            <Articles/> <!--As part of Selective hydration, this component can be prioritized-->
        </Suspense>
	</LeftPane>
</Layout>
````



## 3. Selective Hydration

In the above example we are suspending the **Comments** and the **Articles**. So the **Comments** gets hydrated first, then the **Articles**.

But if the User tries to interact with the Articles, React will priorities hydrating **Articles** component first before the **Comments** component



## 4. Automatic Batching

- [Automatic Batching Link](https://github.com/reactwg/react-18/discussions/21)

### What is batching?

Batching is when React **groups multiple state updates into a single re-render** for better performance.

For example, if you have two state updates inside of the same click event, React has always batched these into one re-render. If you run the following code, you’ll see that every time you click, React only performs a single render although you set the state twice:

```javascript
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount(c => c + 1); // Does not re-render yet
    setFlag(f => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

- ✅ [Demo: React 17 batches inside event handlers](https://codesandbox.io/s/spring-water-929i6?file=/src/index.js). (Notice one render per click in the console.)

This is great for performance because it avoids unnecessary re-renders. It also prevents your component from rendering “half-finished” states where only one state variable was updated, which may cause bugs. This might remind you of how a restaurant waiter doesn’t run to the kitchen when you choose the first dish, but waits for you to finish your order.

However, React wasn’t consistent about when it batches updates. For example, if you need to fetch data, and then update the state in the `handleClick` above, then React would *not* batch the updates, and perform two independent updates.

This is because React used to only batch updates *during* a browser event (like click), but here we’re updating the state *after* the event has already been handled (in fetch callback):

```javascript
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetchSomething().then(() => {
      // React 17 and earlier does NOT batch these because
      // they run *after* the event in a callback, not *during* it
      setCount(c => c + 1); // Causes a re-render
      setFlag(f => !f); // Causes a re-render
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

- 🟡 [Demo: React 17 does NOT batch outside event handlers](https://codesandbox.io/s/trusting-khayyam-cn5ct?file=/src/index.js). (Notice two renders per click in the console.)

Until React 18, we only batched updates during the React event handlers. Updates inside of promises, `setTimeout`, native event handlers, or any other event were not batched in React by default.

### What is automatic batching?

Starting in React 18 with [`createRoot`](https://github.com/reactwg/react-18/discussions/5), all updates will be automatically batched, no matter where they originate from.

This means that updates inside of timeouts, promises, native event handlers or any other event will batch the same way as updates inside of React events. We expect this to result in less work rendering, and therefore better performance in your applications:

```javascript
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetchSomething().then(() => {
      // React 18 and later DOES batch these:
      setCount(c => c + 1);
      setFlag(f => !f);
      // React will only re-render once at the end (that's batching!)
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

- ✅ [Demo: React 18 with `createRoot` batches even outside event handlers!](https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js) (Notice one render per click in the console!)
- 🟡 [Demo: React 18 with legacy `render` keeps the old behavior](https://codesandbox.io/s/jolly-benz-hb1zx?file=/src/index.js) (Notice two renders per click in the console.)

> Note: It is expected that you will [upgrade to `createRoot`](https://github.com/reactwg/react-18/discussions/5) as part of adopting React 18. The old behavior with `render` only exists to make it easier to do production experiments with both versions.

React will batch updates automatically, no matter where the updates happen, so this:

```javascript
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
}
```

behaves the same as this:

```javascript
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);
```

behaves the same as this:

```javascript
fetch(/*...*/).then(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
})
```

behaves the same as this:

```javascript
elm.addEventListener('click', () => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
});
```

> Note: React only batches updates when it’s generally safe to do. For example, React ensures that **for each user-initiated event like a click or a keypress, the DOM is fully updated before the next event**. This ensures, for example, that a form that disables on submit can’t be submitted twice.

### What if I don’t want to batch?

Usually, batching is safe, but some code may depend on reading something from the DOM immediately after a state change. For those use cases, you can use `ReactDOM.flushSync()` to opt out of batching:

```javascript
import { flushSync } from 'react-dom'; // Note: react-dom, not react

function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });
  // React has updated the DOM by now
  flushSync(() => {
    setFlag(f => !f);
  });
  // React has updated the DOM by now
}
```

We don't expect this to be common.

### Does this break anything for Hooks?

If you’re using Hooks, we expect automatic batching to "just work" in the vast majority of cases. (Tell us if it doesn't!)



## 5. Concurrent Features

- `startTransition`
- `useDeferredValue`
- `<SuspenseList>`



## Using React 18

Use `@vitejs/app`  to setup React 18.

```bash
# Using npm
npm init @vitejs/app .

# or using yarn
yarn init @vitejs/app .

# Later you can install the latest react@18.x using the following commant
# using yarn
yarn add react@alpha react-dom@alpha

# using npm
npm install react@alpha react-dom@alpha

```

