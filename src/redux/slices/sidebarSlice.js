import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLargeOpen: true,
  isSmallOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      if (isScreenSmall()) {
        state.isSmallOpen = !state.isSmallOpen;
      } else {
        state.isLargeOpen = !state.isLargeOpen;
      }
    },
    close: (state) => {
      if (isScreenSmall()) {
        state.isSmallOpen = false;
      } else {
        state.isLargeOpen = false;
      }
    },
  },
});

export const { toggle, close } = sidebarSlice.actions;

export const selectSidebar = (state) => state.sidebar;

function isScreenSmall() {
  return window.innerWidth < 1024;
}
