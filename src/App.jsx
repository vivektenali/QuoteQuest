import { useState } from "react";

import "./App.css";

function App() {
  const [Quote, setQuote] = useState("Click Below Button to Generate Quote");

  return (
    <>
      <h1>{Quote}</h1>
      <div className="card">
        <button
          onClick={() => {
            fetch("https://api.adviceslip.com/advice")
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                setQuote(data.slip.advice);
                console.log(data.slip.advice);
              });
          }}
        >
          Quote
        </button>
      </div>
    </>
  );
}

export default App;
