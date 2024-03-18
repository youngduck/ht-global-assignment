import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
});

export const linkState = atom({
  key: "linkState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
