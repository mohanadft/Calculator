import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  const [text, setText] = React.useState("");
  const buttonContent = [
    "1",
    "2",
    "3",
    "=",

    "4",
    "5",

    "6",
    "/",

    "7",
    "8",

    "9",
    "*",
    "0",
    ".",

    "C",

    "AC",

    "+",
    "-",
  ];
  return (
    <div className="container">
      <div className="screen">
        <input className="result" type="text" disabled value={text} />
      </div>
      <div className="btns">
        {buttonContent.map((e, index) => (
          <span
            className="button"
            key={index}
            type={isNaN(parseInt(e)) && e !== "." ? "operation" : "number"}
            onClick={() => {
              switch (e) {
                case "C":
                  setText((prevText) => prevText.slice(0, -1));
                  break;
                case "=":
                  if (text !== "") setText(eval(text).toString());
                  break;
                case "AC":
                  setText("");
                  break;
                default:
                  setText((prev) => prev + e);
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
