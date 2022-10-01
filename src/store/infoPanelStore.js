import create from "zustand";

const infoPanelStore = create(set => ({
    info: true,

    toggleInfo: () => set(state => ({ info: !state.info })),
}));

export default infoPanelStore;
