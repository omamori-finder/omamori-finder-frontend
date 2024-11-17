// Zustand state management
import { create } from "zustand";

type Store = {
  area: string;
  luckType: string;
  beliefType: string;
  setArea: (area: string) => void;
  setLuckType: (luckType: string) => void;
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
