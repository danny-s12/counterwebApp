import "./App.css"
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);
  return (
    <div className="counter-page">
      <div className="counter-card">
          <h1 className="counter-title"> Counter App</h1>
          <h2 className="counter-value">{count}</h2>
          <div className="counter-actions">
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
          </div>
      </div>
    </div>
  );
}
export default App;
