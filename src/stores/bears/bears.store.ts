import { create } from "zustand";

export interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBlackBears: (by: number) => void;
  decreaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  decreasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  decreasePandaBears: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  // Estado inicial
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  increaseBlackBears: (by: number) =>
    set((state: BearState) => ({ blackBears: state.blackBears + by })),
  decreaseBlackBears: (by: number) =>
    set((state: BearState) => ({ blackBears: state.blackBears - by })),
  increasePolarBears: (by: number) =>
    set((state: BearState) => ({ polarBears: state.polarBears + by })),
  decreasePolarBears: (by: number) =>
    set((state: BearState) => ({ polarBears: state.polarBears - by })),
  increasePandaBears: (by: number) =>
    set((state: BearState) => ({ pandaBears: state.pandaBears + by })),
  decreasePandaBears: (by: number) =>
    set((state: BearState) => ({ pandaBears: state.pandaBears - by })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));
