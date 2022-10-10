import create from 'zustand';

const booleansStore = create(set => ({
    moreInfo: false,

    switchMoreInfo: () => set( state => ({ moreInfo: !state.moreInfo })),
}));

export default booleansStore;
