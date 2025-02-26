// Zustand state management
import { create } from "zustand";

type Store = {
  area: string;
  luckType: string;
  beliefType: string;
  // eslint-disable-next-line no-unused-vars
  setArea: (area: string) => void;
  // eslint-disable-next-line no-unused-vars
  setLuckType: (luckType: string) => void;
  // eslint-disable-next-line no-unused-vars
  setBeliefType: (beliefType: string) => void;
};

export const useStore = create<Store>((set) => ({
  area: "all",
  luckType: "all",
  beliefType: "shinto",
  setArea: (area) => set({ area }),
  setLuckType: (luckType) => set({ luckType }),
  setBeliefType: (beliefType) => set({ beliefType }),
}));
