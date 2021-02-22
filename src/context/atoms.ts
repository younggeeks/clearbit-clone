import { atom } from "recoil";
export enum Device {
  mobile = "Mobile",
  tablet = "Tablet",
  none = "",
}

export const navState = atom({
  key: "selectedNav",
  default: {
    device: Device.none,
  },
});
