import { useState, useRef } from "react";
import "./App.css";

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	const resultRef = useRef<HTMLParagraphElement>(null);
	const [result, setResult] = useState(0);

	const plus = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (inputRef.current) {
			setResult((result) => result + Number(inputRef.current!.value));
		}
	};

	const minus = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Add the code for the minus function
		e.preventDefault();
		if (inputRef.current) {
			setResult((result) => result - Number(inputRef.current!.value));
		}
	};

	const times = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Add the code for the plus function
		e.preventDefault();
		if (inputRef.current) {
			setResult((result) => result * Number(inputRef.current!.value));
		}
	};

	const divide = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Add the code for the divide function
		e.preventDefault();
		if (inputRef.current) {
			const inputValue = Number(inputRef.current.value);
			if (inputValue === 0) {
				alert("Cannot divide by zero");
				return;
			}
			setResult((result) => result / inputValue);
		}
	};

	const resetInput = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Add the code for the resetInput function
		e.preventDefault();
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	const resetResult = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Add the code for the resetResult function
		e.preventDefault();
		setResult(0);
	};

	return (
		<div className="App">
			<div>
				<h1>Simplest Working Calculator</h1>
			</div>
			<form>
				<p ref={resultRef}>{result}</p>
				<input
					pattern="[0-9]"
					ref={inputRef}
					type="number"
					placeholder="Type a number"
				/>
				<button onClick={plus}>add</button>
				<button onClick={minus}>subtract</button>
				<button onClick={times}>multiply</button>
				<button onClick={divide}>divide</button>
				<button onClick={resetInput}>reset input</button>
				<button onClick={resetResult}>reset result</button>
			</form>
		</div>
	);
}

export default App;
