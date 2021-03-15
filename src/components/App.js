import React,{useState} from "react"
import Login from "./Login"

function App() {
  const [id, setId] = useState();

  return (
    <div>
      <Login onSubmitId ={setId} />
    </div>
  );
}

export default App;
