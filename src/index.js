import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  const [result, setResult] = useState("");
  const [n, setN] = useState(null);
  const [op, setOp] = useState(null);

  const btns = "1,2,3,=,4,5,6,/,7,8,9,*,0,.,C,AC,+,-".split(",");

  return (
    <div className="container">
      <div className="screen">
        <input className="result" type="text" disabled value={result} />
      </div>
      <div className="btns">
        {btns.map((e, index) => (
          <span
            className="button"
            key={index}
            type={isNaN(parseInt(e)) && e !== "." ? "operation" : "number"}
            onClick={() => {
              switch (e) {
                case "C":
                  setResult((prevText) => prevText.slice(0, -1));
                  break;
                case "=":
                  if (result) {
                    const secondNumber = Number(result);
                    setResult("");
                    switch (op) {
                      case "+":
                        setResult(Number(n) + Number(secondNumber));
                        break;
                      case "-":
                        setResult(Number(n) - Number(secondNumber));
                        break;
                      case "/":
                        setResult(Number(n) / Number(secondNumber));
                        break;
                      case "*":
                        setResult(Number(n) * Number(secondNumber));
                        break;
                      default:
                    }
                  }
                  break;
                case "AC":
                  setResult("");
                  setOp(null);
                  setN(null);
                  break;
                case "+":
                case "/":
                case "*":
                case "-":
                  setN(result);
                  setOp(e);
                  setResult("");
                  break;
                default:
                  setResult((prev) => prev + e);
              }
            }}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
