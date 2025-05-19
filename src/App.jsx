import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_-+=/|()`~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setCopied(true);
  };

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-8 mt-8 bg-gray-800">
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
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToClipboard}
          className={` outline-none ${
            copied ? "bg-green-400" : "bg-amber-400 hover:bg-amber-500"
          } px-3 py-1  cursor-pointer`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="flex text-sm gap-x-2 items-center">
        <div className="text-[#ffffffc4] flex items-center gap-x-2">
          <input
            type="range"
            className="h-2 rounded-full cursor-pointer accent-amber-400 hover:accent-amber-500"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="length"
            max={50}
            min={6}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="text-[#ffffffc4] flex items-center gap-x-1 ml-auto">
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
        <div className="text-[#ffffffc4] p-2 flex items-center gap-x-1 ml-auto">
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
