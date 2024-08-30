import { create } from "zustand";

type State = {
	selectRepo: Repo | null;
};
type Actions = {
	setSelectRepo: (repo: Repo | null) => void;
};
const useSelectRepo = create<State & Actions>((set) => ({
	selectRepo: null,
	setSelectRepo: (repo) => set({ selectRepo: repo }),
}));

export { useSelectRepo };
