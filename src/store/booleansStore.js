import create from "zustand";

const booleansStore = create(set => ({
    isOn: false,
    moreInfo: false,
    shiny: false,

    switchPower: () => set( state => ({ isOn: !state.isOn })),
    switchMoreInfo: () => set( state => ({ moreInfo: !state.moreInfo })),
    switchShiny: () => set( state => ({ shiny: !state.shiny })),
}));

export default booleansStore;
