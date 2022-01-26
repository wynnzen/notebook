**catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI**



Error boundaries do **not** catch errors for:

- Event handlers
- Asynchronous code (e.g. `setTimeout` or `requestAnimationFrame`callbacks) 
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children) 



Condition

- static getDerivedStateFromError(error)  -> render a fallback UI after an error has been thrown
- componentDidCatch(error,info) ->  log error information.



```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
```



**As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.**

不处理错误就卸载整个dom树



try/catch -> imperative code 

Error Boundary -> declarative and specify



Error boundaries **do not** catch errors inside event handlers.

React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

If you need to catch an error inside event handler, use the regular JavaScript `try` / `catch` statement

因为event handler即使发生了error，其实是不影响render的，所以error不捕获event handler，event handler 使用try/catch就可以了