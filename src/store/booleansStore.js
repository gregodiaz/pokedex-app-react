import create from "zustand";

const booleansStore = create(set => ({
    isOn: false,
    moreInfo: false,

    switchPower: () => set( state => ({ isOn: !state.isOn })),
    switchMoreInfo: () => set( state => ({ moreInfo: !state.moreInfo })),
}));

export default booleansStore;
