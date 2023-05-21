import React from "react";
import Button from "../@common/Button";
import TimelineComponent from "../MeetingCalenderContainer/BottomComponent/TimelineComponent";
import QRContainer from "./QRContainer";

function LowerContainer({ booked }: any) {
  return (
    <div className="flex justify-between h-full">
      <QRContainer />
      <div className="w-[30%] h-[100%] min-h-[100%] bg-black/5 rounded-br-[40px]">
        <div className="bg-white h-[80%] max-h-[80%] rounded-b-[40px] p-4 ">
          <p className="py-2 text-lg pb-4 px-4 bg-[#0072B8]/5 mb-2 rounded-lg">
            Today
          </p>
          <div className="h-[86%] overflow-hidden">
            <TimelineComponent />
          </div>
        </div>
        <div className="flex items-center justify-center h-[20%] rounded-b-[40px]">
          <Button text={"Book This Room"} className={"px-10"} />
        </div>
      </div>
    </div>
  );
}

export default LowerContainer;
