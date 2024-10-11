import { useState } from "react";
import React from 'react'
function InitialSetupPage(){
  var [count, setCount] = useState(0);
  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default InitialSetupPage;
