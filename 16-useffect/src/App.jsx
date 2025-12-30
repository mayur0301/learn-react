import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(100)
  useEffect(function () {
    console.log("useEffect is running...");
  }, [num]);

  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button
        onMouseEnter={() => {
          setnum(num + 1);
        }}
        onMouseLeave={()=>{
          setnum2(num2+10)
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
