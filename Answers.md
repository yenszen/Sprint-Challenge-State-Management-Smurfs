1. What problem does the context API help solve?

Context API solves the problem of prop drilling, which can be quite cumbersome when we have deeply nested child components that require access to some props common throughout the app. This is because Context API allows each child component, no matter how deeply nested, to directly access some prop on a parent component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In redux, we first have action creators that get called whenever we want to update some piece of state stored in our redux store. The action creator then returns an action which contains the data that will eventually be updating state, and gets dispatched to reducers. Reducers are what handles our state, as it takes in the actions dispatched as well as the current piece of state and decides what needs to be updated, and once that is processed it sends off the latest piece of state back up to our redux store.
The store is known as a single source of truth as it holds the only copy of the most up to date state in our application that can then be accessed by each child component.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state that can be shared with every component, whereas component state is more of a local state that is home to only a component unless passed as props to other components.
A good time to use application over component state is when there are some common pieces of state such as ui theme that have to be accessed by multiple components of different nested levels. On the other hand, it’s generally better to use component over application state if there are pieces of state data that are only specific to a single component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that allows us to call actions that return a function instead of an action object, thus allowing us to delay dispatching the action and either perform additional tasks in the meantime or simply wait till certain conditions are met. Therefore it changes our action creators by returning a function within a function, i.e. a thunk.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Redux over Context API simply because I think that Redux gives me more options in controlling my application, whereas Context only solves the issue of prop-drilling through multiple nested components, which Redux is able to handle in addition to other tasks as well.
