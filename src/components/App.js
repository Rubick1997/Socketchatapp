import React from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login"
import Dashboard from "./Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <div>
      {id ? <Dashboard id = {id}/> :<Login onSubmitId ={setId} />} 
    </div>
  );
}

export default App;
