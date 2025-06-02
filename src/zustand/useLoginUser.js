import { create } from "zustand";


const useLoginUser = create((set) => ({
    isAuthenticated: false,
    userDetails: {},
    updateLoginUserDetails: (data) => {
        set({
            userDetails: data.user, isAuthenticated: data.
                isAuthenticated
        });
    }
}))


export default useLoginUser;