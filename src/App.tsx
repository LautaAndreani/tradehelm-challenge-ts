import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [close, setClose] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center w-full text-center min-h-screen ">
      <div className="h-full w-full">
        <h1 className="text-3xl font-bold my-5">Supermarket list</h1>
        <p className="font-bold my-5">0 item(s)</p>
        <button onClick={() => setClose(!close)} className="bg-[#01A8FF] hover:bg-[#029ef1] text-white w-48 text-xl px-3 py-3 rounded-md">
          Add item
        </button>
        <AddTask close={close} setClose={setClose} />
      </div>
    </div>
  );
}

export default App;
