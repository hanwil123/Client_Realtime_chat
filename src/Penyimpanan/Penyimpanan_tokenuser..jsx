import {create} from 'zustand';


const useStore = create((set) => ({
    tokenuser : null,
    usersname : null,
    setTokenUser : (tokenuser) => set({tokenuser}),
    setUsersName : (usersname) => set({usersname}),
}));
export default useStore;