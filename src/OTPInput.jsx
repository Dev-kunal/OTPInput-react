import React, { useEffect, useState } from "react";

export function OTPInput({ codeLength, onChangeCode }) {
  const [OTP, setOTP] = useState(Array.from({ length: codeLength }, () => ""));

  function updateOTPValue(value, index) {
    setOTP((oldVal) => {
      const updatedState = [...oldVal];
      updatedState[index] = value;
      return updatedState;
    });
  }

  function handleInputChange(event) {
    const element = event.target;
    const { value, id } = element;
    // backspace/for empty value
    if (!value) return;
    updateOTPValue(value, id);
    if (element.nextSibling) element?.nextSibling?.focus();
  }

  function handleBackSpace(event) {
    const element = event.target;
    const { id } = element;
    updateOTPValue("", id);
    if (element.previousSibling) element?.previousSibling?.focus();
  }

  function onPastCode(e) {
    const copiedCode = e.clipboardData.getData("Text").split("");
    setOTP(copiedCode);
  }

  useEffect(() => onChangeCode(OTP.join("")), [OTP]);

  return (
    <>
      <div className="flex gap-2 my-4">
        {OTP.map((val, index) => (
          <input
            key={index}
            className="border border-gray-300 p-2 rounded-lg size-14 text-center text-lg"
            type="text"
            id={index}
            maxLength={1}
            minLength={1}
            onPaste={(e) => onPastCode(e)}
            value={OTP[index]}
            onFocus={(e) => e.target.select()}
            onClick={(e) => e.target.select()}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") handleBackSpace(e);
            }}
          />
        ))}
      </div>
    </>
  );
}
