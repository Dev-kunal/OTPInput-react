import React, { useState } from "react";

export function OTPInput({ length, onChangeCode, code }) {
  const [OTP, setOTP] = useState([
    {
      1: "",
      2: "",
      3: "",
      4: "",
    },
  ]);

  function verifyCode() {
    console.log({ OTP: Object.values(OTP).join("") });
  }

  function handleInputChange(event) {
    const element = event.target;
    const { value, id } = element;
    // backspace/for empty value
    if (!value) return;
    setOTP((val) => ({ ...val, [id]: value }));
    element.nextSibling?.focus();
  }

  function handleBackSpace(event) {
    const element = event.target;
    setOTP((val) => ({ ...val, [element.id]: "" }));
    element.previousSibling?.focus();
  }

  return (
    <>
      <div className="flex gap-2 my-4">
        {[1, 2, 3, 4].map((num, index) => (
          <input
            key={index}
            className="border border-gray-300 p-2 rounded-lg size-14 text-center text-lg"
            type="text"
            id={num}
            maxLength={1}
            minLength={1}
            onPaste={(e) => {
              const copiedCode = e.clipboardData.getData("Text").split("");
              console.log({ copiedCode });
            }}
            value={OTP[num]}
            onFocus={(e) => e.target.select()}
            onClick={(e) => e.target.select()}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") handleBackSpace(e);
            }}
          />
        ))}
      </div>

      <button
        onClick={() => verifyCode()}
        className="text-white bg-[#050708] uppercase font-bold rounded-md text-xs px-5 py-3 tracking-widest"
      >
        verify
      </button>
    </>
  );
}
