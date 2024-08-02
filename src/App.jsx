import { useState } from "react";
import "./App.css";
import { OTPInput } from "./OTPInput";

function App() {
  const [code, setCode] = useState("");

  function verifyCode() {
    console.log(code);
  }

  return (
    <div className="min-h-screen bg-gray-100 mx-auto p-4 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl p-16 min-w-96 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          User verification
        </h2>
        <h4 className="font-light text-gray-400 text-center">
          Enter the 4-digit verification code
        </h4>
        <OTPInput codeLength={4} onChangeCode={setCode} />
        <button
          onClick={() => verifyCode()}
          className="text-white bg-[#050708] uppercase font-bold rounded-md text-xs px-5 mt-4 py-3 tracking-widest"
        >
          verify
        </button>
        <span className="my-2 text-sm font-bold tracking-widest"></span>
      </div>
    </div>
  );
}

export default App;
