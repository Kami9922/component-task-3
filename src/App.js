import styles from "./app.module.css";
import { useState } from "react";

// export const App = () => {
// 	const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// 	const operators = [
// 		{ name: "plus", value: "+" },
// 		{ name: "minus", value: "-" },
// 		{ name: "reset", value: "C" },
// 		{ name: "equal", value: "=" },
// 	];

// 	const calculateResult = () => {
// 		let result;
// 		if (operator === "+") {
// 			result = Number(operand1) + Number(operand2);
// 		} else if (operator === "-") {
// 			result = Number(operand1) - Number(operand2);
// 		}
// 		setRenderOfProcess(result.toString());
// 	};

// 	const [operand1, setOperand1] = useState(0);
// 	const [operand2, setOperand2] = useState("");
// 	const [operator, setOperator] = useState("");
// 	const [turn, setTurn] = useState(1);
// 	const [renderOfProcess, setRenderOfProcess] = useState("");

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<div className={styles.calc}>
// 					<div className={styles.result}>{renderOfProcess}</div>
// 					<ul className={`${styles["button-list"]} ${styles.nums}`}>
// 						{NUMS.map((item, index) => {
// 							return (
// 								<li
// 									key={index}
// 									className={`${styles.button} ${styles.num}`}
// 									onClick={() => {
// 										if (turn === 1) {
// 											setOperand1(operand1 + String(index));
// 										} else {
// 											setOperand2(operand2 + String(index));
// 										}
// 										setRenderOfProcess(turn === 1 ? operand1 : operand2);
// 									}}
// 								>
// 									{item}
// 								</li>
// 							);
// 						})}
// 					</ul>
// 					<ul className={`${styles.operators} ${styles["button-list"]}`}>
// 						{operators.map((item) => {
// 							return (
// 								<li
// 									key={item.name}
// 									className={`${styles.operator} ${styles.button}`}
// 									onClick={() => {
// 										if (item.name === "reset") {
// 											setOperand1("");
// 											setOperand2("");
// 											setOperator("");
// 											setRenderOfProcess("");
// 											setTurn(1);
// 										} else if (item.name === "plus") {
// 											setOperator("+");
// 											setTurn(2);
// 										} else if (item.name === "minus") {
// 											setOperator("-");
// 											setTurn(2);
// 										} else {
// 											calculateResult();
// 										}
// 									}}
// 								>
// 									{item.value}
// 								</li>
// 							);
// 						})}
// 					</ul>
// 				</div>
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const operators = [
		{ name: "plus", value: "+" },
		{ name: "minus", value: "-" },
		{ name: "reset", value: "C" },
		{ name: "equal", value: "=" },
	];

	const calculateResult = () => {
		let result;

		if (operator === "+") {
			result = Number(operand1) + Number(operand2);
			setOperand1("");
			setOperand2("");
			setOperator("isDefault");
			// setTurn(1);
		} else if (operator === "-") {
			result = Number(operand1) - Number(operand2);
			setOperand1("");
			setOperand2("");
			// setTurn(1);
			setOperator("isDefault");
		} else {
			result = operand1;
		}

		setRenderOfProcess(result.toString());
	};

	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("isDefault");
	// const [turn, setTurn] = useState(1);
	const [renderOfProcess, setRenderOfProcess] = useState("");

	return (
		<div className="App">
			<header className="App-header">
				<div className={styles.calc}>
					<div className={styles.result}>{renderOfProcess}</div>
					<ul className={`${styles["button-list"]} ${styles.nums}`}>
						{NUMS.map((item, index) => {
							return (
								<li
									key={index}
									className={`${styles.button} ${styles.num}`}
									onClick={() => {
										if (Number(operand1[0]) === 0) {
											setOperand1(index);
											setRenderOfProcess(index);
										} else {
											if (operator === "isDefault") {
												setOperand1(operand1 + String(index));
												setRenderOfProcess(operand1 + String(index));
											} else if (operator !== "isDefault") {
												setOperand2(operand2 + String(index));
												setRenderOfProcess(operand2 + String(index));
											}
										}
									}}
								>
									{item}
								</li>
							);
						})}
					</ul>
					<ul className={`${styles.operators} ${styles["button-list"]}`}>
						{operators.map((item) => {
							return (
								<li
									key={item.name}
									className={`${styles.operator} ${styles.button}`}
									onClick={() => {
										if (item.name === "reset") {
											setOperand1("");
											setOperand2("");
											setOperator("isDefault");
											setRenderOfProcess("");
											// setTurn(1);
										} else if (item.name === "plus") {
											setOperator("+");
											// setTurn(2);
											setRenderOfProcess("+");
										} else if (item.name === "minus") {
											setOperator("-");
											// setTurn(2);
											setRenderOfProcess("-");
										} else if (item.name === "equal") {
											calculateResult();
										}
									}}
								>
									{item.value}
								</li>
							);
						})}
					</ul>
				</div>
			</header>
		</div>
	);
};
