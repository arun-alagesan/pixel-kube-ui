import dayjs from "dayjs";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
export const initialvalue = {
  isBookSpaceMenu: false,
  selectedMenu: -1,
  bookRoomInfo: {
    location: "",
    building: "",
    floor: "",
    startDate: dayjs("2022-04-07"),
    endDate: dayjs("2022-04-07"),
    attendies: "",
  },
};
type spaceContextDataType = {
  isBookSpaceMenu: boolean;
  selectedMenu: number;
  bookRoomInfo: {
    location: string;
    building: string;
    floor: string;
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
    attendies: string;
  };
};
const SpaceContext = createContext<spaceContextDataType>(initialvalue);
export default SpaceContext;
