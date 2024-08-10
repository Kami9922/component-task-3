import styles from "./app.module.css";
import { useState } from "react";

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
		} else if (operator === "-") {
			result = Number(operand1) - Number(operand2);
		} else {
			result = operand1;
		}

		setOperand1(result.toString());
		setOperand2("");
		setOperator("isDefault");

		setRenderOfProcess(result.toString());
		setIsResult(true);
		console.log(isResult);
	};

	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("isDefault");
	const [renderOfProcess, setRenderOfProcess] = useState("");
	const [isResult, setIsResult] = useState(false);
	return (
		<div className="App">
			<header className="App-header">
				<div className={styles.calc}>
					<div className={`${styles.render} ${isResult ? styles.result : ""}`}>
						{renderOfProcess}
					</div>
					<ul className={`${styles["button-list"]} ${styles.nums}`}>
						{NUMS.map((item, index) => {
							return (
								<li
									key={index}
									className={`${styles.button} ${styles.num}`}
									onClick={() => {
										setIsResult(false);
										if (operator === "isDefault") {
											if (operand1 === "0") {
												setOperand1(String(index));
												setRenderOfProcess(String(index));
											} else {
												setOperand1(operand1 + String(index));
												setRenderOfProcess(operand1 + String(index));
											}
										} else {
											if (operand2 === "0") {
												setOperand2(String(index));
												console.log(renderOfProcess);

												setRenderOfProcess(renderOfProcess.slice(0, -1) + String(index));
												console.log(renderOfProcess);
											} else {
												setOperand2(operand2 + String(index));
												setRenderOfProcess(renderOfProcess + String(index));
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
										setIsResult(false);
										if (item.name === "reset") {
											setOperand1("");
											setOperand2("");
											setOperator("isDefault");
											setRenderOfProcess("");
										} else if (item.name === "plus") {
											if (operator !== "isDefault" && operand2) {
												calculateResult();
											}
											setOperator("+");
											renderOfProcess && setRenderOfProcess(renderOfProcess + "+");
										} else if (item.name === "minus") {
											if (operator !== "isDefault" && operand2) {
												calculateResult();
											}
											setOperator("-");
											renderOfProcess && setRenderOfProcess(renderOfProcess + "-");
										} else if (item.name === "equal") {
											if (operator !== "isDefault" && operand2) {
												calculateResult();
											}
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
