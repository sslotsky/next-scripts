# Video 2.2

## Opening Slides

![Slide 1: Section Title Slide](./slide-1-title.png)

Hello and welcome to _Managing State_. In our last video we saw how component props are used in React to control the output of our components. Today we'll look at using component state so that we can actually update the values that our app is using when user interactions occur.

![Slide 2: Summary Slide](./slide-2-summary.png)

We'll start be declaring some simple state variables, then we'll pass them into other components as props and see how to actually update the values.

## Content

_open App.css_

Currently, we're passing a hard-coded message into our child component. The first thing we're going to do is move that message into what's known as a state variable. We can do that by declaring a `state` object in our component class and adding a `message` member to it.

```javascript
class App extends Component {
  state = {
    message: "Hot reloading is great!"
  };
}
```

This variable can now be used as the `message` prop to our `Home` component by referencing `this-dot-state`.

```javascript
  render() {
    return <Home message={this.state.message} />;
  }
```

Once again, we haven't really done anything interesting here. Our app works exactly as it did before. But now that the message is kept in a state variable, we actually have the ability to update the value. This is done with a component function called `setState`, so let's define an operation that uses it. We'll give our component a function called `updateMessage`, which accepts a `message` argument and then passes that into the `setState` function.

```javascript
  updateMessage = message => this.setState({ message });
```

What we'll do next is pass our function down as a prop to our `Home` component.

```javascript
  render() {
    return (
      <Home message={this.state.message} updateMessage={this.updateMessage} />
    );
  }
```

Now we just need to modify the `Home` component so that it does something with this function.

_open Home.js_

We need to add `updateMessage` to the component signature. Then we can update our button to call that function with the string `"foo"` when it's clicked.

```javascript
export function Home({ message, updateMessage }) {
  ...
      <button onClick={() => updateMessage("foo")}>Click me!</button>
  ...
}
```

_check browser_

Now when I click the button, you will observe that the message on the screen changes to `"foo"`, just like we hoped. Let's pause for a moment and think about what's happening.

_back to App.js_

The `message` property in our `Home` component is actually a piece of state that's being managed by our `App` component, and when we click the button it ultimately called `setState`, which updates the value of the `message` variable. This causes the `App` component to re-render with the updated state values. Since the value of `message` changes, this changes the value of the `message` property that's being passed into the `Home` component. Because the property value changes, the `Home` component re-renders as well. This is what allows us to update the values that are bound to our views when users interact with our site, and that concludes our lesson. Today we learned how to use component state to update the values that our bound to our React components.

![Slide 3: Next Video Slide](./slide-3-next-video.png)

Join us for our next video where we'll see how to use context in order to make values available to components deeper down in the hierarchy.
