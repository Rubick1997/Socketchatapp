import React from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login"

function App() {
  const [id, setId] = useLocalStorage();

  return (
    <div>
      {id}
      <Login onSubmitId ={setId} />
    </div>
  );
}

export default App;
