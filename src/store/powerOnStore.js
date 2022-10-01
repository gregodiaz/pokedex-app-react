import create from "zustand";

const powerOnStore = create(set => ({
    isOn: false,

    switchPower: () => set( state => ({ isOn: !state.isOn })),
}));

export default powerOnStore;
