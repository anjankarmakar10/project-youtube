import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isLargeOpen: true,
    isSmallOpen: false,
    isWatchPage: false,
  },
  reducers: {
    wtachPage: (state) => {
      state.isWatchPage = true;
    },

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

function isScreenSmall() {
  return window.innerWidth < 1024;
}

export const { toggle, close, wtachPage } = sidebarSlice.actions;

export default sidebarSlice.reducer;
