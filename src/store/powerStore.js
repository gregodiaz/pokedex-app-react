import create from 'zustand';

const booleansStore = create(set => ({
    isOn: false,

    switchPower: () => set( state => ({ isOn: !state.isOn })),
}));

export default booleansStore;
