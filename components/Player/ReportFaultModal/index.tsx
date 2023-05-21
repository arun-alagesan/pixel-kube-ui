import React from "react";
import Button from "../@common/Button";
import Input from "../@common/Input";
function ReportFaultModal() {
  return (
    <div className="p-4">
      <div className="flex justify-center text-[#95a1b8]">Touch one of the following issues:</div>
      <div className="flex gap-4 justify-center mt-4">
        <Button
          text="Keeps cutting out"
          className="bg-[#626574]/10 text-[#95a1b8] rounded-[24px] px-8 py-2 h-[50px] w-[200px]"
        />
        <Button
          text="Can't hear caller"
          className="bg-[#626574]/10 text-[#95a1b8] rounded-[24px] px-8 py-2 h-[50px] w-[200px]"
        />
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <Button
          text="No Dial Tone"
          className="bg-[#626574]/10 text-[#95a1b8] rounded-[24px] px-8 py-2 h-[50px] w-[200px]"
        />
        <Button
          text="Doesn't respond"
          className="bg-[#626574]/10 text-[#95a1b8] rounded-[24px] px-8 py-2 h-[50px] w-[200px]"
        />
      </div>
      <div className="flex m-6">
        <textarea className="border h-[150px] w-full rounded-lg p-1" placeholder="Alternative you can start typing"/>
      </div>
      <div className="flex justify-center">
        <Button text="Send Report" className="px-4"/>
      </div>
    </div>
  );
}

export default ReportFaultModal;
