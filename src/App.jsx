import { useState } from "react";
import "./App.css";
import { OTPInput } from "./OTPInput";

function App() {
  const [code, setCode] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 mx-auto p-4 ">
      <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg p-4 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          User verification
        </h2>
        <h4 className="font-light text-gray-400 text-center">
          Enter the 4-digit verification code
        </h4>
        <OTPInput codeLength={4} onChangeCode={setCode} code={code} />
      </div>
    </div>
  );
}

export default App;
