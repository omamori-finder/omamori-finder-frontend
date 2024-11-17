// Zustand state management
import { create}  from "zustand";

type Store = {
    region: string,
    luckType: string,
    beliefType: string,
    setRegion: (region: string) => void;
    setLuckType: (luckType: string) => void;
    setBeliefType: (beliefType: string) => void;
}

export const useStore = create<Store>((set) => ({
    region: "all",
    luckType: "all",
    beliefType: "shinto",
    setRegion: (region) => set({region}),
    setLuckType: (luckType) => set({luckType}),
    setBeliefType: (beliefType) => set({beliefType})
}))