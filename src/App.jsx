import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-white">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50">
        <input
          type="text"
          name=""
          id=""
          placeholder="Password"
          readOnly
          value={password}
          className="outline-none w-full py-1 px-3"
        />
        <button className="outline-none bg-amber-400 px-3 py-1 hover:bg-amber-500 cursor-pointer">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 items-center">
        <div className="text-[#ffffffc4] p-2 flex items-center gap-x-2">
          <input
            type="range"
            className="h-2 bg-amber-200 rounded-full appearance-none cursor-pointer "
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="length"
            max={30}
            min={6}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="text-[#ffffffc4] p-2 flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id="number"
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="text-[#ffffffc4] p-2 flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id="charInput"
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
      
    </div>
  );
}

export default App;
