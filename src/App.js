import { useState } from "react";
import "./App.css";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const [operand1, setOperand1] = useState("");
const [operand2, setOperand2] = useState("");
const [operator, setOperator] = useState("");

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
		</div>
	);
}

export default App;
