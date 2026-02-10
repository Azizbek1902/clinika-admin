import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
    isCollapsed: boolean;
}

const initialState: SidebarState = {
    isCollapsed: false,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
        closeSidebar: (state) => {
            state.isCollapsed = false;
        },
    },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
