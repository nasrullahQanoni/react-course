import { useState } from "react";

function Form() {
  const[showpass, setShowpass] = useState(true)
return (
  <>
    <input className ="rounded bg-amber-300 "type={!showpass ? "text" : "password"} placeholder="Enter password" />
      <button
        type="button"
        onClick={() => setShowpass(!showpass)}
      >
        {showpass ? "Show" : "Hide"}
      </button>
  </>
)
}

export default Form;
