# Task

For this assessment, you will be building a calculator in React. You are provided with code snippets, and your task is to use these, plus any of your code to complete a calculator app that can perform the four basic mathematical operations: addition, subtraction, multiplication, and division.

## Before you begin

If you execute the `npm start` command before changing any code in this task, you'll get the notification in the code lab's terminal that reads *"webpack compiled successfully"*.

You are now ready to start working on your app. Follow the comments in the code! They are your instructions on what you need to do to make this app work. For example, once you've added the imports, you should be able to serve the app. If still needs work, but at least you'll have the app showing in the browser.

**Step 1.**

In this assessment, your goal is to build a simple calculator app.

The app should be fully functional. However, since you do not have the App.css file in the root folder, you need to add it, with the following code:
```css
* {
    font-family: sans-serif;
}
input,
button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
}
input {
    display: block;
    margin-bottom: 20px;
}
button {
    border: 1px solid gray;
    background: whitesmoke;
    margin-right: 5px;
}
button:nth-last-child(2),
button:nth-last-child(1) {
    background: tomato;
    color: white;
}
```

**Step 2.**
Here is the app's starting code:
```jsx
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
  };
 
  function times(e) { 
    // Add the code for the plus function 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App;
```
Your goal is to use this starting code and extend it with missing pieces to make the app.
- `Addition (plus)`: This function is already provided. It adds the value from the input field to the current result.
- `Subtraction (minus)`: Implement this function to subtract the input value from the result.
- `Multiplication (times)`: Implement this function to multiply the result by the input value.
- `Division (divide)`: Implement this function to divide the result by the input value. Make sure to handle division by zero by showing an alert.
- `Reset Input (resetInput)`: This function will reset the input field when the user clicks the reset button.
- `Reset Result (resetResult)`: This function will reset the displayed result to 0.

**Step 3.**

- At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.  Use the  `npm start` command to start the development server. 
- Ensure that you have the necessary dependencies installed (like React, ReactDOM, and React scripts).
- You can now view the App in your browser by navigating to localhost:3000. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
- In your browser, enter: http://localhost:3000 to see the output.a fully working simple calculator app.

